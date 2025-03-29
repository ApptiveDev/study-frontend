# 조사해보기 (1)
---
### 트랜스파일링
어떤 프로그래밍 언어로 작성된 코드를 다른 프로그래밍 언어로 변환하는 것
ex > 최신 자바스크립트(ES6+)로 작성된 코드가 구형 브라우저에서도 동작하도록 변환
브라우저 간 호환성을 높여 다양한 환경에서 동일하게 작동하도록 함
- Babel: 자바스크립트 트랜스파일러로, 최신 버전의 자바스크립트 코드를 오래된 버전의 자바스크립트 코드로 변환
- TypeScript Compiler: TypeScript 코드를 JavaScript 코드로 변환
- SWC: 고성능 자바스크립트/타입스크립트 트랜스파일러로, Babel과 비슷한 기능을 제공하면서도 빠른 컴파일 속도를 가짐

### 번들링
사용자에게 웹 애플리케이션을 제공하기 위해 여러 코드와 프로그램을 최적화된 묶음으로 만든는 것 (번들 제품을 떠올리면 됨)
단순히 묶는 것이 아니라 압축하는 것이기 때문에 크기가 작아지고 속도가 빨라짐
또한 번들링된 웹 애플리케이션은 사용자가 임의로 조작할 수 없기 때문에 안정성이 확보됨
- Webpack: JavaScript 애플리케이션을 위한 모듈 번들러로, 효율적으로 모듈을 관리할 수 있도록 도와줌
- Rollup: 경량화와 번들 최적화에 중점을 둔 esm 지원 모듈 번들러로, 명확한 모듈 간 의존성 파악이 가능
- Parcel: Webpack이나 Rollup에 비해 사용법이 간단하고 빠른 성능을 가진 번들러

### 폴리필
브라우저에서 지원하지 않는 코드를 사용 가능한 코드 조각이나 플러그인으로 변환한 것
모든 브라우저에서 동일한 최신 기능을 지원하지 않기 때문에 폴리필을 통해 브라우저 간 호환성을 높임

---

# 조사해보기 (2)
---
### 패키지 매니저
패키지: 코드의 배포를 위해 사용되는 코드의 묶음 (일반적으로 라이브러리, 실행 파일을 포함)
패키지 매니저: 패키지 설치, 업데이트, 의존성 관리 등 패키지를 관리하는 작업을 편리하고 안전하게 수행하기 위해 사용하는 도구

### npm과 다른 패키지 매니저
- npm
    - Node.js의 기본 패키지 매니저
- Yarn
    - Facebook에서 개발한 패키지 매니저로, 병렬 설치가 가능하여 npm보다 빠름
    - npm의 취약점이었던 보안 문제를 해결 → 안전성 보장
- pnpm
    - 다중 프로젝트에서 의존성을 공유하고, 중복 설치를 피하여 저장 공간을 절약

### 프로젝트 생성 시 나오는 파일
- node_modules/: 설치된 패키지가 위치하는 폴더
- public/: 정적 파일(HTML, 이미지 등)이 위치하는 폴더
- src/: 소스 코드가 위치하는 폴더
    - assets/
    - App.css: App.jsx에서 사용하는 스타일을 정의하는 CSS 파일
    - App.jsx: 메인 컴포넌트(UI 정의)
    - index.jsx: React 애플리케이션의 엔트리 파일
    - main.jsx: 별도의 설정을 포함하는 파일
- .gitnore: Git에 포함하지 않을 파일 또는 폴더를 지정하는 파일
- eslint.config.js: ESLint 설정 파일
- index.html
- package-lock.json: 설치된 패키지의 버전을 기록하는 파일
- package.json: 프로젝트 메타 정보(이름, 버전, 의존성 목록 등)을 저장하는 파일
- README.md
- vite.config.json: Vite 설정 파일

### src 폴더 구조
- 기능별
- 유형별