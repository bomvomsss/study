class Person {
  constructor (name,age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
  }
  nextYearAge(){
    return Number(this.age) + 1;
  }
}

let kim = new Person('kim','24','seoul');
kim.eat = function(){
  return 'apple'
}

console.log('김씨 내년에는 몇살인가요 ?' + kim.nextYearAge());
console.log('김씨가 먹은건? ' + kim.eat());

let park = new Person('park', '31', 'busan');

console.log('박씨 내년에는 몇살인가요?' + park.nextYearAge());
console.log('박씨가 먹은건?' + park.eat());
// document.write(kim.name + '<br/>');
// document.write(kim.age + '<br/>');
// document.write(kim.city);

// console.log(kim);
// console.log(kim.nextYearAge());
// console.log(kim.eat());

