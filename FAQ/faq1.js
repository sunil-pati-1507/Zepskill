let qnsList = document.querySelector("#qns-1");

qnsList.addEventListener("click", (e) => {
    let item = e.target;
    console.log("button clicked");
    const desItem = item.parentElement.lastElementChild;
    console.log(item);
    console.log(desItem);
    console.log(item.innerText === "+");
    
    if(item.innerText === "+"){
        // const desItem = item.parentElement.lastElementChild;
        desItem.style.height = "auto";
        desItem.style.visibility = "visible";
        item.innerText = "-";
    }

    else{
        // const desItem = item.parentElement.lastElementChild;
        desItem.style.height = "0px";
        desItem.style.visibility = "hidden";
        item.innerText = "+";
    }
})