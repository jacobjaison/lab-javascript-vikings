// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return (this.strength);
  }
  receiveDamage(damage) {
    this.health -= damage;

  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
    
  }
  receiveDamage(damage){
    this.health -= damage;

    if (this.health > 0) {
      return (`${this.name} has received ${damage} points of damage`)
    }
    else {
      return (`${this.name} has died in act of combat`)
    }
  }
  battleCry () {
    return ("Odin Owns You All!")
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health,strength){
    super(health,strength);
  }
  receiveDamage(damage){
    this.health -= damage;

    if (this.health > 0){
      return (`A Saxon has received ${damage} points of damage`)
    }
    else {
      return (`A Saxon has died in combat`);
    }
  }

}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingArmy){
    this.vikingArmy.push(vikingArmy);

  }
  addSaxon(saxonArmy){
    this.saxonArmy.push(saxonArmy);

  }
  vikingAttack(){
    varSaxonArmy = math.floor(math.random() * this.saxonArmy.length);
    varVikingArmy = math.floor(math.random() * this.vikingArmy.length);
    varReturn = this.saxonArmy[varSaxonArmy].receiveDamage(this.vikingArmy[varVikingArmy].strength);
    if (this.saxonArmy[varSaxonArmy].health <= 0) {
      this.saxonArmy.splice(varSaxonArmy);
    }
    return (varReturn);
  }
  saxonAttack(){
    varSaxonArmy = math.floor(math.random() * this.saxonArmy.length);
    varVikingArmy = math.floor(math.random() * this.vikingArmy.length);
    varReturn = this.vikingArmy[varVikingArmy].receiveDamage(this.saxonArmy[varSaxonArmy].strength);
    if (this.saxonArmy[varSaxonArmy].health <= 0) {
      this.saxonArmy.splice(varSaxonArmy);
    }
    return (varReturn);
  }
  showStatus(){

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
