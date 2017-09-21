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

//create new Tamagotchis
let t1 = new tamagotchi('Tom', 'cat');
let t2 = new tamagotchi('Jerry', 'mouse');

//test out your Tamagotchies below via console.logs
t1.cry();
t2.cry();