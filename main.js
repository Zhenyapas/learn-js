


let grid = document.querySelector('.grid');

let lastElemGrid = document.querySelector('.last');

let circle = document.querySelector('.circle')

let del = document.querySelector('.del');

let k = 1;

circle.textContent = k;


lastElemGrid.onclick = () => {
k++;
let div = document.createElement('div');
div.textContent ='item-'+grid.children.length;

circle.textContent = k;

del.classList.add('active');

grid.append(div) ;

}


del.onclick = () => {

 if (k>1){k--}
 if(grid.children.length == 1){
  return;
 }
 circle.textContent = k;
 grid.lastChild.remove();

}

let libra = {
  
  book:'Forest Gump',
  kind: 'roman'

}

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function salariesSum (obj){
  let sum = 0;
  for(let key in obj){

    sum +=obj[key];
  }
  return sum;
}
console.log(salariesSum(salaries));


let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  каштан: "жареный"
};

function twiceNumber(obj) {

  for(let key in obj){
    if (typeof(obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
}
twiceNumber(user);
alert(user.каштан);

let arrKeys=['имя','возраст','пол','место работы','увлечение'];
let arrValue=['Лева','8 лет','мужской','композитор','компьютерные игры'];

let userObj={};

for (let i=0;i<arrKeys.length;i++){
  let key = arrKeys[i];
  userObj[key] = arrValue[i];
}

let question = prompt('вопрос?', 'ответ');

alert(userObj[question]);


let admin=user;

console.log(admin.name);



let calculator={

  sum() {

    return this.a + this.b;

  },
  mul() {

    return this.a * this.b;

  },

  read() {

     this.a = prompt('a?','');

     this.b = prompt('b?','');

    
  }

}

  

function Accumulator(startingValue){


   this.value = startingValue;

   this.read = function(){
    this.value = +promt('число','') + this.value; 
   }

}



let salaries1 = {
  John: 100,
  Ann: 160,
  Pete: 130
}

salaries1.clon = clon(salaries1);




function salariesSum(obj){

  let sum = 0;
 
 for(let key in obj){
  
   sum  += obj[key]; 

 }

 return sum;

}

alert(salariesSum(salaries));

 function clon(obj){

  for(let key in obj){
    
   clon[key] = obj[key];

  }
  return clon;

}
let clonSalaries1 = salaries1.clon;
clonSalaries1.Pete = 5555555555555;

alert(clonSalaries1.Pete);

function Calc(){

  this.read = function read(){

    this.a = +prompt('a?','0');
    this.b = +prompt('b?','0');
    
    return this;
    
          
    };
  
  this.sum = function sum(){
    return this.a + this.b;
  };

  this.mul = function mul(){
    return this.a * this.b
  };    

};


let calculator1 = new Calc();

//calculator1.read().read().read();


function readNumber(){
 
 let num = prompt('введите число', '');

 while(! isFinite(num)){
  num = prompt('введите число','');
 } 

 return num;
 
}
//alert(readNumber());

let word = 'Слово';
alert(word[1]);

let strName = 'вася';
function ucFirst(str){

  let str1 = str[0].toUpperCase() + str.slice(1);

  return str1;

}

console.log(ucFirst(strName));


function checkSpam(str){


 return  str.includes('XXXX') || str.includes('viagra');

}

let text = 'efrefer rferferf refreferwf refrewfwe rfwerfqr ';

function truncate(str, maxlength){

  if(str.length>maxlength){
    str = str.slice(0, maxlength - 1) + '...';
    return str;
  }

  return str;

}

console.log(truncate(text,18));




function sumInput(){
 
let arr = [];
let sum = 0;
let a = +prompt('Введите число','0');
  
while(isFinite(a)){
 
 a = +prompt('Введите число','0');
 arr.push(a);

}
if(arr.length == 0){
  return "Массив не содержит чисел";
}
for(let i of arr){

 sum += a[i];

}

return sum;

}

let str1 = 'border-color-radius';

function camelize(str){

  let arr = str.split('-');

  for(let i = 1; i<arr.length; i++){

    let upperWord = arr[i][0].toUpperCase() + arr[i].slice(1);

    arr.splice(i, 1, upperWord);

  }

  str = arr.join('');

  return str;

}


alert(camelize(str1));





function filterRange(array, a, b){

 let newArr = [];

  array.map( function (element) {

    

    if(element >= a && element <= b){

      newArr.push(element);

    }

  });

  return newArr;

}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);




alert( filterRange(arr, 1, 4) ); // 3,1 (совпадающие значения)



function compareNumeric(a,b){

 return b-a;

}

arr.sort(compareNumeric);
alert(arr);


function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

function sortByAge(arr){

  function compare(a,b){
    a.age - b.age;
  }

  users.sort((a,b) => a.age-b.age);

}

function getAverageAge(users){

  let sum = 0;
    
    for(user of users){

      sum += user.age;
    }

   return sum/users.length ;

}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr2 = [ vasya, petya, masha ];

alert( getAverageAge(arr2) );

