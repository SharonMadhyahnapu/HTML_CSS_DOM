
const paraelement=document.getElementById("abc")
console.log(paraelement.id);
console.log(paraelement.innerText.length);

function change(){
    paraelement.innerText=paraelement.innerText==="sharon"?"aravind":"sharon"
}

const elements=document.querySelector(".abc.text");
console.log(elements.parentNode);

// const parent=document.querySelector("text")
// console.log(parent.nextElementSibling);
// console.log(parent.previousElementSibling);


// 1.getElementById
// 2.getElementsByClassName
// 3.querySelector
// 4.querySelectorAll
// 5.nextElementSibling
// nextElement