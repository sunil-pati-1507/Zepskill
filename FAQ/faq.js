let expand1 = document.querySelector("#expand1");
let des1 = document.querySelector("#des1");
let isExpand1 = false;

expand1.addEventListener("click", (e) => {

    if(isExpand1 == false){
        expand1.innerHTML = "&minus;";
        des1.style.height = "auto";
        des1.style.visibility = "visible";
        isExpand1 = true;
    }
    else{
        expand1.innerHTML = "&plus;";
        des1.style.height = "0px";
        des1.style.visibility = "hidden";
        isExpand1 = false;
    }
})

let expand2 = document.querySelector("#expand2");
let des2 = document.querySelector("#des2");
let isExpand2 = false;

expand2.addEventListener("click", () => {

    if(isExpand2 == false){
        expand2.innerHTML = "&minus;";
        des2.style.height = "auto";
        des2.style.visibility = "visible";
        isExpand2 = true;
    }
    else{
        expand2.innerHTML = "&plus;";
        des2.style.height = "0px";
        des2.style.visibility = "hidden";
        isExpand2 = false;
    }
})