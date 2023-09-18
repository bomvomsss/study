# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 덧셈식 출력하기

1. 문제 설명
> 두 정수 `a`, `b`가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
>
>```
>a + b = c
>```
2. 제한사항
> - 1 ≤ `a`, `b` ≤ 100
### 🦈 나의 풀이
```javascript
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    console.log(num1, '+', num2, '=', num1+num2);
});
```