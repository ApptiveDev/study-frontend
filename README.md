## Apptive 과제 1


트랜스파일링 (Transpiling) : 최신 JavaScript(ES6+) 코드를 구버전(ES5)으로 변환하는 과정
이유: 브라우저마다 지원하는 JavaScript 버전이 다름 → 구버전 브라우저에서도 코드가 실행되도록 변환해야 함

번들링 (Bundling) : 여러 개의 JavaScript 파일을 하나로 묶어주는 과정
이유: 모듈 시스템(import, export)을 사용하면 파일이 많아짐 → 파일 요청을 줄여 웹사이트 속도를 빠르게 하기 위해 번들링이 필요함

폴리필 (Polyfill) : 구버전 브라우저에서 최신 JavaScript 기능을 사용할 수 있도록 도와주는 코드
이유: 구형 브라우저(예: Internet Explorer)는 최신 JavaScript 기능을 지원하지 않음


패키지 매니저     	 특징				     npm보다 장점
npm			Node.js 기본 패키지 매니저		-
Yarn			페이스북에서 개발		속도가 빠름, 병렬 설치 가능
pnpm		하드 링크 방식 사용		디스크 공간 절약, 더 빠름
Bun			초고속 JS 런타임			npm, Yarn보다 더 빠름


<프로젝트를 생성했을때 나오는 파일들>
package.json		프로젝트 정보, 설치된 패키지 목록
package-lock.json	패키지 버전 고정 (일관된 환경 유지)
node_modules/		설치된 패키지 저장소
public/			HTML, 정적 파일(css, 이미지) 위치
src/				실제 개발하는 코드(React, Vue 등)


<src 내부 폴더 구조>
기본 구조 → components/, styles/
중규모 → pages/, hooks/ 추가
대규모 → api/, store/, utils/까지 포함