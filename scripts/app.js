
'use strict';

// ########## GLOBAL VARIABLES ##########
let citySection = document.getElementById('citySection');

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

// ########## OBJECT LITERALS ##########

// Seattle
let storeSeattle = {

  //end of day
  name: "Seattle",
  minCstHr: 23,
  maxCstHr: 65,
  avrCksCst: 6.3,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //function for
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },

  //function to sum 
  mthCstCksDy: function(){
    //sum total customers per day
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
    //sum total cookies per day
    if (this.arrCstHr.length >0){
      this.ttlCksDy= sumArray(this.arrCksHr);
    } else {
      this.ttlCksDy=null;
    }
  },

  //rendering to html
  render: function() {
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = this.name;
    citySection.appendChild(h2Ele);

    let ulEle = document.createElement('ul');
    citySection.appendChild(ulEle);

    for (let i = 0; i<this.arrCksHr.length; i++) {
      let liEle = document.createElement('li');
      liEle.innerText = `${this.arrStrHr[i]}: ${this.arrCksHr[i]} cookies`;
      ulEle.appendChild(liEle);
    }

    let liEle = document.createElement('li');
    liEle.innerText = `Total: ${this.ttlCksDy} cookies`;
    ulEle.appendChild(liEle);
  },
};



// Tokyo
let storeTokyo = {

  //end of day
  name: "Tokyo",
  minCstHr: 3,
  maxCstHr: 24,
  avrCksCst: 1.2,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //function for
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },

  //function to sum 
  mthCstCksDy: function(){
    //sum total customers per day
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
    //sum total cookies per day
    if (this.arrCstHr.length >0){
      this.ttlCksDy= sumArray(this.arrCksHr);
    } else {
      this.ttlCksDy=null;
    }
  },

  //rendering to html
  render: function() {
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = this.name;
    citySection.appendChild(h2Ele);

    let ulEle = document.createElement('ul');
    citySection.appendChild(ulEle);

    for (let i = 0; i<this.arrCksHr.length; i++) {
      let liEle = document.createElement('li');
      liEle.innerText = `${this.arrStrHr[i]}: ${this.arrCksHr[i]} cookies`;
      ulEle.appendChild(liEle);
    }

    let liEle = document.createElement('li');
    liEle.innerText = `Total: ${this.ttlCksDy} cookies`;
    ulEle.appendChild(liEle);
  },
};


// Dubai
let storeDubai = {

  //end of day
  name: "Dubai",
  minCstHr: 11,
  maxCstHr: 38,
  avrCksCst: 3.7,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //function for
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },

  //function to sum 
  mthCstCksDy: function(){
    //sum total customers per day
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
    //sum total cookies per day
    if (this.arrCstHr.length >0){
      this.ttlCksDy= sumArray(this.arrCksHr);
    } else {
      this.ttlCksDy=null;
    }
  },

  //rendering to html
  render: function() {
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = this.name;
    citySection.appendChild(h2Ele);

    let ulEle = document.createElement('ul');
    citySection.appendChild(ulEle);

    for (let i = 0; i<this.arrCksHr.length; i++) {
      let liEle = document.createElement('li');
      liEle.innerText = `${this.arrStrHr[i]}: ${this.arrCksHr[i]} cookies`;
      ulEle.appendChild(liEle);
    }

    let liEle = document.createElement('li');
    liEle.innerText = `Total: ${this.ttlCksDy} cookies`;
    ulEle.appendChild(liEle);
  },
};


// Paris
let storeParis = {

  //end of day
  name: "Paris",
  minCstHr: 20,
  maxCstHr: 38,
  avrCksCst: 2.3,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //function for
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },

  //function to sum 
  mthCstCksDy: function(){
    //sum total customers per day
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
    //sum total cookies per day
    if (this.arrCstHr.length >0){
      this.ttlCksDy= sumArray(this.arrCksHr);
    } else {
      this.ttlCksDy=null;
    }
  },

  //rendering to html
  render: function() {
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = this.name;
    citySection.appendChild(h2Ele);

    let ulEle = document.createElement('ul');
    citySection.appendChild(ulEle);

    for (let i = 0; i<this.arrCksHr.length; i++) {
      let liEle = document.createElement('li');
      liEle.innerText = `${this.arrStrHr[i]}: ${this.arrCksHr[i]} cookies`;
      ulEle.appendChild(liEle);
    }

    let liEle = document.createElement('li');
    liEle.innerText = `Total: ${this.ttlCksDy} cookies`;
    ulEle.appendChild(liEle);
  },
};

// Lima
let storeLima = {

  //end of day
  name: "Lima",
  minCstHr: 2,
  maxCstHr: 16,
  avrCksCst: 4.6,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //function for
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },

  //function to sum 
  mthCstCksDy: function(){
    //sum total customers per day
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
    //sum total cookies per day
    if (this.arrCstHr.length >0){
      this.ttlCksDy= sumArray(this.arrCksHr);
    } else {
      this.ttlCksDy=null;
    }
  },

  //rendering to html
  render: function() {
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = this.name;
    citySection.appendChild(h2Ele);

    let ulEle = document.createElement('ul');
    citySection.appendChild(ulEle);

    for (let i = 0; i<this.arrCksHr.length; i++) {
      let liEle = document.createElement('li');
      liEle.innerText = `${this.arrStrHr[i]}: ${this.arrCksHr[i]} cookies`;
      ulEle.appendChild(liEle);
    }

    let liEle = document.createElement('li');
    liEle.innerText = `Total: ${this.ttlCksDy} cookies`;
    ulEle.appendChild(liEle);
  },
};
// ########## EXECUTABLE ###########

storeSeattle.mthCstCksHr();
storeSeattle.mthCstCksDy();
storeSeattle.render();

storeTokyo.mthCstCksHr();
storeTokyo.mthCstCksDy();
storeTokyo.render();

storeDubai.mthCstCksHr();
storeDubai.mthCstCksDy();
storeDubai.render();

storeParis.mthCstCksHr();
storeParis.mthCstCksDy();
storeParis.render();

storeLima.mthCstCksHr();
storeLima.mthCstCksDy();
storeLima.render();