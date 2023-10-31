//!class
/*class Car{
    constructor(brand,color)
    {
      this.brand = brand; //key =value // c(brand) =>obj(brand) //Audi
      this.color = color; //black
    }
}
var obj = new Car("Audi","Black")
console.log(obj.color);
console.log(obj.brand);
*/
//! session Task  class Person => name,age,gender,salary
/*class Person{
    constructor(name,age,gender,salary=50){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}
const  person1 = new Person("rupan",65,"male");
const  person2 = new Person("rupan",65,"male",60);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);
console.log(person2.salary);
*/

//! class with methods
/*class Car{
    drive(){
    console.log("Driving the car");
    }
    brake(){
    console.log("Applying the brake");
    }
 }
 const car1 = new Car();
car1.drive();
car1.brake();
*/
//!example:-
/*const users = {
  set name(n) {
    console.log("setting a name" + " " + n);
    this._name = n;
  },

  get name() {
    console.log("getting a name");
    return this._name;
  },
};
users.name = "John";
console.log(users.name);
*/
//! example using class and methods:-
/*class Car{
    constructor(power=50){
        this.pow = power; //50
    }
    set power(n){
      
       return `${this.pow=n}` //400
 }
    get power(){
      
        return `${this.pow}hp`  //400hp
    }
}
var car1 = new Car(400);
console.log(car1.power);
*/




