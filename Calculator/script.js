let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let ans = document.getElementById('ans');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if(string == '0' || string == 'x' || string == '÷' || string == '+' || string == '-' || string == '%'){
                ans.innerHTML = '0';
                return;
            }
            ans.innerHTML = eval(string.replace(/%/g, '/100').replace(/x/g, '*').replace(/÷/g, '/')).toFixed(9);
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})