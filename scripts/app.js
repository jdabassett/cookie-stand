
'use strict';



// ########## GLOBAL VARIABLES ##########
// select table element
let storeTable = document.querySelector('#storeTable');

// select form element
let newStoreForm = document.querySelector('#newStoreForm');

let newStoreName = document.querySelector('#newStoreName');

//store hours
let arrayStoreHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// for the last row of table
let arrayStoreTotals = [];



// ########## HELPER FUNCTION ##########

//function to generate random customer number per hour
function rndCstHr (min,max) {
  // source MDN docs
  return Math.floor(Math.random()*(max-min+1)+min);
}

//function to sum an array
function sumArray(array){
  let n = 0;
  for (let i = 0; i<array.length; i++){
    n += array[i];
  }
  return n;
}

//function to iterate through objects and run methods
function runObjectMethods(arrayStore){
  for (let j = 0; j <arrayStore.length; j++){
    arrayStore[j].mthCstCksHr();
    arrayStore[j].mthCstCksDy();
  }
}

//function to calculate total cookies per hour 
function hourTotals(arrayStoreHours,arrayStore){
  arrayStoreTotals.push('Total');
  for (let i = 0; i<arrayStoreHours.length+1; i++){
    let n = 0;
    for (let j = 0; j <arrayStore.length; j++){
      n += arrayStore[j].arrCksTtl[i];
    }
    arrayStoreTotals.push(n);
  }
}

//table header function
function tableHeader(array) {

  //make row
  let rowElement = document.createElement('tr');
  storeTable.appendChild(rowElement);

  //blank cell
  let cellElementFirst = document.createElement('th');
  rowElement.appendChild(cellElementFirst);

  //hour cells
  for (let i = 0; i<array.length; i++){
    let cellElement = document.createElement('th');
    cellElement.innerText= `${array[i]}`;
    rowElement.appendChild(cellElement);
  }

  //blank cell
  let cellElementLast = document.createElement('th');
  cellElementLast.innerText = 'Daily Location Total';
  rowElement.appendChild(cellElementLast);
}


//table footer function
function tableFooter(array) {

  //make row
  let rowElement = document.createElement('tr');
  storeTable.appendChild(rowElement);

  //cells
  for (let i = 0; i<array.length; i++){
    let cellElement = document.createElement('td');
    cellElement.innerText= `${array[i]}`;
    rowElement.appendChild(cellElement);
  }
}

//render whole table
function renderTable(arrayHr,arrayStore,arrayTtl){
  //render table header
  tableHeader(arrayHr);
  //render store numbers
  for (let i = 0; i<arrayStore.length; i++){
    arrayStore[i].renderRow();
  }
  //render table footer
  tableFooter(arrayTtl);
}


// event handler for form submission
function handlerSubmit(event){
  event.preventDefault();

  //gather information from form
  let newStoreNameFunc = event.target.newStoreName.value;
  let newMinCst = +event.target.newMinCst.value;
  let newMaxCst = +event.target.newMaxCst.value;
  let newAveCksPerCst = +event.target.newAveCksPerCst.value;

  //make new store object, run methods, add to object array
  let storeNew = new SalmonCookieConstructor(newStoreNameFunc,newMinCst,newMaxCst,newAveCksPerCst);
  storeNew.mthCstCksHr();
  storeNew.mthCstCksDy();
  arrayStoreObject.push(storeNew);

  //make new store totals
  arrayStoreTotals = [];
  hourTotals(arrayStoreHours,arrayStoreObject);

  //remove row, add new store, add new totals
  storeTable.deleteRow(-1);
  storeNew.renderRow();
  tableFooter(arrayStoreTotals);

  //reset form
  newStoreForm.reset();
}


//checking for store duplicate
function checkForStoreDuplicate(){
  let warning = 'New stores must have unique names.';
  for (let i=0; i<arrayStoreObject.length; i++){
    if(newStoreName.value.toLowerCase()===arrayStoreObject[i].name.toLowerCase()){
      newStoreName.value="";
      newStoreName.placeholder=warning;
    }
  }
}


// ########## CONSTRUCTOR OBJECTS ##########
function SalmonCookieConstructor(name,minCstHr,maxCstHr,avrCksCst, ttlCstDy=0, ttlCksDy=0, arrStrHr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']){
  this.name = name;
  this.minCstHr = minCstHr;
  this.maxCstHr = maxCstHr;
  this.avrCksCst = avrCksCst;
  this.ttlCstDy = ttlCstDy;
  this.ttlCksDy = ttlCksDy;
  this.arrCstHr = [];
  this.arrCksHr = [];
  this.arrCksTtl = [];
  this.arrStrHr = arrStrHr;
}

//function to calculate...
SalmonCookieConstructor.prototype.mthCstCksHr = function(){
  for (let i = 0; i < this.arrStrHr.length; i++) {
    //custormers each hour
    this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
    //cookies each hour
    this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
  }
};

//function to calculate...
SalmonCookieConstructor.prototype.mthCstCksDy = function(){
  //sum total customers per day
  if (this.arrCstHr.length >0){
    this.ttlCstDy= sumArray(this.arrCstHr);
  } else {
    this.ttlCstDy=null;
  }
  //sum total cookies per day
  if (this.arrCstHr.length >0){
    this.ttlCksDy= sumArray(this.arrCksHr);
    this.arrCksTtl = Array.from(this.arrCksHr);
    this.arrCksTtl.push(this.ttlCksDy);
  } else {
    this.ttlCksDy=null;
  }
};

SalmonCookieConstructor.prototype.renderRow = function(){
  //make row
  let rowElement = document.createElement('tr');
  storeTable.appendChild(rowElement);

  //blank cell
  let cellElementFirst = document.createElement('td');
  cellElementFirst.innerText = `${this.name}`;
  rowElement.appendChild(cellElementFirst);

  //hour cells
  for (let i = 0; i<this.arrCksHr.length; i++){
    let cellElement = document.createElement('td');
    cellElement.innerText= `${this.arrCksHr[i]}`;
    rowElement.appendChild(cellElement);
  }

  //blank cell
  let cellElementLast = document.createElement('td');
  cellElementLast.innerText = `${this.ttlCksDy}`;
  rowElement.appendChild(cellElementLast);

};


// ########## EXECUTABLES ##########

//create all objects
let storeSeattle = new SalmonCookieConstructor('Seattle',23,65,6.3,0,0);
let storeTokyo = new SalmonCookieConstructor('Tokyo',3,24,1.2,0,0);
let storeDubai = new SalmonCookieConstructor('Dubai',11,38,3.7,0,0);
let storeParis = new SalmonCookieConstructor('Paris',20,38,2.3,0,0);
let storeLima = new SalmonCookieConstructor('Lima',2,16,4.6,0,0);

//make array of each object
let arrayStoreObject = [storeSeattle,storeTokyo,storeDubai,storeParis,storeLima];

//run methods to fill out object information
runObjectMethods(arrayStoreObject);

//calculate footer totals
hourTotals(arrayStoreHours,arrayStoreObject);

//render table
renderTable(arrayStoreHours,arrayStoreObject,arrayStoreTotals);





//add event handler to form
newStoreForm.addEventListener('submit',handlerSubmit);

newStoreName.addEventListener('input',checkForStoreDuplicate);




