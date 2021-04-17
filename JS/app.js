let operationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomValue (min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

let parent = document.getElementById("container");

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

seattle = new City ('Seattle', 23, 65, 6.3);
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
}

City.prototype.render = function(){
    let h2El = document.createElement('h2');
    parent.appendChild(h2El);
    h2El.textContent = this.location;

    let unorderedlistEl = document.createElement('ul');
    parent.appendChild(unorderedlistEl);

    let liEl = 0;
    for(let i = 0 ; i < this.cookiesPerHour.length ; i++){
        liEl = document.createElement('li');
        unorderedlistEl.appendChild(liEl);
        liEl.textContent = operationHours[i] + ': ' + this.cookiesPerHour[i] + 'Cookies';
    }
    let totalliItem = document.createElement('li');
    unorderedlistEl.appendChild(totalliItem);
    totalliItem.textContent = 'Total :' + this.total + 'Cookies';
}

for(let i=0 ; i<newArr.length ; i++){
newArr[i].calcRandCust();
newArr[i].calcRandcookies();
newArr[i].render();
}