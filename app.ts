function test(x: number, y: number){
    return x + y
}
const result = test (1, 2)

console.log(result)

function mul (x: number, y: number):number{
    return x * y
}

function div(x: number, y: number):number{
    return x / y
}


function callfunction(funcs: ((a: number, b: number) => number)[], values: [number, number][]): number[]
{
 const results = [] as number[]
 for (let i = 0; i < funcs.length; i++){
    const args = values [i]
    const resul = funcs[i]!(args![0],args![1])
    results.push(resul)
 }
 return results
} 

console.log((callfunction ([mul,div], [[1,2],[4,5]])))

interface Person{
    name : string,
    age :number
    hello: () => void
}

const person: Person = {
    name : "Punam",
    age : 24,
    hello: function (){
        console.log(this.name + " says hi")
    }
}
console.log(person.name)
console.log(person.hello())


interface Employee extends Person{
    employeeId : number
}

interface Manager extends Employee,Person{
    employees: Person [],
    name: string, age : number
}

function getPerson(p: Person) : Person{
    return{
        name:"Tom",
    age: 23,
    hello: function (){
        console.log(this.name + " get lost")
    }
    }

}
const per= getPerson({
    name: "A",
    age: 20,
    hello() {}
})

per.hello()

abstract class Animal{
    abstract makesound(direction:number) : void
    move(direction:number){
        console.log("Moving along.....")
        this.makesound(direction)
    }
}
class Dog extends Animal{
    makesound(direction:number) {
    console.log("Wolf Wolf")

    }

}
const dog = new Dog()
dog.move(10)

class Cat extends Animal{
    makesound(direction:number) {
    console.log("Meow Meow")

    } 
}

const cat = new Cat ()
cat.move(10) 