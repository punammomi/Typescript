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