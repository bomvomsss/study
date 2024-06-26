# 강의 기록 (24.03.04~)

### JSX
- .js 파일에서 쓰는 html 대용품
   
### 변수 넣을 때는 중괄호
- 태그 내에 사용하는 것 이외에, id나 class명으로도 사용 가능
- 원래 바닐라였으면 querySelector 사용해야 하는 문법을 중괄호로 대체
- 이 문법을 **데이터 바인딩** 라고 부름

### 인라인 style
- style={{스타일명:'값'}}
- 카멜케이스 사용

### Destructing 문법

### 변수와 state 차이점
- 변수와 state 모두 값을 잠시 보관하는 용도로 사용
- 일반 변수는 값이 변경되면 html에 자동으로 반영 안됨. state는 값이 변경되면 state를 쓰고있는 html이 자동 재렌더링 됨

### state 
- 이름은 [a, b]
  - a(앞):실제 state의 이름
  - b:state 변경 함수
- state 변수명 면경은 등호 쓰면 안됨
- state 변경하려면 **state 변경 함수** 사용

#### props
- 부모 컴포넌트서 자식 컴포넌트로 state 전송 가능 (자식>자식, 자식>부모 등 안됨)
- <자식 컴포넌트 작명={state이름}>
- props 파라미터 등록 후 props.작명 사용
- 보통 작명 = state이름 사용하는 경우가 많음
- props도 파라미터 문법임 : 파라미터 문법은 다양한 기능을 하는 함수를 만들 때 사용함
- 함수도 전달 가능

#### state에서 array/object
- array/object를 다룰 때는 원본 데이터는 보존
- array/object를 담은 변수에는 화살표만 저장(어디에 가리키는 정보만 저장)
- state 변경 함수
  - 변수1&변수2 화살표가 같으면 변수1 == 변수2 비교해도 같다고 나옴
  - 기존state과 변경할 state가 같으면 변경x 
- **reference data type**
- state 만드는 곳은 그 state를 사용하는 컴포넌트들 중 최상위 컴포넌트

#### 동적인 UI 만들기
1. html, css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성(조건문 등)

### onClick={}
- 해당 요소를 클릭했을 때 함수를 실행해주는 이벤트핸들러
- 중괄호 안에는 함수가 들어감

### onChange/onInput
- <input/>에 뭔가 입력 되면 코드가 실행 되도록 할 때 사용

### 이외에 핸들러 짱많음
- onMouseOver={}
- onScroll={}

### () => {} (화살표 함수)

### 컴포넌트
- 복잡한 코드를 간소화, 읽기 쉽게 만듦
- 컴포넌트 만들기 3step
  1. function 만들고
  2. return () 안에 html 담기
  3. <함수명></함수명> 쓰기 (그냥 <함수명/> 이라고 써도 됨)
- return() 안에 html을 병렬 기입하려면 div 혹은 빈태그(fragment)로 한 번 감싸면 됨
- 컴포넌트를 만드는 경우
  1. 반복적인 html를 축약할 때
  2. 큰 페이지들
  3. 자주 변경되는 UI들
- 컴포넌트의 단점 : state를 가져다 쓸 때 문제가 생김 (?)

### 스프레드 함수 ( [...array] )

#### 조건문
- 삼항 연산자(ternary operator) : 조건식? 참일때 실행할 코드 : 거짓일 때 실행할 코드

#### map 함수
- array 자료 갯수만큼 함수 안의 코드 실행
- 함수의 파라미터는 array 안에 있는 자료
- return에 뭐 적으면 array에 담아줌
- 함수.map(function(a,i){}) -> 여기서 파라미터 'i'는 반복문 돌 때마다 0부터 1씩 증가하는 정수
- (참고)반복문으로 html 생성하면 key={각 html마다 다른 숫자}를 추가하면 콘솔 warning 없어짐

~~continue in velog~~