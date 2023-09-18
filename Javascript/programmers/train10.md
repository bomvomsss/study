# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 겹쳐쓰기

1. 문제 설명
> 
> 문자열 `my_string`, `overwrite_string`과 정수 `s`가 주어집니다. 문자열 `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 문자열 `overwrite_string`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

2. 제한사항
> - `my_string`와 `overwrite_string`은 숫자와 알파벳으로 이루어져 있습니다.
> - 1 ≤ `overwrite_string`의 길이 ≤ `my_string`의 길이 ≤ 1,000
> - 0 ≤ `s` ≤ `my_string`의 길이 - `overwrite_string`의 길이


### 🦈 나의 풀이
```javascript
function solution(my_string, overwrite_string, s) {
    const arr = [...my_string]
    arr.splice(s, overwrite_string.length, overwrite_string);
    return arr.join('');
}
```

1. `Array.splice();` 의문점

```javascript
function solution(my_string, overwrite_string, s) {
    const arr = [...my_string].splice(s, overwrite_string.length, overwrite_string);
    return arr.join('');
}
```
이건 왜 안되는가!! 했더니

`Array.splice();` 는 '제거한 요소'를 담은 배열.
> Splice 반환값
> >제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 
> 반환합니다. 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.

splice() 함수가 정확하게 어떤 것인지 제대로 인지하지 못해서 생긴 사태 ...

```javascript
function solution(my_string, overwrite_string, s) {
    const arr = [...my_string]
    const splice = arr.splice(s, [...overwrite_string].length, overwrite_string);
    return splice; // 위 코드는 splice의 결과를 리턴 
    //return arr.join('');
}
```
이렇게 되기 때문에 자꾸 마지막 인자인 `overwrite_string`만 반환이 되었던 것...!

2. 또 헷갈렸던 `Array.length;`
   
분명 `array` 말고 `string`에도 `length;`를 사용할 수 있는 걸로 알았는데,, 안먹길래.. 뭐지..? 하던 중 위의 1번 의문점을 해결하면서 역시 `String.length;` 가능한 거 한 번 더 확인!<br/>
그리고 뒤에 `( )` 안붙이는거다.. 이거맨날 헷갈림