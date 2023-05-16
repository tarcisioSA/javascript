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


//Genererics
function concatArray<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3])
const stgArray = concatArray<string[]>(["Tarcisio"], ["Vittor"])
console.log(numArray);
console.log(stgArray);
*/

//decorator
function apiVersion(version: string){
    return(target: any) => {
        Object.assign(target.prototype, { __version: version})
    }
}

function miniLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
        
    }

    

}
class Api{
    @miniLength(3)
    name:string;
    
    constructor(name: string){
        this.name = name;
    }
}

const api = new Api('oíoi')
console.log(api.name)




   


