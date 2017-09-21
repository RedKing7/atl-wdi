console.log('tamagotchi file is loaded');

//your class declaration here
var tamagotchi = function(name, creatureType){
   this.name = name;
   this.creatureType = creatureType;
   this.foodInTummy = 10;
   this.restedness = 10;
   this.health = 10;
};

tamagotchi.prototype.cry = function(){
   this.foodInTummy -= 1;
   console.log(this.name, 'WAHH!!');
};

tamagotchi.prototype.puke = function(){
   this.foodInTummy -= 1;
   console.log('food in tummy: ' + this.foodInTummy, '*sob*');
};

tamagotchi.prototype.yawn = function(){
   this.restedness -= 1;
   console.log(`${this.name} has current restedness of: ${this.restedness}`);
};

//create new Tamagotchis
let t1 = new tamagotchi('Tom', 'cat');
let t2 = new tamagotchi('Jerry', 'mouse');

let t3 = new tamagotchi('Steve', 'rock');
let t4 = new tamagotchi('Doug', 'dog');

//test out your Tamagotchies below via console.logs
t1.cry();
t2.cry();

t3.puke();
t4.yawn();
