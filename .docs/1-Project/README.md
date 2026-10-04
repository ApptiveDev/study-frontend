# TypeScript와 React 프로젝트 시작하기

이번 학기는 회차가 많지 않습니다. 그래서 문법을 처음부터 끝까지 훑는 대신, **내 손으로 React + TypeScript 프로젝트를 만들고 그 안의 코드를 읽을 수 있게 되는 것**을 첫 번째 목표로 잡았습니다.

오늘 스터디가 끝나면 아래 화면이 여러분의 노트북에서 돌아가고 있어야 합니다.

![오늘 만들 화면](./assets/profile-card.png)

## 시작하기 전에

### HTML과 CSS가 처음이라면

이 스터디는 HTML 태그와 CSS 선택자를 한 번이라도 써 본 적이 있다고 가정하고 진행합니다. 처음이라면 생활코딩의 무료 강좌 두 개를 먼저 보고 와주세요. 끝까지 볼 필요는 없고, 적어둔 부분까지만 봐도 충분합니다.

- [WEB1 - HTML & Internet](https://opentutorials.org/course/3084): "웹사이트 완성"까지
- [WEB2 - CSS](https://opentutorials.org/course/3086): "박스모델"까지

JavaScript는 써 본 적이 없어도 괜찮습니다. 필요한 만큼은 아래에서 같이 봅니다. 미리 보고 싶다면 [WEB2 - JavaScript](https://opentutorials.org/course/3085)에서 변수와 함수 부분을 추천합니다.

### 설치할 것

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) LTS 버전
- [VS Code](https://code.visualstudio.com/) (쓰던 에디터가 있다면 그대로 써도 됩니다)
- pnpm: Node.js를 설치한 뒤 터미널에서 `npm install -g pnpm`

설치가 끝났다면 터미널에 아래 명령어를 한 줄씩 입력해 보세요. 셋 다 버전 숫자가 나오면 준비가 끝난 것입니다.

```sh
git --version
node -v
pnpm -v
```

> #### 버전 숫자 대신 오류가 나와요
>
> 설치 직후에는 터미널이 새로 설치한 프로그램을 아직 모르는 경우가 많습니다.
> 터미널을 완전히 껐다가 다시 켠 뒤에 한 번 더 입력해 보세요.

> #### Node.js와 pnpm은 왜 필요한가요?
>
> JavaScript는 원래 웹 브라우저 안에서만 실행되는 언어입니다. Node.js는 브라우저 없이 내 컴퓨터에서
> JavaScript를 실행하게 해주는 프로그램이고, React 프로젝트를 만들고 실행하는 도구들이 전부 이 위에서 동작합니다.
>
> pnpm은 다른 사람이 만들어 둔 코드(패키지)를 내려받고 관리해 주는 도구입니다. React도 그렇게 내려받는 패키지 중 하나입니다.

### 스터디 레포지토리 받기

앞으로의 과제는 모두 Git/Github으로 주고받습니다. 전체 흐름은 아래 그림과 같습니다.

![워크플로우](./assets/flow.png)

지금은 클론하고 브랜치를 만드는 데까지만 해둡니다. 나머지는 문서 맨 아래의 [과제 제출하기](#과제-제출하기)에서 이어집니다.

1. 레포지토리를 `git clone` 명령어로 클론하고, 그 폴더로 이동해주세요.

   ```sh
   git clone -b 2026-2 https://github.com/ApptiveDev/study-frontend.git
   cd study-frontend
   ```

2. `본인 계정명/과제명`으로 브랜치를 만들어주세요. 오늘의 과제명은 `1-profile-card`입니다.

   ```sh
   git checkout -b 본인계정명/1-profile-card
   ```

3. 클론한 `study-frontend` 폴더를 VS Code로 열어주세요.

## TypeScript, 필요한 만큼만

HTML이 문서의 구조를, CSS가 모양을 맡는다면 JavaScript는 **동작**을 맡습니다. 버튼을 눌렀을 때 숫자가 올라가게 하는 것이 JavaScript의 일입니다.

TypeScript는 그 JavaScript에 **타입**을 붙인 언어입니다. 타입은 "이 자리에는 이런 값이 들어온다"는 약속이고, 약속을 어기면 코드를 실행해 보기도 전에 에디터가 빨간 줄로 알려줍니다.

> #### JavaScript를 먼저 배우고 와야 하지 않나요?
>
> 따로 배우고 올 필요는 없습니다. TypeScript는 JavaScript에 타입 표기만 더한 것이라, TypeScript를 배우면
> JavaScript도 같이 배우게 됩니다.
>
> 오히려 처음부터 타입과 함께 배우는 쪽이 편합니다. 내가 잘못 쓴 코드도, AI가 그럴듯하게 틀리게 써 준 코드도
> 타입이 먼저 걸러주기 때문입니다.

아래 예제들은 [TypeScript 플레이그라운드](https://www.typescriptlang.org/play)에 붙여 넣으면 설치 없이 바로 확인할 수 있습니다. 눈으로만 읽지 말고 직접 쳐서 빨간 줄을 한 번씩 만나보세요. 다음 소제목으로 넘어갈 때는 앞의 코드를 지우고 새로 붙여 넣으면 됩니다.

### 변수와 타입

값에 이름을 붙여 둔 것을 변수라고 합니다. `const`로 만들면 값을 바꿀 수 없고, `let`으로 만들면 나중에 바꿀 수 있습니다. 이름 뒤에 `: 타입`을 붙여서 어떤 값이 들어오는지 적습니다.

```ts
const userName: string = '김앱티'; // 글자
let age: number = 21; // 숫자
let isMentor: boolean = false; // 참 또는 거짓

age = 22; // let이라서 바꿀 수 있습니다
age = '스물둘'; // 빨간 줄: number 자리에 글자를 넣을 수 없습니다
```

사실 값을 바로 넣어주면 타입은 적지 않아도 됩니다. `let age = 21`이라고만 써도 TypeScript가 "age는 number구나" 하고 알아서 추론합니다. 그래서 실제 코드에서는 생각보다 타입을 적을 일이 많지 않습니다.

### 객체와 배열

여러 값을 하나로 묶은 것이 객체, 같은 종류의 값을 줄 세운 것이 배열입니다. 객체가 어떻게 생겼는지는 `type`으로 이름을 붙여 둡니다.

```ts
type Member = {
  name: string;
  age: number;
  email?: string; // ?가 붙으면 없어도 되는 값입니다
};

const member: Member = { name: '김앱티', age: 21 };

member.name; // '김앱티'

const scores: number[] = [90, 85, 70]; // 숫자 배열
```

객체에서 값을 꺼낼 때는 아래처럼 한 번에 꺼낼 수도 있습니다. 구조 분해라고 부르는데, React에서 매일 보게 될 문법이니 모양만 기억해 두세요.

```ts
const { age, email } = member;
```

### 함수

함수는 값을 받아서 무언가를 하고 결과를 돌려주는 코드 묶음입니다. 받는 값과 돌려주는 값에 각각 타입을 적습니다.

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2); // 3
add('1', 2); // 빨간 줄: 첫 번째 값은 number여야 합니다
```

함수를 더 짧게 쓰는 방법도 있습니다. 화살표 함수라고 부르며, 역시 React 코드에 자주 등장합니다.

```ts
const double = (n: number) => n * 2;

double(4); // 8
```

### 여러 값 중 하나: 유니온 타입

`|`는 "이 중 하나"라는 뜻입니다. 정해진 선택지만 받고 싶을 때 씁니다.

```ts
type Size = 'small' | 'medium' | 'large';

let size: Size = 'small';
size = 'huge'; // 빨간 줄: 선택지에 없는 값입니다
```

오늘은 여기까지만 알면 됩니다.

## React 한눈에 보기

HTML만으로 페이지를 만들 때는 비슷한 카드가 열 개 필요하면 같은 태그 묶음을 열 번 복사해서 붙여 넣어야 했습니다. 내용이 바뀌면 열 군데를 고쳐야 했고요.

React에서는 그 태그 묶음을 **컴포넌트**라는 이름으로 한 번만 만들어 두고, 필요한 곳에서 불러다 씁니다. 컴포넌트는 거창한 것이 아니라 HTML처럼 생긴 것을 돌려주는 함수입니다.

```tsx
function Hello() {
  return <h1>안녕하세요</h1>;
}
```

함수 안에 HTML을 쓰는 이 문법을 JSX라고 합니다. HTML과 거의 같아서 따로 외울 것은 많지 않고, 오늘은 두 가지만 기억하면 됩니다.

- `class` 대신 `className`이라고 씁니다.
- 중괄호 `{ }` 안에는 변수나 계산식을 넣을 수 있습니다. `<p>{userName}님 환영합니다</p>`처럼요.

컴포넌트를 쓸 때는 HTML 태그처럼 쓰고, 속성으로 값을 넘겨줍니다. 이렇게 넘겨주는 값을 **props**라고 부릅니다.

```tsx
<Hello />
<ProfileCard name="김앱티" role="프론트엔드" />
```

props로 어떤 값을 받을지 적어두는 곳에 위에서 배운 `type`이 쓰입니다. 실습에서 바로 확인해 봅시다.

## 실습: 프로젝트 만들기

React 프로젝트에는 시작할 때마다 똑같이 필요한 파일들이 있습니다. 이런 기본 틀을 보일러플레이트라고 하고, [Vite](https://ko.vite.dev)가 명령어 한 줄로 만들어 줍니다.

1. 터미널에서 클론한 레포지토리의 `projects` 폴더로 이동하고, 과제용 폴더를 만들어 그 안으로 들어갑니다.

   ```sh
   cd projects
   mkdir 1-profile-card
   cd 1-profile-card
   ```

2. Vite로 React + TypeScript 프로젝트를 생성합니다. 마지막의 `.`은 "지금 있는 폴더에 만들어 달라"는 뜻입니다.

   ```sh
   pnpm create vite@latest . --template react-ts
   ```

   질문이 두 번 나옵니다. 둘 다 그대로 Enter를 누르면 됩니다.
   - `Which linter to use?`: 코드의 실수를 잡아주는 도구를 고르는 질문입니다. 기본값(Oxlint)이면 충분합니다.
   - `Install with pnpm and start now?`: 필요한 패키지를 설치하고 바로 실행할지 묻습니다. Yes를 고릅니다.

3. 터미널에 나온 주소 `http://localhost:5173`을 브라우저에서 열어보세요. Vite의 시작 화면이 보이면 성공입니다.

> #### `Ignored build scripts` 경고가 나와요
>
> 지금은 무시해도 됩니다. 프로젝트는 문제없이 실행됩니다.

터미널에서 `Ctrl + C`를 누르면 실행이 멈춥니다. 다음에 다시 실행할 때는 같은 폴더에서 `pnpm dev`만 입력하면 됩니다.

### 만들어진 파일 둘러보기

파일이 꽤 많이 생겼지만 지금 알아야 하는 것은 몇 개뿐입니다.

```
1-profile-card
├── index.html        브라우저가 가장 먼저 여는 파일. 안에 빈 <div id="root">가 있습니다
├── package.json      설치한 패키지 목록과 pnpm dev 같은 명령어가 적혀 있습니다
└── src
    ├── main.tsx      그 빈 div 안에 React를 끼워 넣는 시작점
    ├── App.tsx       화면의 가장 바깥 컴포넌트. 오늘 고칠 파일입니다
    └── index.css     페이지 전체에 적용되는 CSS. 여러분이 알던 그 CSS입니다
```

`tsconfig.json`이나 `vite.config.ts` 같은 나머지 파일은 설정 파일입니다. 당분간은 열어볼 일이 없습니다.

## 실습: 프로필 카드 만들기

### 1. 컴포넌트 만들기

`src` 안에 `components` 폴더를 만들고, 그 안에 파일 두 개를 만들어주세요.

`src/components/profile-card.tsx`

```tsx
import './profile-card.css';

type ProfileCardProps = {
  name: string;
  role: string;
  intro?: string;
};

function ProfileCard({ name, role, intro = '소개가 아직 없습니다.' }: ProfileCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>{intro}</p>
    </div>
  );
}

export default ProfileCard;
```

`src/components/profile-card.css`

```css
.card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  text-align: left;
}

.role {
  color: gray;
  font-size: 14px;
}
```

처음 보는 줄이 몇 개 있을 텐데, 하나씩 읽어봅시다.

- `type ProfileCardProps`: 이 카드가 받을 값의 모양입니다. 이름과 역할은 꼭 있어야 하고, 소개는 없어도 됩니다.
- `{ name, role, intro = '...' }`: 앞에서 본 구조 분해입니다. 받은 props에서 세 값을 꺼내고, `intro`가 없으면 기본 문구를 씁니다.
- `import`와 `export default`: 파일끼리 코드를 주고받는 문법입니다. `export`로 내보낸 것을 다른 파일에서 `import`로 가져옵니다. HTML에서 `<link>`로 CSS 파일을 연결하던 것과 비슷한 역할입니다.

### 2. 컴포넌트 사용하기

`src/App.tsx`의 내용을 전부 지우고 아래 코드로 바꿔주세요.

```tsx
import ProfileCard from './components/profile-card';

function App() {
  return (
    <main>
      <h1>우리 스터디 멤버</h1>
      <ProfileCard name="김앱티" role="프론트엔드" intro="CSS를 좋아합니다." />
      <ProfileCard name="이브이" role="디자이너" />
    </main>
  );
}

export default App;
```

저장하면 브라우저가 새로고침 없이 바로 바뀝니다. 카드는 한 번만 만들었는데 화면에는 두 장이 나왔고, `intro`를 넘기지 않은 두 번째 카드에는 기본 문구가 들어갔습니다.

이름과 역할을 여러분의 것으로 바꿔보세요.

### 3. 일부러 틀려보기

두 번째 카드에서 `role`을 지워봅시다.

```tsx
<ProfileCard name="이브이" />
```

`ProfileCard`에 빨간 줄이 생깁니다. 마우스를 올리면 이런 메시지가 나옵니다.

```
Property 'role' is missing in type '{ name: string; }' but required in type 'ProfileCardProps'.
```

영어라서 겁이 날 수 있지만 내용은 단순합니다. "`ProfileCardProps`에는 `role`이 꼭 있어야 하는데 빠져 있다"는 뜻입니다.

TypeScript를 쓰는 이유가 바로 이 빨간 줄입니다. 화면을 열어서 "어, 역할이 왜 안 나오지?" 하고 찾아 헤매기 전에, 코드를 쓰는 순간 알려줍니다. 확인했다면 `role`을 다시 넣어주세요.

### 4. 좋아요 버튼 달기

`profile-card.tsx`를 아래처럼 고쳐주세요. 바뀐 곳은 `// 추가`를 달아 둔 두 줄과 `<button>` 줄, 이렇게 세 줄입니다.

```tsx
import { useState } from 'react'; // 추가
import './profile-card.css';

type ProfileCardProps = {
  name: string;
  role: string;
  intro?: string;
};

function ProfileCard({ name, role, intro = '소개가 아직 없습니다.' }: ProfileCardProps) {
  const [likes, setLikes] = useState(0); // 추가

  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>{intro}</p>
      <button onClick={() => setLikes(likes + 1)}>좋아요 {likes}</button>
    </div>
  );
}

export default ProfileCard;
```

버튼을 누르면 숫자가 올라갑니다. 카드마다 숫자가 따로 올라가는 것도 확인해 보세요.

- `useState(0)`: "0에서 시작해서 바뀌는 값"을 React에 맡기는 기능입니다. `likes`는 지금 값이고, `setLikes`는 그 값을 바꾸는 함수입니다.
- `onClick={() => setLikes(likes + 1)}`: 버튼이 눌리면 실행할 함수를 넘겨준 것입니다. 앞에서 본 화살표 함수죠.

값이 바뀌면 화면이 알아서 다시 그려지는 것이 React의 가장 큰 특징입니다. 자세한 내용은 다음 시간에 다룹니다.

## AI에게 물어볼 때

AI에게 코드를 받아 쓰는 것은 이제 자연스러운 일입니다. 다만 받은 코드를 그대로 붙여 넣기 전에 두 가지는 직접 읽어보세요. 오늘 배운 것이 바로 이 두 가지를 읽는 방법입니다.

- **props 타입**: 컴포넌트가 무엇을 받는지 적힌 곳입니다. 내가 원한 것과 같은 모양인지 확인합니다.
- **파일 위치**: 새 파일이 어느 폴더에 생겼는지, 어디에서 `import` 하는지 확인합니다.

질문할 때는 만들고 싶은 것을 한 문장으로 쓰고, 관련 파일의 코드 전체와 오류 메시지 원문을 같이 붙여주세요. 답이 훨씬 정확해집니다.

그리고 받은 코드에 모르는 줄이 있으면 "이 줄이 무슨 뜻이야?"라고 한 번만 더 물어보세요. 그 한 번이 쌓여서 실력이 됩니다.

## 조사해보기

- `let`과 `const`는 어떻게 다른가요? 예전에 쓰던 `var`는 왜 잘 쓰지 않게 되었을까요?
- 객체의 모양을 적는 방법에는 `type` 말고 `interface`도 있습니다. 둘은 무엇이 다를까요?
- Vite 같은 도구를 번들러라고 부릅니다. 번들러는 어떤 일을 하나요? 브라우저는 왜 `.tsx` 파일을 바로 실행하지 못할까요?
- 프로젝트를 생성했을 때 나온 `tsconfig.json`과 `vite.config.ts`는 각각 어떤 역할을 하나요?
- npm, pnpm 외에 어떤 패키지 매니저가 있을까요? pnpm은 npm에 비해 어떤 장점이 있을까요?

## 과제: 자기소개 카드 완성하기

오늘 만든 프로젝트를 이어서, 우리 스터디의 자기소개 페이지를 만들어봅시다.

### 조건

- `ProfileCard`에 props를 하나 이상 추가해주세요. (예: 학과, 취미, 좋아하는 음식) 타입도 함께 적어야 합니다.
- 카드를 세 장 이상 화면에 띄워주세요. 한 장은 본인이어야 합니다.
- CSS를 수정해서 카드를 원하는 모양으로 꾸며주세요.

### 더 알아보기

- 유니온 타입으로 `color` props를 만들어서, 카드마다 테두리 색을 다르게 줄 수 있게 해봅시다.
- 좋아요를 취소하는 버튼을 추가해 봅시다. 숫자가 0 아래로 내려가지 않게 하려면 어떻게 해야 할까요?

### 과제 제출하기

1. 작업한 내용을 커밋합니다. 커밋은 기능 단위로 나눠서 작성해주세요.

   ```sh
   git add .
   git commit -m "커밋 메시지"
   ```

2. 작업이 완료된 브랜치를 원격 저장소에 푸시합니다.

   ```sh
   git push origin 본인계정명/1-profile-card
   ```

3. Github에서 해당 브랜치를 `2026-2` 브랜치로 보내는 Pull Request를 생성합니다.
   - PR 제목은 `[기수] 이름 - 1주차 과제`로 설정해주세요.
   - Pull Request에는 다음 내용을 포함해주세요.
     - 어려웠던 점
     - 본인이 생각했을 때 과제에서 중요했던 내용
     - 그 외 기타 질문

4. 멘토가 코드 리뷰를 진행한 후, 가장 알맞은 브랜치를 `2026-2` 브랜치에 머지합니다.
   > 모든 직군이 동시에 협업 스터디를 진행하기 때문에,
   > 학기/과제별로 단 하나의 작업 브랜치만 머지되는 점을 유의해주세요.
