# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.1

### 평균 구하기

1. 문제 설명
> 
> 정수를 담고 있는 배열 `arr`의 평균값을 return하는 함수, solution을 완성해보세요.

2. 제한사항
>- `arr`은 길이 1 이상, 100 이하인 배열입니다.
>- `arr`의 원소는 -10,000 이상 10,000 이하인 정수입니다.


### 🦈 나의 풀이
```javascript
function solution(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
```

1. 한 줄로 쓰면?

```javascript
function average(array){
  return array.reduce((a,b) => a+b) / array.length;
}
```
- reduce() 함수