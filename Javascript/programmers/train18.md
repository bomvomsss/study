# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.1

### x만큼 간격이 있는 n개의 숫자

1. 문제 설명
> 
> 함수 solution은 정수 `x`와 자연수 `n`을 입력 받아, `x`부터 시작해 `x`씩 증가하는 숫자를 `n`개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

2. 제한사항
>- `x`는 -10000000 이상, 10000000 이하인 정수입니다.
>- `n`은 1000 이하인 자연수입니다.


### 🦈 나의 풀이
```javascript
function solution(x, n) {
    const arr = [];
    for(let i=0;i<n;i++){
        let num = x + x*i
        arr.push(num);
    }
    return arr;
}
```


1. 다른 사람의 풀이
```javascript
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}
```
- for문에서 조건식에 `i = 0 / i = 1`, `i < n / i <= n` 잘 생각해보고 구분하기


1. 다른 사람의 풀이 2
```javascript
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```
-  `Array.fill()`

```javascript
const array1 = [1, 2, 3, 4];

//0을 인덱스 2부터 인덱스 4까지 채움
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// 5를 인덱스 1부터 끝까지 채움(원소 갯수 만큼)
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// 6을 모든 원소를 대신해서 채움
console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```
- `map()`과 화살표함수..