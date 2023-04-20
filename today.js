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
console.log(a.name);//Eugene

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

//CONSTRUCTOR FUNCTIONS
function User(name){
    this.name=name;
    return; 
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

// Create a constructor function for a restaurant that has properties for name,
// menu items, and reviews. Use this constructor to create several restaurant objects
// and include methods to add and remove menu items, and add and display reviews.
function Restaurant(name){
    this.name=name;
    this.menu=[];
    this.reviews=[];
    this.addMenu=function(food){
        this.menu.push(food);
    }
    this.dellMenu=function(food){
        let index=this.menu.indexOf(food);
        this.menu.splice(index,1)
    }
    this.addReview=function(review){
        this.reviews.push(review);
    }
    this.displayReviews=function(){
        for(let i=0;i<this.reviews.length;i++){
            console.log(this.reviews[i]);
        }
    }
}
let pronto= new Restaurant("pronto");
pronto.addMenu("pilau");
pronto.addMenu("rice");
pronto.addMenu("mukimo");
pronto.dellMenu("rice");
pronto.addReview("chonjo");
pronto.addReview("fuego");
pronto.displayReviews();

// The splice() method in JavaScript is a method of the Array object that allows you to add or remove elements from an array. It modifies the original array, and it takes in three arguments:

// The index at which to start changing the array (required)
// The number of elements to remove (optional)
// The elements to add to the array (optional)

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


//OPTIONAL CHAINING
//to avoid errors
//The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.For example:
let i=0;
function add(){
    return i+=1;
}
let user=null;
user.add();//Instead of giving an error,add() doesn't run because the left side is a null
console.log(i);//0

let user={
    name:"Antony",
    sayHi(){
        console.log("Hi,"+user.name)
    }
};
user2={}
user2.sayHi?.()


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

// SYMBOL TYPE
// By specification, only two primitive types may serve as object property keys:

// string type, or
// symbol type.
// Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Until now we’ve been using only strings.

// Now let’s explore symbols, see what they can do for us.

// Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

// Symbols have two main use cases:

// “Hidden” object properties.

// If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

// So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

Global symbols
As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

For instance:

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created
(
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true
Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.


let user={
    name:'Anna',
    age:20,
    sayHi(){
        console.log(`Hi ${user.name} i am ${user.age}`);
    }
}
user.sayHi()



Methods push and unshift can add multiple elements at once:

An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

For instance, it is copied by reference:

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now
Why is it faster to work with the end of an array than with its beginning? Let’s see what happens during the execution:

fruits.shift(); // take 1 element from the start
It’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.

The shift operation must do 3 things:

Remove the element with the index 0.
Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
Update the length property.

some UI/UX
Skeuomorphism is a design concept that mimics real-world objects to help users understand how to use specific digital software.
Nuemophism

let arry=["anto",7,"kibet",5,"ruto","koech",9];
for(let key of arry){
    console.log(key);
    // anto
    // 7
    // kibet
    // 5
    // ruto
    // koech
    // 9
}

// What is this code going to show?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length)
// The result is 4:
// That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
let styles=["jazz","Blues"];
styles.push("Rock-and-Roll")
styles[Math.floor(styles.length-1)/2]="Classics";
styles.unshift("Rap","Reggae");

let arr=[4,5,2,7,9,10,4]
let sum=0;
for(let key of arr){
    sum+=key;
}
console.log(sum);


//remembering 'this'
let employee={
    name:"Antony",
    age:30,
    intro(){
        console.log(`Hello my name is ${this.name} I am ${this.age} 
        old.`)
    },
}
employee.intro()

let student={
    1:"Grace",
    age:20,
    class:"B",
}

let arr=Array.from(student);
console.log(arr[1]);


let student={
    name:"Antony",
    age:20,
    school:"MMU",
}
console.log(student);
console.log(JSON.stringify(student))


let kenya = new Map();
kenya.set(1,"Nairobi");
kenya.set(2,"Kiambu");
kenya.set(3,"Machakos");
kenya.set(4,"Kisumu");



//map chaining, method return the map
kenya.set(1,"Nairobi").set(5,"Mombasa").set(6,"Kitale")
//console.log(kenya.get(6));

//looping
for (let num of kenya.keys()){
    console.log(num);
}

for (let num of kenya.values()){
    console.log(num);
}

for (let num of kenya){
    console.log(num);
}

let visitor= new Map([["Antony",20],["letting",19],["Ann",18]]);
visitor.forEach((value,key)=>{console.log(key+value)})

we can create a map from an object by using 
Object.entries that returns an array of key, value pairs, 
we can do the oposite by using Object.fromEntries()

//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.let fruitArray=["mango","melon","berry","banana","mango"];
let fruits= new Set(fruitArray);

fruits.forEach((value)=>{console.log(value);});


function unique(arr){
    //Array.From() returns a new array from an iterable
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let sort=unique(values);
sort.forEach((value)=>{console.log(value)})


function anagram(arr){
    let map=new Map();
    for(word of arr){
        let sorted=word.toLowerCase().split('').sort().join();
        map.set(sorted,word);
    }
    return Array.from(map.values());
}

let ar = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(anagram(ar));
*/
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("Antony");
console.log(keys);