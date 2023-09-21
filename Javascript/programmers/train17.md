# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### flag에 따라 다른 값 반환하기

1. 문제 설명
> 
> 두 정수 `a`, `b`와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 `a` + `b`를 false면 `a` - `b`를 return 하는 solution 함수를 작성해 주세요.

2. 제한사항
>- -1,000 ≤ `a`, `b` ≤ 1,000


### 🦈 나의 풀이
```javascript
function solution(a, b, flag) {
    if(flag){
        return a+b;
    }else{
        return a-b;
    }
}
```
```javascript
function solution(a, b, flag) {
    return flag ? a+b : a-b;
}
```

1. if문 안의 for문에서 i의 조건식이 `i < n`이 아니고 `i <= n`이 되어야 함
~~왜지?~~

2. 수학을 잘 하는 사람의 풀이
```javascript
function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ; //자연수 거듭 제곱의 합을 구하는 공식
    else
      return   n*(n+1)*(n+2)/6; // 등차수열의 합을 구하는 공식
}
```