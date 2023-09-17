# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 붙여서 출력하기

> 1. 문제 설명
> 두 개의 문자열 `str1`, `str2`가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 `str1`과 `str2`을 이어서 출력하는 코드를 작성해 보세요.
>
> 2. 제한사항
> - 1 ≤ `str1`, `str2`의 길이 ≤ 10


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
    str1 = input[0];
    str2 = input[1];
    const arr = [];
    arr.push(str1,str2);
    console.log(arr.join(''));
});
```

1. 깔끔한 코드 가져와봤다
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const strArr = line.split(' ')
    console.log(strArr.join(''))
})
```
2. realine 모듈 원리 공부 필요