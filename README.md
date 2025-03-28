## 조사해보기 (1)
### 트랜스파일링  
트랜스파일링이란 특정 언어로 작성된 코드를 비슷한 다른 언어로 변환시키는 행위이다.

- 구형 버전으로 변환해도 호환성을 확보하며 최신 기능을 사용할 수 있도록 한다. 
- 다양한 플러그인을 지원하여 사용자가 필요한 트랜스파일 과정을 제어할 수 있다. 
---
### 번들링  
번들링은 '어떤 것을 묶다, 모으다'는 뜻으로 개발에서 흩어져 있는 여러 코드와 프로그램을 묶어 그룹화하는 작업.
---
- 파일들을 압축하며 크기를 줄여서 원본 파일보다 실행 속도와 로딩 속도가 향상된다다. 성능 측면에서 강한 이점이 있다. 
- 번들링된 파일은 사용자가 임의로 조작할 수 없다. 번들링은 애플리케이션의 무결성과 보안을 강화한다. 
- 여러 JS파일에서 같은 이름의 변수를 활용하면 충돌이 발생할 수 있지만 번들링 도구인 webpack에서는 이러한 에러를 해결하며 JS 모듈 관리를 할 수 있다. 
---
### 폴리필
최신 기능을 지원하지 않는 브라우저에서도 해당 기능을 사용할 수 있도록 하는 코드 또는 스크립트다.
즉, 구형 브라우저가 최신 JS 기능을 이해할 수 있도록 '대체 코드'를 제공하는 역할을 한다. 

- 오래된 브라우저에서 최신 기능을 사용할 수 없기때문에 폴리필을 사용해서 해당 기능을 흉내내도록 한다. 
---
### 대표적인 번들러와 자바스크립트 트랜스파일러
Webpack(모듈 번들러)
- 여러 파일을 하나로 번들링, 코드 최적화 및 압충, 개발 서버 제공

vite
- esbuild로 미리 번들링한 모듈을 필요할 때 동적으로 가져옴, 즉각적으로 서버가 구동

Babel
- 최신 JavaScript(ES6+) -> 구버전 JavaScript(ES5)로 변환


## 조사해보기 (2)
### npm 외의 다른 패키지 매니저? npm에 비해 갖는 장점?
pmpm
- npm과 달리 의존성을 공유하여 저장 공간을 최적화한다. 중복 설치를 피하여 저장 공간을 절약할 수 있다. 

yarn
- 여러 패키지를 동시에 설치하도록 최적화되어 있어 npm보다 빠른 의존성 설치 속도와 패키지 버전 관리를 제공한다. yarn.lock 파일을 사용하여 의존성을 더욱 확실히 관리한다. 
---
### 프로젝트를 생성했을 때 나오는 각 파일들은 어떤 역할을 하는가?
- public: 정적 파일을 모아두는 디렉토리
- node_modules: 구성하는 모든 패키지 소스코드가 존재하는 폴더
- src: 소스코드, 즉 앱의 핵심 파일들이 위치하는 디렉토리
- src/assets: 애플리케이션에서 사용되는 정적 리소스들을 보관하는 디렉토리
- App.jsx: main.jsx에서 컴포넌트로써 사용, 작성한 기능들을 적절히 배치하여 구성
- App.css: App.jsx의 css
- main.jsx: index.html에서 script의 모듈로 인식되는 JS 파일(즉, 애플리케이션의 진입점)
- vite.config.js: vite의 기본 설정 파일
- eslint.config.js: eslint 설정 파일(코드 스타일 유지)
- package.json: 프로젝트에 대한 메타정보와 패키지 의존성을 관리하는 파일일
- gitignore: git에서 추적하지 않을 파일 및 폴더를 지정하는 파일
- index.html: npm프로젝트 설정파일

---
### src 내부의 폴더 구조 설정 방법
- 기능 또는 경로 별 그룹화  
: 비슷한 기능 또는 경로 별로 그룹화 된 폴더 내에서 CSS, JS 등을 함께 찾는 것
- 파일 유형에 의한 분류  
: 유사한 파일을 함께 그룹화하는 것
