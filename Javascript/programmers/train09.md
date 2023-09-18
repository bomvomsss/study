# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 홀짝 구분하기

1. 문제 설명
> 
> 자연수 `n`이 입력으로 주어졌을 때 만약 `n`이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

2. 제한사항
> - 1 ≤ `n` ≤ 1,000


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
    n = Number(input[0]);
    if(n%2 == 0){
        console.log(n, 'is even');
    }else{
        console.log(n, 'is odd');
    }
});
```