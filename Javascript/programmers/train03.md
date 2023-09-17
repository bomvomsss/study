# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### a와 b 출력하기

> 1. 문제 설명
> 정수 `a`와 `b`가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
>
> 2. 제한사항
> - -100,000 ≤ `a`, `b` ≤ 100,000
> 

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
    console.log('a =', Number(input[0]));
    console.log('b =', Number(input[1]));
});
```