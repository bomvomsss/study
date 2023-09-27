# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.1

### 자릿수 더하기

1. 문제 설명
> 
> 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
> 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

2. 제한사항
>- N의 범위 : 100,000,000 이하의 자연수


### 🦈 나의 풀이
```javascript
function solution(n){
    const N = n.toString();
    let arr = [...N];
    let arr2 = arr.map(el => Number(el))
        
    return arr2.reduce((a,b) => (a+b));
}
```

1. 한 줄로 쓰면?

```javascript
return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
```
```javascript
 return [...(n+"")].reduce((a,b)=>a+b*1,0)
```

- `+`를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환됩니다. 위의 예시에서 `n+""`은 `숫자 + 문자열`의 형태이기 때문에 결과적으로 문자열을 반환합니다. 
  - 참고로 `""`은 빈문자열이기 때문에 연결해도 반환값에 영향을 주지 않습니다. 그저 다른 피연산자를 문자열로 **형변환**하는 역할을 합니다. 따라서 `String(n)`과 동일하게 사용할 수 있습니다.