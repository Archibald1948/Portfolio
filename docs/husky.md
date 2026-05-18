# Husky + Commitlint 세팅 가이드

이 프로젝트는 [Husky](https://typicode.github.io/husky/)와 [commitlint](https://commitlint.js.org/)를 사용해 커밋 메시지 컨벤션을 자동으로 검증합니다. 이 문서는 처음 세팅하는 방법과 동작 방식을 정리합니다.

## 1. 사용 목적

- 커밋 메시지가 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따르도록 강제합니다.
- `commit-msg` 훅에서만 검증하며, `pre-commit`(린트/테스트 실행) 같은 추가 훅은 사용하지 않습니다.

## 2. 의존성 설치

```bash
pnpm add -D husky @commitlint/cli @commitlint/config-conventional
```

설치된 버전은 `package.json`의 `devDependencies`에서 확인할 수 있습니다.

## 3. Husky 초기화

```bash
pnpm exec husky init
```

이 명령은 다음을 수행합니다.

- `.husky/` 디렉토리 생성
- `package.json`의 `scripts`에 `"prepare": "husky"` 추가 → 다른 개발자가 `pnpm install`만 해도 훅이 자동으로 활성화됩니다.
- 기본 `.husky/pre-commit` 훅 생성 (이 프로젝트에서는 커밋 메시지만 검증하므로 삭제합니다)

```bash
rm .husky/pre-commit
```

## 4. `commit-msg` 훅 생성

`.husky/commit-msg` 파일을 다음 내용으로 만듭니다.

```sh
pnpm exec commitlint --edit "$1"
```

`$1`은 git이 훅에 넘겨주는 커밋 메시지 파일 경로입니다. commitlint가 그 파일을 읽어 규칙 위반 여부를 검사합니다.

## 5. `commitlint.config.js` 작성

프로젝트 루트에 `commitlint.config.js`를 만들고 아래 내용을 그대로 사용합니다.

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 수정
        'style',    // 코드 스타일 변경 (기능 변화 없음)
        'refactor', // 코드 리팩토링
        'perf',     // 성능 개선
        'test',     // 테스트 추가
        'chore',    // 빌드, 패키지 관리 등
        'ci',       // CI/CD 설정 변경
        'revert',   // 이전 커밋 되돌리기
        'build',    // 빌드 관련 변경
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
```

각 규칙의 의미는 다음과 같습니다.

| 규칙 | 의미 |
| --- | --- |
| `type-enum` | 허용된 타입(`feat`, `fix`, ...)만 사용 가능 |
| `type-case` | 타입은 소문자로만 작성 |
| `subject-empty` | subject(제목) 비워둘 수 없음 |
| `subject-full-stop` | subject 끝에 마침표 금지 |
| `subject-case` | subject 소문자로만 작성 |
| `scope-case` | scope 소문자로만 작성 |

레벨 `2`는 `error`(커밋 차단), `1`은 `warning`, `0`은 비활성입니다.

## 6. 커밋 메시지 형식

```
<type>(<scope>): <subject>
```

- `<type>`: 위 표의 11개 중 하나
- `<scope>`: 선택 사항, 변경 영역을 소문자로 (예: `auth`, `header`)
- `<subject>`: 변경 내용을 명령형/소문자로, 마침표 없이

### 좋은 예

```
feat: add login button
fix(auth): handle expired token
docs: update readme installation guide
```

### 잘못된 예

| 메시지 | 이유 |
| --- | --- |
| `잘못된 커밋 메시지` | type 없음 → `type-empty`, `subject-empty` |
| `Feat: add button` | type 대문자 → `type-case` |
| `feat: Add Button.` | subject 대문자 + 마침표 → `subject-case`, `subject-full-stop` |
| `update: fix bug` | 허용되지 않은 type → `type-enum` |

## 7. 동작 확인

훅이 잘 설치되었는지 확인하려면 일부러 잘못된 메시지로 커밋을 시도해 봅니다.

```bash
git commit -m "잘못된 메시지"
```

다음과 같은 출력이 나오면 정상입니다.

```
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]
husky - commit-msg script failed (code 1)
```

올바른 메시지로 다시 커밋하면 통과합니다.

```bash
git commit -m "chore: setup husky and commitlint"
```

CLI에서만 빠르게 검증하고 싶다면 다음 명령을 사용합니다.

```bash
echo "feat: test message" | pnpm exec commitlint
```

## 8. 다른 개발자가 클론한 뒤 할 일

`prepare` 스크립트 덕분에 추가 작업이 거의 없습니다.

```bash
pnpm install
```

설치가 끝나면 `.husky/commit-msg`가 자동으로 활성화됩니다. 만약 훅이 동작하지 않는다면 아래를 확인하세요.

- `.husky/` 디렉토리가 git에 커밋되어 있는지
- `git config core.hooksPath`가 `.husky`로 설정되어 있는지 (`pnpm exec husky init` 또는 `prepare` 실행 시 자동 설정됨)
- 파일 권한 문제라면 `chmod +x .husky/commit-msg`

## 9. 훅 임시 우회

긴급한 상황에서만 사용하세요.

```bash
git commit --no-verify -m "wip"
```

`--no-verify`는 `commit-msg`를 포함한 모든 git 훅을 건너뜁니다. 일상적으로 쓰지 않는 것을 권장합니다.
