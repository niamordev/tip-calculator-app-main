
// ALL PERCENTS

let fivePercent = document.getElementById('five-percent') // 5%
let tenPercent = document.getElementById('ten-percent') // 10%
let fiveteenPercent = document.getElementById('fifteen-percent') // 15%
let twentyFivePercent = document.getElementById('twenty-five-percent') // 25%
let fiftyPercent = document.getElementById('fifty-percent') // 50%




//  SELECTION OF % AND RESET ALL OTHERS %

//  SELECTION 5 %
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


//  SELECTION 10 %
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






//  SELECTION 15 %
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





//  SELECTION 25 %
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





//  SELECTION 50 %
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



//  RESET ALL INPUT WITH CLICK ON RESET BUTTON

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






//  CALCULS WITH EVERY POSSIBILTY OF % SELECTED


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
