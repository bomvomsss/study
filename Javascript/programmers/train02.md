# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 반복해서 출력하기

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