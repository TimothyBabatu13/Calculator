function calculatorButton(){
    let button = document.getElementsByClassName("number");
    let answerScreen = document.getElementById("answer-screen");
    let inputScreen = document.getElementById("input-screen");

    for(let i in button){
        button[i].onclick = function(){
            let k = button[i].innerHTML;
            inputScreen.innerText+= k;

            if(inputScreen.innerText.length >= 20){
                inputScreen.style.overflowX = "scroll";
            }
            else{
                inputScreen.style.overflowX = "hidden";
            }
        }
    }
    
    //Delete button
    button[button.length - 4].onclick = function(){
        let k = inputScreen.innerHTML.slice(0, (inputScreen.innerHTML.length - 1));
        inputScreen.innerText = k;
    }

    //equals to button
    button[button.length - 1].onclick = function(){
        if(answerScreen.innerText.length > 6){
            answerScreen.style.overflowX = "scroll";
        }
        else{
            answerScreen.style.overflowX = "hidden";
        }

        let k = eval(inputScreen.innerHTML);
        answerScreen.innerText = k;
        return inputScreen.innerHTML = "";
    }

    //clear button
    button[0].onclick = function(){
        inputScreen.style.overflowX = "hidden";
        
        return inputScreen.innerHTML = ""; 
    }

    //multiplication button
    button[3].onclick = function(){
        let k = "*";
        inputScreen.innerHTML+= k;
    }


};

function Toggle(){
    let button = document.querySelectorAll("img");
    let container = document.getElementById("container");
    let p = document.getElementsByClassName("number");

    /*
    other, other1, other2
    are only used to access the button in HTML 
    */
    let other = document.getElementById("other");
    let other1 = document.getElementById("other1");
    let other2 = document.getElementById("other2");

    button[0].onclick = function(){
        this.classList.toggle("x");
    }
    button[1].onclick = function(){
        
        container.classList.toggle("container-white");
        
        other.classList.toggle("img-night");
        other1.classList.toggle("img-night");
        other2.classList.toggle("img-night");

        for(let i in p){
            p[i].classList.toggle("number-black");
        }
    }

}
function main(){
    calculatorButton();
    Toggle();
}
main();