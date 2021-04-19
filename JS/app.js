let operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomValue (min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

let parent = document.getElementById('container');
let table = document.getElementById('table');

let neuArr = [];

let newArr = [];

function City (loc, minC, maxC, avgPS){
    this.location = loc;
    this.minCust = minC;
    this.maxCust = maxC;
    this.avgPerSale = avgPS;
    this.randomCust=[];
    this.cookiesPerHour=[];
    this.total=0;
    newArr.push(this);
}

let seattle = new City ('Seattle', 23, 65, 6.3);
let tokoyo = new City ('Toyko', 3, 24, 1.2);
let dubai = new City ('Dubai', 11, 38, 3.7);
let paris = new City ('Paris', 20, 38, 2.3);
let lima = new City ('Lima', 2, 16, 4.6);


City.prototype.calcRandCust = function(){
    for(let i=0 ; i<operationHours.length ; i++){
        this.randomCust.push(randomValue(this.minCust,this.maxCust));
    }
}

City.prototype.calcRandcookies = function(){
    for(let i=0 ; i<operationHours.length ; i++){
        this.cookiesPerHour.push(Math.ceil(this.randomCust[i]*this.avgPerSale));
        this.total += this.cookiesPerHour[i];
    }console.log(this.total);
    console.log(neuArr);
}

City.prototype.lastArray = function(){

    for(let i=0 ; i<operationHours.length ; i++){
        if(neuArr.length<this.cookiesPerHour.length){
        neuArr.push(this.cookiesPerHour[i]);
        }else{
            neuArr[i] += this.cookiesPerHour[i];
        }
    }
}

let ExtRow = document.createElement('tr');
table.appendChild(ExtRow);

let EmptySp = document.createElement('th');
ExtRow.appendChild(EmptySp);

let Hl = 0;
for(let i=0 ; i<operationHours.length ; i++){
    let Hl = document.createElement('th');
    ExtRow.appendChild(Hl);
    Hl.textContent = operationHours[i];
}

City.prototype.render = function(){

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = this.location;


    let Elr = 0;
    for(let i = 0 ; i < this.cookiesPerHour.length ; i++){
        Elr = document.createElement('td');
        headerRow.appendChild(Elr);
        Elr.textContent = this.cookiesPerHour[i];
    }   
        Elr = document.createElement('td');
        headerRow.appendChild(Elr);
        Elr.textContent = this.total;
}

function hotfix(){
let x = 0
for(let i=0 ; i<neuArr.length ; i++){
x += neuArr[i];
}
if(neuArr.length < operationHours.length){
neuArr.push(x);
}else{
    neuArr[14] = x;
}
}

const form = document.getElementById('salesForm');

form.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
    event.preventDefault();
    console.log(event);

    let newCityName =event.target.nameField.value;

    let minCus = event.target.minC.value;
    let maxCus = event.target.maxC.value;
    
    let avgPer = event.target.avgP.value;
    

    let newCity = new City(newCityName, minCus, maxCus, avgPer);

    newCity.calcRandCust();
    newCity.calcRandcookies();
    hotfix();
    newCity.render();
    newCity.lastArray();

    newArry();

}
    


for(let i=0 ; i<newArr.length ; i++){
    newArr[i].calcRandCust();
    newArr[i].calcRandcookies();
    newArr[i].render();
    newArr[i].lastArray();
    }


function newArry(){


let LastRow = document.createElement('tr');
table.appendChild(LastRow);

let EmptySpot = document.createElement('th');
LastRow.appendChild(EmptySpot);
EmptySpot.textContent = 'Total';

let Ellr = 0;
for(let i=0 ; i<neuArr.length ; i++){
    Ellr = document.createElement('td');
    LastRow.appendChild(Ellr);
    Ellr.textContent = neuArr[i];

}

}

