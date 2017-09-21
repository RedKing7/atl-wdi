console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi{
   constructor(name, creatureType){
      this.name = name;
      this.creatureType = creatureType;
      this.foodInTummy = 10;
      this.restedness = 10;
      this.health = 10;
   }

   cry(){
      this.foodInTummy -= 1;
      console.log(this.name, 'WAHH!!');
   }
   puke(){
      this.foodInTummy -= 1;
      console.log('*bleech*');
      console.log('food in tummy: ' + this.foodInTummy, '*sob*');
   }
   yawn(){
      this.restedness -= 1;
      console.log('Yaaawn');
      console.log(`${this.name} has current restedness of: ${this.restedness}`);
   }

   start(){
      console.log(`${this.name} is starting`);
      let self = this;
      this.hungerTimer = setInterval(function(){
         self.cry();
      }, 6000);
      this.yawnTimer = setInterval(function(){
         self.yawn();
      }, 10000);
      this.sickTimer = setInterval(function(){
         self.puke();
      }, 20000);
   }
   stop(){
      console.log(`${this.name} is stopping`);
      clearInterval(this.hungerTimer);
      clearInterval(this.yawnTimer);
      clearInterval(this.sickTimer);
   }
}

//create new Tamagotchis
let t1 = new Tamagotchi('Tom', 'cat');
let t2 = new Tamagotchi('Jerry', 'mouse');

let t3 = new Tamagotchi('Steve', 'rock');
let t4 = new Tamagotchi('Doug', 'dog');

//test out your Tamagotchies below via console.logs
//t1.cry();
//t2.cry();

//t3.puke();
//t4.yawn();