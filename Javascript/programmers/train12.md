# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 더 크게 합치기

1. 문제 설명
> 
> 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
>
>12 ⊕ 3 = 123
>3 ⊕ 12 = 312
>양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `b` ⊕ `a` 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
>
>단, `a` ⊕ `b`와 `b` ⊕ `a`가 같다면 `a` ⊕ `b`를 return 합니다.

2. 제한사항
> - 1 ≤ `a`, `b` < 10,000


### 🦈 나의 풀이
```javascript
function solution(a, b) {
    const aPlusb = String(a) + String(b);
    const bPlusa = String(b) + String(a);
    
    if(aPlusb >= bPlusa){
        return Number(aPlusb);
    }else{
        return Number(bPlusa);
    }
```

1. 다른 사람의 풀이 (삼항연산자 이용)

```javascript
function solution(a, b) {
    const atob = String(a) + String(b)
    const btoa = String(b) + String(a)
    
    return atob >= btoa ? Number(atob) : Number(btoa)
}
```