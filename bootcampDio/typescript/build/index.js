"use strict";
/*
class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

//SUBCLASS
class Magician extends Character{
    magicPoints: number;
    constructor(
        name: string,
        stregth: number,
        skill: number,
        magicPoints: number)
        
        //CHAMANDO SUPERCLASS
        {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }

}


const p1 = new Character('Tarcisio', 10, 10)
const p2 = new Magician('Mago', 10, 10, 100)
console.log(p2)
console.log(p1)
p1.attack();
*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Tarcisio"], ["Vittor"]);
console.log(numArray);
console.log(stgArray);
