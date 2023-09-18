# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 돌리기

1. 문제 설명
> 문자열 `str`이 주어집니다.
> 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
>
2. 제한사항
> - 1 ≤ `str`의 길이 ≤ 10

3. 입출력 예<br/>
> - 입력
> ```
> abcde
> ```
> - 출력
> ```
> a
> b
> c
> d
> e
> ```
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
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
});
```

1. 다른 사람이 푼 걸 가져와 봤다
```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line
}).on('close',function(){
    [...input].forEach(a => console.log(a))
});
```