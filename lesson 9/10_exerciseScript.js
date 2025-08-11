const btnElement = document.querySelector('.js-button')
console.log(btnElement.classList.contains('js-button')) // ANS 2

/*
function switching(btn){        // ANS 3 & 4
    if(btn.classList.contains('is-toggled')){
        btn.classList.remove('is-toggled')
    }else{
        btn.classList.add('is-toggled')
    }
}
    */


// ANS 6

let toggling = false
let activeBtn = null

function switching(btn){    // passing btn for toggling each btn on clicking . Otherwise only first btn is toggled
    
    if(!toggling){
        
        btn.classList.add('is-toggled')
        toggling = true  
        activeBtn = btn                
            
    }else{
        if(btn === activeBtn){
            btn.classList.remove('is-toggled')
            toggling = false
            activeBtn = null
        }
    }
}

