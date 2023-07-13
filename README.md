## 자바스크립트란
웹 브라우저에서 HTML 문서에 내장한 JavaScript 를 읽으면 즉시 해석되어, 소스코드가 실행된 결과를 눈으로 볼 수 있는 클라이언트 사이드( 프론트 엔드 ) 언어

## 자바스크립트의 탄생
1995년 당시 약 90%의 시장 점유율로 웹 브라우저 시장을 지배하고 있던 넷스케이프 커뮤니케이션즈(Netscape comunications)는 정적인 HTML을 동적으로 표현하기 위해 경량의 프로그래밍 언어를 도입하기로 결정했다. 그래서 탄생한 것이 브렌던 아이크(Brendan Eich)가 개발한 자바스크립트이다.

### 특징
- 객체기반 언어이며, HTML 문서 내에 내장되어 프로그래밍 요소를 추가할 수 있다.
- 모든 객체는 숨겨진 링크인 프로토타입을 가지고 있다.
- 인터프리터 언어로서 클라이언트 웹 브라우저에서 실행된다.
- 컨텍스트를 만들고, 자신의 Scope : 클로저를 구현하여 실행한다.
- Node.js 프레임워크를 이용해 백엔드 개발에서도 사용 가능하다.
- 객체형 / 함수형 프로그래밍 모두 표현 가능하다.

### 라이브러리
- three.js : 웹페이지에 3D객체를 쉽게 렌더링하도록 도와주는 자바스크립트 3D 라이브러리
- ml5.js : 보다 더 쉽게 머신러닝을 활용할 수 있도록 만든 ML 라이브러리

<br>

### 웹에서 JS연습 방법
컴퓨터에 VSCode를 설치할 수 없다면, replit를 이용하자
replete.com
회원가입하기
상단의 오른쪽 +버튼을 눌러서 언어를 누르고 프로젝트 생성하면 완료!

<br>

#### console.dir(document)와 console.log(document)의 차이점
dir은 객체의 속성을 확인
log는 객체의 요소를 확인

<br>

#### JS에서 HTML요소을 불러오는 방법
- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 
    - 예) let a = document.querySelector(".txt");
- querySelectorAll : 일치하는 요소 리스트를 나타내는 NodeList를 반환
    - 예) let a = document.querySelectorAll(".txt");