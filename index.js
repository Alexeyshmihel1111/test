/*let user = {}
 user.name = 'John';
 user.surname = 'Smith';
 user.name = 'Pete';
 delete user.name;
 console.log(user);*/

 /*function Constructer(name,lastname,ocenka,){
     this.name=name;
     this.lastname=lastname;
     this.ocenka=ocenka;
    }
const Constructer = new Constructer(allals,ewfpwjf,[1,54,6]);
const Constructer = new Constructer(ewfw,ewfpwjf,[1,23,8]);
const Constructer = new Constructer(rheh,ewfpwjf,[1,2,3]);
const Constructer = new Constructer(cxbd,ewfpwjf,[1,2,3,7]);*/

/*let arr = [[1,2,3],[4,5,6],[7,8,9]];
let arr2 = arr[1][0];
        console.log(arr2);*/


  /*let arr = {
      js : ['jQuery', 'Angular'],
      php : 'hello',
      css : 'world',
  }      
 
console.log(arr.js[0]);*/

/*let week = {
    ru: ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'],
    en: ['monday','tuesday','wednesday','thursday','friday',' saturday','sunday'],
}

console.log(week.ru[0] + '' + week.en[2]);*/


/*let xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users';
xhr.open('GET', url, false);

xhr.onload = function() {
    const users = JSON.parse(xhr.response);
    console.log(users);
    const name = users.map (user => user.name + '(');
  
    console.log(name);

}
xhr.send();*/

/*let elements = document.body.querySelector('div');
elements.style.width = '800px';
elements.style.height = '500px'; 
elements.style.background = 'blue';
console.log(elements);
let lis = document.body.querySelector('div');
lis.style.width = '100px';
lis.style.height = '300px';
lis.style.background  = 'green';
console.log(lis);

const ul = document.createElement('ul');

for(i=0; i<500; i++ ){
const li = document.createElement('li');
ul.append(li);
li.innerText = 241;


};
 document.body.append(ul);*/


/*const li = document.body.querySelectorAll('li');
li.forEach(lig => {
    
    lig.addEventListener('click',function(event){

    lig.innerText = parseInt(lig.innerText) +1;
 

  })


lig.addEventListener('contextmenu', function(event){
        lig.innerText = parseInt(lig.innerText) -1;
        event.preventDefault();
})
})
let index = 100
const div = document.body.querySelector('div');
setInterval(()=>{
    if(index>0){
    div.textContent = index;
    index--;}
},250);
function move (){
div.style.position = 'relative'   
div.style.left = (Number.parseInt(div.style.left) || 0)+5 + 'px';
div.style.top = (Number.parseInt(div.style.top) || 0)+5 + 'px';
}
setInterval(move,150);
const button = document.body.querySelector('button');
button.addEventListener('mousemove', function(event){
  console.log('event');  
button.style.left = event.x - button.offsetWidth - 1 + 'px';
button.style.top = event.y - button.offsetHeight - 1 + 'px';
})
const table = document.body.querySelector('table');
let sum = 'x'
table.addEventListener('click',function(event){
    if (event.target.tagName === 'TD' && !event.target.innerText.trim()){
        event.target.innerText = sum;
        sum = sum === 'x' ? 'o' : 1 + 'px';
    }
})
fetch('https://https://randomuser.me/api/')
.then(response) => {
    return response.json()
})
.then (data) => {
const img = document.createElement('img')
})
class Train {
    constructor(numberPunct,numberTrain,departureTime){
        
        this.numberPunct = numberPunct;
        this.numberTrain = numberTrain;
        this.departureTime = departureTime;
    }

}
let train1 = new Train('Brest' , 143, new Date('May 17, 2021 03:24:00'));
let train2 = new Train('Minsk' , 79, new Date('May 05, 2021 07:24:00'));
let train3 = new Train('Gomel' , 690, new Date('May 11, 2021 18:24:00'));
let train4 = new Train('Grodno' , 34, new Date('May 02, 2021 22:24:00'));
let train5 = new Train('Vitebsk' , 269, new Date('May 24, 2021 01:24:00'));
  trains.sort (function (a,b){
  if(a.numberPunct>b.numberTrain){
      return 1;
  }
  if(a.numberPunct<b.numberTrain){
      return -1;
  }
  });
  console.log(trains);*/

