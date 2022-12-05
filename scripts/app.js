
'use strict';

// ########## GLOBAL VARIABLES ##########


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
let storeSeattle = {

  //end of day
  minCstHr: 23,
  maxCstHr: 65,
  avrCksCst: 6.3,
  ttlCstDy: 0,
  ttlCksDy: 0,

  //arrays each hour
  arrStrHr: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  arrCstHr: [],
  arrCksHr: [],

  //functions
  mthCstCksHr: function(){
    for (let i = 0; i < this.arrStrHr.length; i++) {
      //custormers each hour
      this.arrCstHr[i]=rndCstHr(this.minCstHr,this.maxCstHr);
      //cookies each hour
      this.arrCksHr[i]=Math.floor(this.arrCstHr[i]*this.avrCksCst);
    }
  },
  mthCstCksDy: function(){
    if (this.arrCstHr.length >0){
      this.ttlCstDy= sumArray(this.arrCstHr);
    } else {
      this.ttlCstDy=null;
    }
  },
};


// ########## EXECUTABLE ###########

storeSeattle.mthCstCksHr();
storeSeattle.mthCstCksDy();
console.log(storeSeattle.arrCstHr);
console.log(storeSeattle.arrCksHr);
console.log(storeSeattle.ttlCstDy);
