/* Objects
Write the code, one line for each action:


let user={};
user.name="john";
user.surname="smith";see
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

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("Antony");
console.log(keys);

//JSON
//stringify()
let student1={
    name:"antony",
    age:21,
    school:"MMU",
}
console.log(JSON.stringify(student1));
//If an object has toJSON, then it is called by JSON.stringify.

//JSON.parse()

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

let user = {
    name: "John Smith",
    age: 35
  };

let userEncoded=JSON.stringify(user);
let userDecoded=JSON.parse(userEncoded);


//Rest
//When we see "..." in the code, it is either rest parameters or the spread syntax.

//There’s an easy way to distinguish between them:

//When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
//When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
//Use patterns:

//Rest parameters are used to create functions that accept any number of arguments.
//The spread syntax is used to pass an array to functions that normally require a list of many arguments.
//Together they help to travel between a list and an array of parameters with ease.

//All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
//Spread syntax

//does exactly the reverse.

//For instance, there’s a built-in function Math.max that returns the greatest number from a list:

alert( Math.max(3, 5, 1) ); // 5
//Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?

//Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
//And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

//Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

//For Math.max:

let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
//We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8
//We can even combine the spread syntax with normal values:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
//Also, the spread syntax can be used to merge arrays:

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)
//In the examples above we used an array to demonstrate the spread syntax, but any iterable will do.

//For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";

alert( [...str] ); // H,e,l,l,o
//The spread syntax internally uses iterators to gather elements, the same way as for..of does.

//So, for a string, for..of returns characters and ...str becomes "H","e","l","l","o". The list of characters is passed to array initializer [...str].

//For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:

let str = "Hello";

// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o
//The result is the same as [...str].

//But there’s a subtle difference between Array.from(obj) and [...obj]:

//Array.from operates on both array-likes and iterables.
//The spread syntax works only with iterables.
//So, for the task of turning something into an array, Array.from tends to be more universal.

//Copy from array/object.
//usually we would:
let arr1=[1,1,2,2,3,3];
let arr1Copy=Object.assign([],arr1);
console.log(JSON.stringify(arr1)==JSON.stringify(arr1Copy))

let obj1={a:1,b:2,c:3,d:4,}
let obj1Copy=Object.assign({},obj1);
console.log(JSON.stringify(obj1)==JSON.stringify(obj1Copy));

//but we can use spread,
arr1Copy=[...arr1];
console.log(JSON.stringify(arr1)==JSON.stringify(arr1Copy));
obj1Copy={...obj1};
console.log(JSON.stringify(obj1)==JSON.stringify(obj1Copy));

//Rest Parameter ...

//A function can be called with any number of arguments, no matter how it is defined.
//There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted, 
//so the result in the code above is 3.The rest of the parameters can be included in the function definition by using three dots ... 
//followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.
function restTest(num1,num2,...args){
    console.log(num1+" "+num2);
    for(let arg of args){
        console.log(arg);
    }
}
restTest(1,2,3,4,5,6,7)
//btw the rest parameters should be at the end.



//something intresting
let numbers=[1,2,3,4,5,6,7,8,9,10];
function isEven(number){
    if(number%2===0){
        return number
    }
}
let evenNum=numbers.filter(isEven);
console.log(JSON.stringify(evenNum));

let numbers=[1,2,3,4,5,6,7,8,9,10];
function inBetween(num1,num2){
    return function (x){
        return x>=num1 && x<=num2;
    }
    
}
console.log(numbers.filter(inBetween(5,9)));

let numbers=[1,2,3,4,5,6,7,8,9];
function inArray(...args){
    return function(x){
        let found = false;
        for(let arg of args){
            if(x == arg) {
                found = true;
              }
        }
        return found;
    }
}


console.log(numbers.filter(inArray(4,5,6,7)))


//practise call backs and filters
//Write a function that takes an array of numbers and returns a new array with only the odd numbers.

let numbers=[1,2,3,4,5,6,7,8,9,10];
function isOdd(x){
    return !(x%2==0);
}
console.log(numbers.filter(isOdd));


//Write a function that takes an array of strings and returns a new array with only the strings that start with the letter "a".

let names=['Antony','kibet','Ann','Grace','Ben'];
function filterNames(x) {
    return  x[0].toLowerCase()=='a';
}
console.log(names.filter(filterNames));


//Write a function that takes an array of objects representing books, and returns a new array with only the books whose title contains the word "JavaScript".
let books=[{name:'Javascript book1'},{name:'Python book1'},{name:'Javascript Fundamentals'},{name:'Javascript volume2'}]
function bookChecker(x){
    return x.name.toLowerCase().includes('javascript');
}
let javascriptBooks=books.filter(bookChecker)
for(let book of javascriptBooks){
    console.log(book.name);
}

let user={};
Object.definerProperty(user,"name",{value:"Antony"});

/get and set
let user={
        name:"",
            get jina(){
                    return name;
                        },
                            set jina(value){
                                    this.name=value;
                                        }
                                        }
                                        user.name="Antony";
                                        console.log(user.name);
}
get and 

let user={
    name:"Antony",
    age: 20,
    action(){
        this.isSleeping = true;
    },
    list(){
      for(let prop of this){
        console.log(prop);
      }
    }
}
user.list();
// user.action();
// console.log(user.isSleeping);


//PROTOTYPE, INHERITANCE
// In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
// We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
// The object referenced by [[Prototype]] is called a “prototype”.
// If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
// Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
// If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
// The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table,
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed,
  };

console.log(pockets.glasses);
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.


let hamster={
    stomach:[],
    eat(food){
        this.stomach.push(food);
    }
}

let speedy ={
    __proto__:hamster
    stomach:[],
}
let lazy ={
    __proto__:hamster
    stomach:[],
}

speedy.eat("carrot");
console.log(lazy.stomach[0]);

//OR 

let hamster = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>


//reminding myself object constructors 
function Car(type,model,origin){
    this.type=type;
    this.model=model;
    this.origin=origin;
}

let car1=new Car("toyota","prius","Japan");
console.log(car1.model);


// All built-in objects follow the same pattern:
// The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype, etc.)
// The object itself stores only the data (array items, object properties, the date)
// Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype and Boolean.prototype. Only undefined and null do not have wrapper objects
// Built-in prototypes can be modified or populated with new methods. But it’s not recommended to change them. The only allowable case is probably when we add-in a new standard, but it’s not yet supported by the JavaScript engine


// Object properties configuration RELEARN

// let user={};
// Object.defineProperties(user,{name:{value:"Antony", writable:false,configurable: true}});
// Object.defineProperties(user,{name:{writable:true}});
// user.name="kibet";


// console.log(Object.getOwnPropertyDescriptors(user));



//CLASSES
class Car{
    constructor(name,make){
        this.make=make;
        this.name=name;
       
    }
    get prop(){
        return this.name +this.make;
    }
}
//let car1= new Car("rover", 2019);
//console.log(car1.prop);

//INHERITANCE
class Owner extends Car {
    constructor(name,make,fname){
        super(name,make);
        this.fname=fname;
    }
}

let own1=new Owner("Mercedes",2019,"Antony");
console.log(own1);

let dictionary={
    apple:'apple',
    mango:'mango',
    pineApple:'apple',
}
Object.defineProperty(dictionary,'returnObjectKeys',{
    value:function(){
        return Object.keys(this).join('.');
}});

console.log(dictionary.returnObjectKeys());
The try...catch construct allows to handle runtime errors. It literally allows to “try” running the code and “catch” errors that may occur in it.

TRY...CATCH
The syntax is:
//The try...catch construct allows to handle runtime errors. It literally allows to “try” running the code and “catch” errors that may occur in it.
try {
  // run this code
} catch (err) {
  // if an error happened, then jump here
  // err is the error object
} finally {
  // do in any case after try/catch
}
There may be no catch section or no finally, so shorter constructs try...catch and try...finally are also valid.

Error objects have following properties:

message – the human-readable error message.
name – the string with error name (error constructor name).
stack (non-standard, but well-supported) – the stack at the moment of error creation.
If an error object is not needed, we can omit it by using catch { instead of catch (err) {.

We can also generate our own errors using the throw operator. Technically, the argument of throw can be anything, but usually it’s an error object inheriting from the built-in Error class. More on extending errors in the next chapter.

Rethrowing is a very important pattern of error handling: a catch block usually expects and knows how to handle the particular error type, so it should rethrow errors it doesn’t know.
try...finally
The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.
Even if we don’t have try...catch, most environments allow us to setup a “global” error handler to catch errors that “fall out”. In-browser, that’s window.onerror.





class ValidationError {
    constructor(){
    }
}

console.log(new ValidationError().constructor.name);


class ValidationError extends Error{
    constructor(message){
        super(message);
        this.message=message;
        this.name="ValidationError";
    }
}



function blaa(user){
    let user=JSON.parse(user);
    if(!user.name){
        throw new ValidationError("name not provided");
    }
    return user;
}

blaa('{"age":20}');
console.lo








// try{
//     blaa('{"age":20,}');
// }catch(err){
//     if(err instanceof ValidationError){
//         console.log(err.name);
//         console.log(err.message);
//     }
    
// }



//CALLBACK

let data="rainy";
function displayWeather(data){
    if(data=='sunny'){console.log(data)}
    if(data=='rainy'){console.log(data)}
}

function getWeather(callback){
    setTimeout(function(){
        callback(data);
    },3000);
}
 
getWeather(displayWeather);


//PROMISES
Returning promises
A handler, used in .then(handler) may create and return a promise.

In that case further handlers wait until it settles, and then get its result.

Thenables
To be precise, a handler may return not exactly a promise, but a so-called “thenable” object – an arbitrary object that has a method .then. It will be treated the same way as a promise.

The idea is that 3rd-party libraries may implement “promise-compatible” objects of their own. They can have an extended set of methods, but also be compatible with native promises, because they implement .then.

Here’s an example of a thenable object:

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code }
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); // (*)
  })
  .then(alert); // shows 2 after 1000ms
JavaScript checks the object returned by the .then handler in line (*): if it has a callable method named then, then it calls that method providing native functions resolve, reject as arguments (similar to an executor) and waits until one of them is called. In the example above resolve(2) is called after 1 second (**). Then the result is passed further down the chain.

This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.
We’ll use the fetch method to load the information about the user from the remote server. It has a lot of optional parameters covered in separate chapters, but the basic syntax is quite simple:

let promise = fetch(url);
This makes a network request to the url and returns a promise. The promise resolves with a response object when the remote server responds with headers, but before the full response is downloaded.

To read the full response, we should call the method response.text(): it returns a promise that resolves when the full text is downloaded from the remote server, with that text as a result.

The code below makes a request to user.json and loads its text from the server:

fetch('/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", "isAdmin": true}
  });
The response object returned from fetch also includes the method response.json() that reads the remote data and parses it as JSON. In our case that’s even more convenient, so let’s switch to it.

We’ll also use arrow functions for brevity:

// same as above, but response.json() parses the remote content as JSON
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => alert(user.name)); // iliakan, got user name


  As a good practice, an asynchronous action should always return a promise. That makes it possible to plan actions after it; even if we don’t plan to extend the chain now, we may need it later.
  */