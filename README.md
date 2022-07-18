## Demo Link
[https://blog-37840.web.app/](https://blog-37840.web.app/)



## 제작 기간

6월 25일 ~ 6월 28일 (4일)  
1인 개발




## 프로젝트 개요

개발을 하면서 필요한 지식들과 개발 과정의 트러블 슈팅 과정을 기록하고 필요시 열람하기 위한 블로그입니다. CRUD 일부 create / read를 구현하였으며, firebase DB와의 비동기 통신과  기본적인 블로그 기능들을 구현하였습니다.  

React, Redux를 사용하여 구현했습니다. 기존에 Vue, Vuex 로 만들었던 블로그와 동일한 스타일링을 적용하였습니다.  
페이지 디자인은 kakao brunch 디자인을 참고했습니다.





## 주요 기능 

### 기기에 따른 반응형 디자인구현 

- 800px 이하 모바일, 태블릿 / 800px 이상 웹


### 라우터 구현

- react-router-dom 라이브러리 버전이 v5에서 v6로 올라감에 따라 Switch 대신 Routes로 키워드 변경, 중첩 라우팅, useLocation, useNavigate등 키워드 숙지 및 변경

- 랜딩 페이지, 게시글 열람, 게시글 작성, 게시글 리스트 페이지로 구분되었으며, /home 입력시 / 로 리다이렉트 연결 구현

- 각 게시물의 params 값으로 열람페이지에서는 title 값을, 게시글 리스트 페이지에서는 category 값을 받아 중첩 라우팅 구현


### DB 게시판 구현

- 홈 버튼 구현, 모바일 접속시 상단 중간 홈 버튼 고정 및 blur 스타일링

- 글 작성, Github 페이지 이동 버튼 구현

- 리덕스 미들웨어 redux-thunk와 async-await 통해 firebase 로 post 데이터 받아오는 비동기 작업 처리. 받아온 데이터는 ./src/redux/reducers/blogsReducer.ts 에 action.payload 형식으로 전달되어 내림차순으로 저장 된 배열을 전역 state로 저장.

- firebase DB로부터 받아온 post 데이터( title / subTitle / contents / date / category ) 에 대해 Card 형태의 컴포넌트로 props 전달 및 정보 출력

- firebase DB로부터 받아온 데이터 내 개별 데이터에서 Key 들은 구조분해할당을 통해 구분 후 각각 다른 스타일 속성 부여하여 구분 가능

- Card 컴포넌트 상단 마우스 커서 유무에 따른 hover effect 구현

- Card 컴포넌트 클릭시 /view-post:title 페이지로 이동


### 게시글 열람 페이지 구현

- position: fixed 를 통해 title, subTitle, date 등의 정보가 담긴 레이아웃과 content, category가 담긴 레이아웃 구분(스크롤시 title/subTitle,date 정보 감춰짐)

- content 하단 category 클릭시 해당 category로 작성된 모든 작성글 리스트가 출력된 /post-list/:category 페이지로 이동. post-list/:category 의 경우 클릭된 카테고리의 params를 받아 리듀서 내 post 데이터 내 category 배열 안에 params(클릭 된 category 정보) 와 같은 category명칭을 가진 index가 있는지 확인 후 배열 형태로 저장

- 열람 페이지 하단 '다른 포스트' 열람 기능 구현. 게시글 열람시 해당 게시글 index 정보를 받아오고 해당 게시글 포함, 게시글의 index 위아래 2개, 총 5개의 post 정보를 배열 형태로 받아 title/date 정보 출력. 최상단, 최하단 게시글의 경우 예외처리를 통해 배열 내 index 부재로 인한 오류 방지


### 게시글 작성 페이지 구현

- text-editor 라이브러리인 Quill 라이브러리를 react와 쉽게 호환될 수 있게 구현된 react-quill 라이브러리 사용

- react-quill 내 툴바 설정 module 커스터마이징 진행




## 기술 스택

- react, typescript, redux, firebase
- react-redux, redux-thunk, redux-devtools-extension, react-router-dom, styled-components, react-quill, react-icons



## 회고

#### Typescript에 대한 경험과 Vue/Vuex, React/Redux 비교 및 새로운 react-router-dom v6, Mobile-first Code를 중심으로

이번 페이지의 경우 따로 블로그 CRUD 구현을 하지 않았던 Typescript를 스택에 포함시켜 진행했습니다. 정적 타입 체크가 가능하기에 런타임 이전 문법 실수나 props 전달에 있어 사전에 오류를 알 수 있어 편리했으며, 리덕스 액션 함수 처리 과정에서 미들웨어 redux-thunk 이용시 콜백 함수에서 dispatch 타입을 정해야 된다는 것을 배웠습니다. 하지만 규모가 작은 페이지 제작시 인터페이스, 타입 선언등의 번거로움과 디스패치를 통한 액션함수 호출등에 타입선언 등의 어려움이 있어 타입스크립트 자체에 대한 추가적인 학습 외에도 DOM내부 속성 타입들에 대한 학습과 타입스크립트의 유용성이 극대화되는 대규모 프론트 구현에 대한 경험이 필요합니다.

이번 Vue/Vuex, React/Typescript/Redux 대표적인 두 가지 프레임워크와 상태관리 라이브러리를 이용한 동일 블로그 구현을 진행하면서, 실제 Vue의 브라우저 렌더링 속도가 React에 비해 약간 더 빠른 것을 확인하였습니다. 또한 두 프레임 워크와 호환되는 라이브러리의 양적 차이가 있다는 점과 트러블 슈팅 과정에서 stackoverflow 검색 시 답변의 양의 차이를 보며, 에러를 고치는데에도 각 프레임워크 별 생태계에 양적인 차이가 시간의 문제로 연결되는 경험을 했습니다.

react-router-dom v6의 경우 기존에 사용하던 v5와 문법적으로 많이 달라졌습니다. 라우터 관련 참고자료 검색시 v6관련 내용을 다룬 1년 내 최신 자료 위주로 검색하며 해당 블로그 라우팅을 구현했습니다. 

기존 반응형 웹 구현시 웹 규격의 스타일링을 우선적으로 하고 이후 모바일 스타일링을 진행했었지만, 이번 프로젝트의 경우 Mobile First로 스타일링을 진행하였습니다. 

정리하면, 이번 프로젝트를 진행하며 타입스크립트에 대한 학습을 계속 해 나갈 필요성을 느꼈으며 JSX문법의 편리성과 Vue/Vuex 학습을 이어나가는 것에 대한 고민이 생겼습니다. 또한 버전이 바뀌면서 문법이 대폭 변경된 react-router-dom을 체화하기 위한 프로젝트를 진행할 필요성을 느꼈습니다.
반응형 디자인을 적용한 미디어 쿼리 코드 작성의 경우, 타인의 코드에선 모바일기기 자체에도 해상도 구분을 지어 놓은것과 태블릿, PC에도 모니터 크기 구분을 지어놨기에 향후 프로젝트 진행할 때 레이아웃을 우선적으로 모바일 위주로 진행하면서 오버라이딩을 적용된 상태에서 태블릿, 웹으로 확장시켜 나가야 레이아웃 설계에 유리할 듯 합니다. 검색 자료에선 모바일 퍼스트 원칙에 의한 설계로 제공해야할 내용 및 기능에 대한 이해가 향상된다기에, 차후 프로젝트를 진행할 때는 이 점을 염두에 두려 합니다.
