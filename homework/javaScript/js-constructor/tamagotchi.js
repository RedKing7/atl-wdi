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
      console.log('food in tummy: ' + this.foodInTummy, '*sob*');
   }

   yawn(){
      this.restedness -= 1;
      console.log(`${this.name} has current restedness of: ${this.restedness}`);
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