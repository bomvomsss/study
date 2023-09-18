# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 출력하기

1. 문제 설명
> 문자열 `str`이 주어질 때, `str`을 출력하는 코드를 작성해 보세요.
>
2. 제한사항
> - 1 ≤ `str`의 길이 ≤ 1,000,000
> - `str`에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.
### 🦈 나의 풀이
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