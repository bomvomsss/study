# 코딩테스트 연습
## 코딩 기초 트레이닝 Lv.0

### 문자열 출력하기

> 1. 문제 설명
> 영어 알파벳으로 이루어진 문자열 `str`이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
>
> 2. 제한사항
> - 1 ≤ `str`의 길이 ≤ 20
>   - `str`은 알파벳으로 이루어진 문자열입니다.

```javascript
let arr = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i = 0; i < str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            arr.push(str[i].toLowerCase());
        }else{
            arr.push(str[i].toUpperCase());
        }
    }
    console.log(arr.join(""));
});
```