프론트 스터디 1주차 과제

# 조사해보기 (1)
- 트랜스파일링, 번들링, 폴리필은 어떤 작업인가요? 필요한 이유는 무엇일까요?

- 대표적인 번들러와 자바스크립트 트랜스파일러에는 어떤 것들이 있을까요?

1. 트랜스파일링 (Transpiling)
  정의: 트랜스파일링은 한 프로그래밍 언어로 작성된 코드를 비슷한 수준의 다른 언어로 변환하는 작업이다.
필요한 이유: 최신 문법이나 다른 언어로 작성된 코드를 브라우저가 이해할 수 있도록 변환하여, 다양한 환경에서도 동일하게 작동하도록 하기 위해 필요하다.
예시:
•	TypeScript → JavaScript
•	ES6+ → ES5
2. 번들링 (Bundling)
정의: 웹 애플리케이션의 여러 자바스크립트 파일, CSS 파일, 이미지 등 자원을 하나의 파일(혹은 최소한의 파일들)로 묶는 작업이다.
필요한 이유:
-	파일 개수를 줄여 HTTP 요청 수를 최소화
-	로드 속도 향상 및 캐싱 효율 증가
-	내부 모듈 구조를 노출하지 않아 보안성 향상
-	코드 압축 등을 통해 성능을 최적화
3. 폴리필 (Polyfill)
정의: 구형 브라우저에서 지원하지 않는 웹 표준 기능(예: Promise, fetch)을 사용할 수 있도록 도와주는 코드나 플러그인이다.
필요한 이유: 모든 브라우저가 최신 기능을 동일하게 지원하지 않기 때문에, 폴리필을 통해 호환성을 확보할 수 있다.


# 조사해보기 (2)

- npm 외의 다른 패키지 매니저에는 어떤 것들이 있을까요? npm에 비해 갖는 장점은 무엇일까요?
1. yarn
	- facebook에서 개발
	- 병렬 설치 적용으로 npm보다 빠른 속도
	- npm의 보안 취약점 해결
2. pnpm
	- global 저장소에 패키지를 한 번만 저장함으로써 저장 공간 절약
	- 많은 프로젝트를 단일 저장소에서 관리하는 모노레포 방식에서 유리

- 프로젝트를 생성했을 때 나오는 각 파일들은 어떤 역할을 하나요?
- node_modules/~: 설치된 외부 패키지들이 저장되는 폴더
- public/~: 정적 파일들이 저장되는 폴더 ex)html, 이미지 등
- src/~: 주요 소스 코드들이 저장되는 폴더 
- src/assets/~: 로고 이미지와 같은 정적 assets들이 저장되는 폴더
- App.jsx: 다른 컴포넌트들을 불러와서 조합하는 리액트의 메인 컴포넌트
- App.css, index.css: 전체 앱의 css를 설정
- main.jsx: 앱의 진입점 파일 App.jsx를 HTML에 렌더링하여 앱이 실행되도록 함
- index.html: 앱이 실행되는 HTML 템플릿
- package.json: 프로젝트의 메타 정보와 의존성 목록이 담긴 파일
- package-lock.json: 설치된 의존성들의 정확한 버전 정보가 담긴 파일
- vite.config.js: Vite 설정 파일
- .gitignore: Git에 노출하지 않을 파일/폴더를 정의한 파일 ex)node_modules./ 등
- eslint.config.js: 코드 스타일 검사를 위한 ESLint 설정 파일
-  README.md: 프로젝트 설명 등을 작성하는 문서

- src 폴더는 우리가 만들 웹 애플리케이션의 소스 모듈이 위치한 곳입니다. src 내부의 폴더 구조를 어떻게 설정할 수 있을까요? 다양한 방법을 조사해주세요.	
1. 기능 단위 폴더 구조
- 로그인 기능, 화면 이동 기능 등 기능별로 폴더를 나누어 설정
- 유지보수가 쉬우며, 팀 작업 시 역할 분담이 쉬움
-
2. 유형 기반 폴더 구조
- 역할별로 폴더를 나누어 설정 ex) pages, services, components 등
- 페이지를 작업할 때 개별적으로 작업할 수 있으므로 비교적 쉬움
- 기능 간 파일이 분산되어 있어, 기능별 코드 추적이 힘듦 