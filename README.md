<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
## 조사 1-(1)
+ **트랜스파일링**
  + : 한 언어로 작성된 소스 코드를 비슷한 수준의 추상화(Abstraction)를 가진 다른 언어로 변환하는 것
  + ex) ES6+의 코드 ES5로 변환, 리액트의 JSX를 JavaScript 코드로 변환
  + 필요성: 브라우저 간 호환성 (<-모든 브라우저가 같은 기능 제공X)

+ **번들링**
  + : 사용자에게 웹 어플리케이션을 제공하기 위해 여러 코드와 프로그램들을 묶는 것
  + 필요성
    - 결과물 파일들을 압축하여 크기를 줄이기 때문에 번들링 X인 원본 프로그램 파일보다 크기가 작아짐 => 실행 속도, 로딩 속도 빨라짐
    - 번들링된 웹 어플리케이션 사용자가 임의 조작 불가능 => 어플리케이견의 무결성과 보안 강화
    - 파일 단위의 모듈 관리.
      ex) 기본적으로 전역 범위를 가지는 Javascript 파일이 여러 개 있을 때 변수 충돌의 문제가 발생할 수 있는데, 번들링 도구인 Webpack은 모듈 번들링을 통해 이 문제를 해결함

+ **폴리필**
  + : 변경된 표준을 준수할 수 있게 기존 함수의 동작 방식을 수정하거나, 새롭게 구현한 함수의 스크립트
  + 필요성
    - 모든 사용자에게 일관된 웹 어플리케이션 경험 제공
    - 기능 확장: 개발자는 최신 웹 표준을 준수하면서 오래된 브라우저와의 호환성 유지 가능
    - 개발 생산성 향상: 특정 브라우저에 대한 예외 처리를 줄일 수 있으며, 기능 구현에 더 많은 시간을 할애 가능.
      
## 조사 1-(2)
+ **대표적인 번들러**
  +  **Webpack**: 대표적인 자바스크립트 번들러.  많은 기능과 확장성으로 좀 더 복잡한 프로젝트에서도 효율적으로 모듈을 관리할 수 있도록 도움. 에셋 매니지먼트, 코드 분할, 트랜스파일링 등을 포함한 오래된 번들러로, 레퍼런스가 많고 안정적이지만 설정이 복잡하고 느림.
	+ **Rollup**: 번들링과 최적화에 초점을 맞춰 설정이 비교적 쉽고 Webpack보다 가볍게 사용 가능.
	+ **Esbuild**: go로 작성된 번들러로, 코드 분할, 트랜스파일링 등을 포함. 빌드 속도가 Webpack과 Rollup에 비해 100배 정도 빠름. but 설정이 어려움.
	+ **Vite**: 의존성과 소스 코드를 나눠서 속도를 개선하고, 코드 수정 시 자동으로 재빌드하는 HMR(Hot Module Replacement) 기능을 제공. 설정이 쉬우며, 가볍고 빠름.

+ **대표적인 자바스크립트 트랜스파일러**
  + **TypeScript**: 자바스크립트의 상위 집합 언어로, 정적 타입 지원 동시에 ES6+의 기능 활용 가능. TypeScript 컴파일러를 사용하여 TypeScript 코드를 JavaScript 코드로 변환 가능.
  + **Babel**: ES2015 이상의 자바스크립트 코드를 ES5로 변환해주는 경량화된 트랜스파일러. 빠른 변환 속도와 간결한 결과 코드를 제공함.
  + **SWC**: Rust로 작성된 고성능 자바스크립트/타입스크립트 트랜스파일러. Babel과 비슷한 기능을 제공하면서도 빠른 컴파일 속도를 가짐.
  + **Closure Compiler**: 구글에서 개발한 자바스크립트 트랜스파일러. 코드 압축과 최적화 기능을 포함하여 효율적인 자바스크립트 코드를 생성 가능.

