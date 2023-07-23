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
- querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져옴. 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만 반환.
    - 예) let a = document.querySelector(".txt");
- querySelectorAll : 일치하는 요소 리스트를 나타내는 NodeList를 반환
    - 예) let a = document.querySelectorAll(".txt");

#### Event
- preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수  있다. 

#### localStorage
- 기능
    - 오리진이 같은 경우 데이터는 모든 탭과 창에서 공유된다.(오리진(domain/port/protocol)만 같다면 url 경로는 달라도 동일한 결과를 볼 수 있다.)
    - 브라우저나 OS가 재시작하더라도 데이터가 파기되지 않는다.
- 예)
    - localStorage.setItem('test', 1);      // 키-값 보관
    - localStorage.getItem('test');         // 값 불러오기
    - localStorage.removeItem('test');      // 키-값 삭제
    - localStorage.clear();                 // 모든 것을 삭제
    - localStorage.key(0);                  // 인덱스에 해당하는 키 불러오기
    - localStorage.length;                  // 저장된 항목의 개수
 
#### sessionStorage 
- 기능
    - sessionStorage 객체는 localStorage에 비해 자주 사용되진 않는다.
    - sessionStorage는 현재 떠 있는 탭 내에서만 유지된다.(같은 페이지라도 다른 탭에 있으면 다른 곳에 저장되기 때문)
    - 하나의 탭에 여러 개의 iframe이 있는 경우엔 동일한 오리진에서 왔다고 취급되기 때문에 sessionStorage가 공유된다.
    - 페이지를 새로 고침할 때 sessionStorage에 저장된 데이터는 사라지지 않는다. 탭을 닫고 새로 열 때는 사라집니다.
- 예)
    - sessionStorage.setItem('test', 1);

#### 쿠키 이외에도 다른 방식을 사용하는 이유
- 쿠키와 다르게 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않는다. 이런 특징 때문에 쿠키보다 더 많은 자료를 보관할 수 있다. 대부분의
브라우저가 최소 2MB 혹은 그 이상의 웹 스토리지 객체를 저장할 수 있도록 해준다. 또한 개발자는 브라우저 내 웹 스토리지 구성 방식을 설정할 수 있다.
- 쿠키와 또 다른 점은 서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없다. 웹 스토리지 객체 조작은 모두 자바스크립트 내에서 수행된다.
- 웹 스토리지 객체는 도메인·프로토콜·포트로 정의되는 오리진(origin)에 묶여있습니다. 따라서 프로토콜과 서브 도메인이 다르면 데이터에 접근할 수 없다.


### 날씨 API(https://openweathermap.org/)

