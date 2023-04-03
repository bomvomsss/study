// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// class User{
//   constructor(first, last){
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const bomvomsss = new User('bomvomsss', 'Kim')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(bomvomsss.getFullName())
// console.log(amy)
// console.log(neo)

// //--------------------------------------
// class Vehicle{
//   constructor(name, wheel){
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle{
//   constructor(name, wheel){
//     super(name, wheel)
//     // super = Vehicle 클래스
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBycycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBycycle)

// class Car extends Vehicle{
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)

// //-----------------------------
// const pi = 3.14159265358979
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)
// //-----------------------------
// console.log('abs: ', Math.abs(-12))

// console.log('min: ', Math.min(2, 8))

// console.log('max: ', Math.max(2, 8))

// console.log('ceil: ', Math.ceil(3.14))
// // 올림 처리 (정수단위로 올림)

// console.log('floor: ', Math.floor(3.14))
// // 내림 처리

// console.log('round: ', Math.round(3.14))
// console.log('round: ', Math.round(3.6))
// // 반올림 처리 

// console.log('random: ', Math.random())
// // 난수 반환

// //구조분해-----------------------

// const user = {
//   name : 'bomvomsss',
//   age : 98,
//   email : 'naver@naver.com',
//   address : 'Canada'
// }

// const {name : bomvom, age, email, address = 'Korea'} = user
// // e.g, user.address
// // 각 키값들을 구조분해해서 사용할 수 있는 방법

// console.log(`사용자의 이름은 ${bomvom}입니다.`)
// console.log(`${bomvom}의 나이는 ${age}세 입니다.`)
// console.log(`${bomvom}의 이메일 주소는 ${email}입니다.`)
// console.log(address)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [, , c] = fruits
// console.log(c)
// //------------------------
// const fruits2 = ['Apple', 'Banana', 'Cherry', 'Orange']
// console.log(fruits2)
// console.log(...fruits2)

// const toObject = (a, b, ...c) => ({ a, b, c })
// console.log(toObject(...fruits2))
// //-----------------------
// import _ from 'lodash'

// const user2 = {
//   name : 'bomvomsss',
//   age : 98,
//   emails : ['naver@naver.com']
// }
// const copyUser2 = _.cloneDeep(user2)
// console.log(copyUser2 === user2)

// user2.age=2
// console.log('user2', user2)
// console.log('copyUser2', copyUser2)


// console.log('------------------')

// user2.emails.push('daum@daum.net')
// console.log(user2.emails === copyUser2.emails)
// console.log('user2', user2)
// console.log('copyUser2', copyUser2)

//-----------------------------
// import axios from 'axios'

// function fetchMovies(){
//   axios
//   .get('http://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//   .then(res => {
//     console.log(res)
//     const h1El = document.querySelector('h1')
//     const imgEl = document.querySelector('img')
//     h1El.textContent = res.data.Search[0].Title
//     imgEl.src = res.data.Search[0].Poster
//   })
//   //메소드 체이닝
// }
// fetchMovies()