## 조사 2-(1)
+ **패키지 매니저**: 패키지(코드의 배포를 위해 사용되는 코드의 묶음)를 다루는 작업(패키지 설치, 업데이트, 수정, 삭제)을 편리하고 안전하게 수행하기 위해 사용되는 툴. 
  + **NPM**: Node.js 생태계의 가장 대표적인 패키지 매니저. 강력한 CLI(Command Line Interface)를 제공하여 패키지 설치, 버전 관리, 의존성 해결 등의 기능을 수행함. 패키지 설치 시 패키지들을 각각 별도로 설치하는데, 이로 인해 공유된 의존성이 중복으로 설치될 수 있음. 의존성 트리가 깊어질수록 패키지 설치 속도가 느려지고, 디스크 공간을 많이 차지할 수 있음.
  + **Yarn**: Facebook에서 개발한 패키지 매니저. npm의 단점을 보완하고, 더 나은 성능과 안정성을 제공하며, 여러 개의 패키지를 병렬로 설치하여 빠른 속도를 보장함. 여러 패키지를 동시에 가져오고 설치하도록 최적화되어 있어 npm보다 빠른 의존성 설치 속도와 패키지 버전 관리를 제공함. yarn.lock 파일을 사용하여 의존성 트리를 고정시켜 재현 가능한 빌드를 지원하며, 캐시 기능을 제공하여 패키지 다운로드를 최적화함.
   + **pnpm**: npm의 의존성 문제를 해결하기 위해 고안된 패키지 매니저로, 고유 설치와 플랫 노드 모듈을 통해 의존성 관리를 최적화함. 다중 프로젝트에서 의존성을 공유하고, 중복 설치를 피하여 저장 공간을 절약할 수 있음. npm과 달리 의존성을 공유하여 저장 공간을 최적화함. Flat node_modules 구조를 사용하여 파일 시스템의 깊이를 줄이고 의존성 트리를 단순화하며, 동시 설치 기능을 지원하여 의존성 설치 속도를 향상시킴.
  
## 조사 2-(2)
+ **node modules**: 프로젝트 구동에 필요한 모든 라이브러리의 소스코드를 모아둔 폴더. 보통 깃과 같은 저장소에 올릴 때는 이 폴더를 함께 올리지 않음.
- **public**: static 파일을 모아두는 곳. 컴파일이 필요 없는 파일들이 위치하는 폴더.
- **src**: 소스 코드를 보관하는 곳. 리액트 내부에서 작성하는 거의 모든 파일들이 이 폴더 내부에서 작성되며 이 폴더에 있는 파일들은 명령어에 따라 JS로 컴파일이 진행됨.
	- **App.css**: App.js 스타일.
	- **App.js**: 코드 작성 -> 프로젝트 만들어 나감.
	- **App.test.js**: 테스트 코드 작성.
	- **index.css**: index.html 의 스타일.
	- **index.js**: index.html의 js파일.
- **.gitignore**: 깃에 포함하고 싶지 않은 파일의 이름 혹은 폴더 등을 입력하는 파일.
- **package.json**: 프로젝트에 관련된 기본적인 내용(프로젝트 이름, 버전 등)과 같은 라이브러리들의 목록 포함.
- **README.md**: 프로젝트의 정보들을 기입하는 장소. 보통 깃과 같은 저장소에 올릴 때 프로젝트에 대한 설명을 작성하는 곳. 해당 저장소에 진입하면 가장 먼저 띄워짐.

## 조사 2-(3)
1. 기능 기반: 기능 단위로 폴더 구성
2. 유형별: 파일의 유형(components, hooks, pages 등)에 따라 폴더 구성
3. 도메인 중심: 비즈니스 도메인(사용자 관리, 주문 관리 등)을 중심으로 구조화
4. Next.js와 같은 프레임워크 기반
5. 혼합형: 위의 구조들 적절히 조합하여 구성






>>>>>>> 1f3c0fa3c851cbcc88fe78bead7e97edea424522
