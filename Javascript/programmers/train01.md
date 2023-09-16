# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 출력하기
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});
```

1. readline 모듈 공부 必