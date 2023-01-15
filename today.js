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
*/
let user={
    name:"Antony",
    "what he likes":"painting",
}
let container="what he likes";
console.log(user["name"]);