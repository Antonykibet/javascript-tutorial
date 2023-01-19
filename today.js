/* Objects
Write the code, one line for each action:


let user={};
user.name="john";
user.surname="smith";
console.log(user.name);
user.name="pete";
console.log(user.name);
delete user.name;
console.log(user.name);
*/

/*
Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let condition
let schedule={};
function isEmpty(schedule){
    for (key in schedule){
    condition=key;   
    }
    if(condition==undefined){
        return true;
    }else{
        return false;
    }
}
console.log(isEmpty(schedule));//it works
//solution
Just loop over the object and return false immediately if there’s at least one property.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
Sum object properties
We have an object storing salaries of our team:

let sum=0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
for(key in salaries){
    sum+=salaries[key];
}
console.log(sum);

Multiply numeric property values by 2
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
console.log(menu.width);
function multiplyNumeric(menu){
    for(key in menu){
        if(typeof(menu[key])=='number'){
            menu[key]= menu[key]*2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu.width);
console.log(menu.height);


const user={
    name:"antony",
    age:20,
};
let a=user;
a.name="Eugene";
console.log(user.name);

const user={
    name:"antony",
    age:20,
};
let clone=object.assign({},user);
console.log(clone.name);
//We also can use Object.assign to perform a simple object cloning:

const user={
    name:"antony",
    age:20,
};
let clone={};
Object.assign(clone,user);
console.log(clone.name);

//Deep cloning,,,when clonning objects with an object in them as a property, youll inly clone the object's refrence and not its property that is why you have to deep clone.

const user={
    name:"antony",
    age:20,
    object2:{
        value1:50
    }
};
let clone=structuredClone(user);
clone.object2.value1=70;
console.log(clone.object2.value1);//70
console.log(user.object2.value1)//50

let user={
    name:"Antony",
    age:20,
    sayHi(){
        return "hello";
    },
}
console.log(user.sayHi());

let user={
    name:"Antony",
    age:20,
    sayHi(){
        return this.name;
    },
}
console.log("hello "+user.sayHi());

let user={
    name:"Antony",
    "what he likes":"painting",
}
let container="what he likes";
console.log(user["name"]);


let calculator={
    a:0,
    b:0,
    read(num1,num2){
        this.a=num1;
        this.b=num2;
    },
    sum(){
        return console.log(this.a +this.b); 
    },
    mul(){
        return console.log(this.a*this.b);
    }
}
calculator.read(5,6);
calculator.sum();
calculator.mul();

let ladder={
    step:0,
    up(){
        this.step+=1;
        return this;
    },
    down(){
        this.step-=1
        return this;
    },
    show(){
        console.log(this.step);
        return this;
    }
}

ladder.up().down().up().up().show();

//constructor functions
function User(name){
    this.name=name;
    return 
}
let ann= new User("Ann");
console.log(ann.name);//ann


let obj={}
function A(){
    return obj; 
};
function B(){
    return obj;
};
let a= new A();
let b = new B();
console.log(a==b);//true  ,they have the same object, obj

function A(){
    return;
}
function B(){
    return;
}
a=new function A();
b=new function B();
console.log(a==b);//false  ,they have different objects

function Calculator(){
    this.a=0;
    this.b=0;
    this.getValues=function(num1,num2){
        this.a=num1;
        this.b=num2;
    }
    this.sum=function(){
        return console.log(this.a+this.b);
    }
    this.mul=function(){
        return console.log(this.a*this.b);
    }
}

let calc=new Calculator();
calc.getValues(8,6);
calc.sum();
calc.mul();


function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(num){
        return this.value=this.value+num;
    }
}

let accumulator=new Accumulator(8);
accumulator.read(5);
console.log(accumulator.value)


function Student(name,age,gpa){
    this.name=name;
    this.age=age;
    this.gpa=gpa;
    this.classes=["math","bio","chem"];
    this.add=function(subject){
        this.classes.push(subject);
    };
    this.drop=function(subject){
        this.index=this.classes.indexOf(subject);//indexOf() method returns the index of an array element.
        this.classes.splice(this.index,1);
    };
}

let ann= new Student("Ann",20,3.6);
ann.add("phy");
ann.add("kisw");
ann.drop("bio");
console.log(ann.classes);


let myArray=["anto","kibet","ruto","koech"];
let index=myArray.indexOf("kibet");
myArray.splice(index,1);
console.log(myArray);
*/

//OPTIONAL CHAINING

//The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.For example:
let i=0;
function add(){
    return i+=1;
}
let user=null;
user.add();//add() doesn't run because the left side is a null
console.log(i);//0
/*
user={
    name:"Antony",
    sayHi(){
        console.log("Hi,"+user.name)
    }
};
user2={}
user2.sayHi?.()
user.sayHi();

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)
//   Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it.
  
//   Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.
  
//   The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.
// The optional chaining ?. syntax has three forms:

// obj?.prop – returns obj.prop if obj exists, otherwise undefined.
// obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
// obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
*/