console.log('hellooow')

let arrayFruits = ['laranja', 'maça', 'banana']; 

const arrayF2 = arrayFruits.map((fruta) =>{
    return fruta === 'laranja'  ? 'gosto' : 'não gosto'
})

console.log(arrayF2)



arrayFruits.forEach((fruta) => {
    console.log(fruta)
})