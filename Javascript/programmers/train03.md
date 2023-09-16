# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### a와 b 출력하기

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