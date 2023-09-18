# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 섞기

1. 문제 설명
> 
> 길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다. <br/>
> 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

2. 제한사항
> - 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
>   - `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.


### 🦈 나의 풀이
```javascript
function solution(str1, str2) {
    let arr = [];
    for(let i=0;i<str1.length; i++){
        arr += str1[i] + str2[i]
    }
    return arr;
}
```

1. `+=` : 더하기 할당

   오른쪽 피연산자의 값을 변수에 더한 결과를 다시 변수에 할당한다.<br/>
   두 피연산자의 타입이 더하기 할당 연산자의 동작을 결정하며, 덧셈 또는 문자열 연결이 가능

2. 화살표함수를 사용하면?

```javascript
function solution(str1, str2) {
    return [...str1].map((a, i) => a+str2[i]).join("")
}
```
여기서는 더하기할당(+=)를 사용하지 않았다. 스프레드연산자, 화살표함수, map 등 내가 아직 수월하게 다루지 못하는 것들!