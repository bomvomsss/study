# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 특수문자 출력하기

> 1. 문제 설명
> 다음과 같이 출력하도록 코드를 작성해 주세요.
>
> 2. 출력 예시
> ```
> !@#$%^&*(\'"<>?:;
> ```

```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log('!@#$%^&*(\\\'"<>?:;');
});
```

1. 백틱과 따옴표를 원래 문자대로 출력해야 하는 것이 관건인 문제
<br/>~~특수문자를 그대로 console.log('');에 입력해도 출력결과에 눈으로는 똑같이 보이게 나왔지만~~

2. 백틱 사용해서 출력해야 하는 특수문자
   <br/>
   |코드|표시(출력)|
   |---|---|
   | `\'`|`'`|
   |` \"`|`"`|
   |`\\`|`\`|
   |`\n`|줄 바꿈. Line Feed(LF)|
   |`\r`|캐리지 리턴(CR)|
   |`\t`|탭(TAB)|
   |`\b`|백스페이스, 잘 안쓰임|
   |`\f`|폼피드(FF), 잘 안쓰임|
   |`\v`|새로 탭, 잘 안쓰임|
