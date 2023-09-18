# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 반복해서 출력하기

1. 문제 설명
> 문자열 `str`과 정수 `n`이 주어집니다.
`str`이 `n`번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
>
2. 제한사항
> - 1 ≤ `str`의 길이 ≤ 10
> - 1 ≤ `n` ≤ 5
### 🦈 나의 풀이
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
});
```

1. repeat();<br/>
처음에 `console.log(str*n);` 했다가 `Nan` 뜸. 문자열 반복에는 repeat() 함수를 사용하자

2. realine 모듈은 아직도 어려워잉