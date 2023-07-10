class Person {
  constructor (name,age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
  }
  //메소드생성
  nextYearAge() {
      return Number(this.age) + 1;
  }
}

class introducePerson extends Person {
  constructor(name, age, city, futureHope) {
      super(name, age, city);
      this.futureHope = futureHope
  }
  introduce () {
      return `저는 ${this.city}에 사는 ${this.name} 입니다. 
      내년엔 ${super.nextYearAge()}살이며,
      장래희망은 ${this.futureHope} 입니다.`
  }

}

let kim = new introducePerson('Kim','24','Seoul', '개발자');

console.log(kim.introduce());