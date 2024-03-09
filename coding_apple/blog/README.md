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

### onClick={}
- 해당 요소를 클릭했을 때 함수를 실행해주는 이벤트핸들러
- 중괄호 안에는 함수가 들어감

### () => {} (화살표 함수)

### state에서 array/object
- array/object를 다룰 때는 원본 데이터는 보존
- array/object를 담은 변수에는 화살표만 저장(어디에 가리키는 정보만 저장)
- state 변경 함수
  - 변수1&변수2 화살표가 같으면 변수1 == 변수2 비교해도 같다고 나옴
  - 기존state과 변경할 state가 같으면 변경x 
- **reference data type**

### 스프레드 함수 ( [...array] )