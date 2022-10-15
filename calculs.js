let fivePercent = document.getElementById('five-percent')
let tenPercent = document.getElementById('ten-percent')
let fiveteenPercent = document.getElementById('fifteen-percent')
let twentyFivePercent = document.getElementById('twenty-five-percent')
let fiftyPercent = document.getElementById('fifty-percent')


fivePercent.addEventListener('click', function(){
    if (fivePercent.classList.contains("selected")){
        fivePercent.classList.remove("selected")
        fivePercent.classList.add("no-selected")
    }
    else{
        fivePercent.classList.add("selected")
        fivePercent.classList.remove("no-selected")

        tenPercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")

        fiveteenPercent.classList.remove("selected")
        fiveteenPercent.classList.add("no-selected")

        twentyFivePercent.classList.remove("selected")
        twentyFivePercent.classList.add("no-selected")

        fiftyPercent.classList.remove("selected")
        fiftyPercent.classList.add("no-selected")
    }
})



tenPercent.addEventListener('click', function(){
    if (tenPercent.classList.contains("selected")){
        tenPercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")
    }
    else{
        tenPercent.classList.add("selected")
        tenPercent.classList.remove("no-selected")

        fivePercent.classList.remove("selected")
        fivePercent.classList.add("no-selected")

        fiveteenPercent.classList.remove("selected")
        fiveteenPercent.classList.add("no-selected")

        twentyFivePercent.classList.remove("selected")
        twentyFivePercent.classList.add("no-selected")

        fiftyPercent.classList.remove("selected")
        fiftyPercent.classList.add("no-selected")
    }
})







fiveteenPercent.addEventListener('click', function(){
    if (fiveteenPercent.classList.contains("selected")){
        fiveteenPercent.classList.remove("selected")
        fiveteenPercent.classList.add("no-selected")
    }
    else{
        fiveteenPercent.classList.add("selected")
        fiveteenPercent.classList.remove("no-selected")

        tenPercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")

        fivePercent.classList.remove("selected")
        fivePercent.classList.add("no-selected")

        twentyFivePercent.classList.remove("selected")
        twentyFivePercent.classList.add("no-selected")

        fiftyPercent.classList.remove("selected")
        fiftyPercent.classList.add("no-selected")
        
    }
})






twentyFivePercent.addEventListener('click', function(){
    if (twentyFivePercent.classList.contains("selected")){
        twentyFivePercent.classList.remove("selected")
        twentyFivePercent.classList.add("no-selected")
    }
    else{
        twentyFivePercent.classList.add("selected")
        twentyFivePercent.classList.remove("no-selected")

        fivePercent.classList.remove("selected")
        fivePercent.classList.add("no-selected")

        tenPercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")

        fiveteenPercent.classList.remove("selected")
        fiveteenPercent.classList.add("no-selected")

        fiftyPercent.classList.remove("selected")
        fiftyPercent.classList.add("no-selected")

    }
})






fiftyPercent.addEventListener('click', function(){
    if (fiftyPercent.classList.contains("selected")){
        fiftyPercent.classList.remove("selected")
        fiftyPercent.classList.add("no-selected")
    }
    else{
        fiftyPercent.classList.add("selected")
        fiftyPercent.classList.remove("no-selected")

        tenPercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")

        fivePercent.classList.remove("selected")
        fivePercent.classList.add("no-selected")

        fiveteenPercent.classList.remove("selected")
        fiveteenPercent.classList.add("no-selected")

        twentyFivePercent.classList.remove("selected")
        tenPercent.classList.add("no-selected")

    }
})



document.getElementById('reset').addEventListener('click', function(){
    document.getElementById('input-bill').value=""
    document.getElementById('input-people').value=""

    
    fiftyPercent.classList.remove("selected")
    fiftyPercent.classList.add("no-selected")

    tenPercent.classList.remove("selected")
    tenPercent.classList.add("no-selected")

    fivePercent.classList.remove("selected")
    fivePercent.classList.add("no-selected")

    fiveteenPercent.classList.remove("selected")
    fiveteenPercent.classList.add("no-selected")

    twentyFivePercent.classList.remove("selected")
    tenPercent.classList.add("no-selected")
})






// ALL CALCULS

function calc()
{
    if(fivePercent.classList.contains("selected")){
    document.getElementById('tip-amount-per-person').value = (Math.round(100*((document.getElementById('input-bill').value * ((document.getElementById('five-percent').value)/100)) /document.getElementById('input-people').value)))/100
    document.getElementById('total-per-person').value = (Math.round(100*(((document.getElementById('input-bill').value) / (document.getElementById('input-people').value)) + ((document.getElementById('input-bill').value * ((document.getElementById('five-percent').value)/100)) /document.getElementById('input-people').value)))) /100
    }

    else if(tenPercent.classList.contains("selected")){
        document.getElementById('tip-amount-per-person').value = (Math.round(100*((document.getElementById('input-bill').value * ((document.getElementById('ten-percent').value)/100)) /document.getElementById('input-people').value)))/100 
        document.getElementById('total-per-person').value = (Math.round(100*(((document.getElementById('input-bill').value) / (document.getElementById('input-people').value)) + ((document.getElementById('input-bill').value * ((document.getElementById('ten-percent').value)/100)) /document.getElementById('input-people').value)))) /100
     }
    
    else if(fiveteenPercent.classList.contains("selected")){
        document.getElementById('tip-amount-per-person').value = (Math.round(100*((document.getElementById('input-bill').value * ((document.getElementById('fifteen-percent').value)/100)) /document.getElementById('input-people').value) ))/100 
        document.getElementById('total-per-person').value = (Math.round(100*(((document.getElementById('input-bill').value) / (document.getElementById('input-people').value)) + ((document.getElementById('input-bill').value * ((document.getElementById('fifteen-percent').value)/100)) /document.getElementById('input-people').value)))) /100
    }

    else if(twentyFivePercent.classList.contains("selected")){
        document.getElementById('tip-amount-per-person').value = (Math.round(100*((document.getElementById('input-bill').value * ((document.getElementById('twenty-five-percent').value)/100)) /document.getElementById('input-people').value) ))/100
        document.getElementById('total-per-person').value = (Math.round(100*(((document.getElementById('input-bill').value) / (document.getElementById('input-people').value)) + ((document.getElementById('input-bill').value * ((document.getElementById('twenty-five-percent').value)/100)) /document.getElementById('input-people').value)))) /100
    }

    else if(fiftyPercent.classList.contains("selected")){
        document.getElementById('tip-amount-per-person').value = (Math.round(100*((document.getElementById('input-bill').value * ((document.getElementById('fifty-percent').value)/100)) /document.getElementById('input-people').value) ))/100
        document.getElementById('total-per-person').value = (Math.round(100*(((document.getElementById('input-bill').value) / (document.getElementById('input-people').value)) + ((document.getElementById('input-bill').value * ((document.getElementById('fifty-percent').value)/100)) /document.getElementById('input-people').value)))) /100
    }




}


var nombre = 5.56845;
arrondi = nombre*100;          
arrondi = Math.round(arrondi); 
arrondi = arrondi/100;         
