# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 두 수의 연산값 비교하기

1. 문제 설명
> 
>연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
>
>12 ⊕ 3 = 123
>3 ⊕ 12 = 312
>양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `2 * a * b` 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
>
>단, `a` ⊕ `b`와 `2 * a * b`가 같다면 `a` ⊕ `b`를 return 합니다.

2. 제한사항
> - 1 ≤ `a`, `b` < 10,000


### 🦈 나의 풀이
```javascript
function solution(a, b) {
    const ab = String(a) + String(b)
    const ab2 = 2*a*b

    if(ab >= ab2){
        return Number(ab);
    }else{
        return ab2;
    }
}

function solution(a, b) {
    const ab = String(a) + String(b)
    const ab2 = 2*a*b

    return ab >= ab2 ? Number(ab) : ab2;
}
```