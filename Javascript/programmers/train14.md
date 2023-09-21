# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 조건 문자열

1. 문제 설명
> 
>문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
>
>- 두 수가 `n`과 `m`이라면
>  - ">", "=" : `n` >= `m`
>  - "<", "=" : `n` <= `m`
>  - ">", "!" : `n` > `m`
>  - "<", "!" : `n` < `m`
> 
>두 문자열 `ineq`와 `eq`가 주어집니다. `ineq`는 "<"와 ">"중 하나고, `eq`는 "="와 "!"중 하나입니다. 그리고 두 정수 `n`과 `m`이 주어질 때, `n`과 `m`이 `ineq`와 `eq`의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

2. 제한사항
> - 1 ≤ `n`, `m` < 100


### 🦈 나의 풀이
```javascript
function solution(ineq, eq, n, m) {
    if(ineq == ">" && eq == "="){
        if(n >= m){
            return 1;
        }else{
            return 0;
        }
    }else if(ineq == "<" && eq == "="){
        if(n <= m){
            return 1;
        }else{
            return 0;
        }
    }else if(ineq == ">" && eq == "!"){
        if(n > m){
            return 1;
        }else{
            return 0;
        }       
    }else if(ineq == "<" && eq == "!"){
        if(n < m){
            return 1;
        }else{
            return 0;
        }
    }
}
```

1. 뭔가 더 간단하게 코드를 요약할 수 있지 않을까? 하고 찾아 본 다른 사람의 풀이

```javascript
function solution(ineq, eq, n, m) {
    if(ineq === ">" && eq === "=") {
        return n >= m ? 1 : 0;
    } else if(ineq === "<" && eq === "=") {
        return n <= m ? 1: 0;
    } else if (ineq === ">" && eq === "!") {
        return n > m ? 1 : 0;
    } else {
        return n < m ? 1 : 0;
    }
}
```

```javascript
function solution(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
    return 0
}
```

```javascript
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
```

```javascript
function solution(ineq, eq, n, m) {
    let result = 0;
    let sign = ineq;
    sign += eq == "=" ? '=' : '';

    if(sign == '>='){
        result = n >= m ? 1 : 0;
    }else if(sign == '>'){
        result = n > m ? 1 : 0;
    }else if(sign == '<='){
        result = n <= m ? 1 : 0;
    }else if(sign == '<'){
        result = n < m ? 1 : 0;
    }

    return result;
}
```