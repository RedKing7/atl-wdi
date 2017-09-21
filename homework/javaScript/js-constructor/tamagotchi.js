console.log('tamagotchi file is loaded');

//your class declaration here
var tamagotchi = function(){
   this.foodInTummy = 10;
   this.restedness = 10;
   this.health = 10;
};

tamagotchi.prototype.cry = function(){
   this.foodInTummy -= 1;
   console.log('WAHH!!');
};

//create new Tamagotchis
let t1 = new tamagotchi();
let t2 = new tamagotchi();

//test out your Tamagotchies below via console.logs
t1.cry();
t2.cry();