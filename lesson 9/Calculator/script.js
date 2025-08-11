
let calculation = (localStorage.getItem('calculation')) || ''
displayCalculation()

function updateCalculation(value){

    if(value === '='){
        calculation = eval(calculation)
    }else if(value === 'clear'){
        calculation = ''
        localStorage.removeItem('calculation')
    }
    else if(value === 'back'){
        let newNumber = ''

        for(let i = 0; i < calculation.length-1; i++){
            newNumber += calculation[i]
        }
        calculation = newNumber 
        displayCalculation()
    }
    else{
        calculation += value
    }

    localStorage.setItem('calculation',calculation)

    displayCalculation()
}

function displayCalculation(){
    document.querySelector('.js-result').innerHTML = calculation
}