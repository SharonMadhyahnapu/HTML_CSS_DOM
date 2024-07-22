function callme() {
    alert("you clicked the button")
}
const button = document.getElementById("btn");
button.addEventListener("click", callme);
button.addEventListener("click", () => {
    console.log("second click event");
})

button.addEventListener("mouseover", () => {
    console.log("you hover on btn");
})

const input = document.getElementsByTagName("input")[0];
input.addEventListener("focus",()=>{
    console.log("you focused");
})
input.addEventListener("blur",()=>{
    console.log("you unfocused");
})
input.addEventListener("change",()=>{
    console.log("input change");
})
input.addEventListener("keyup",(event)=>{       //featching data dynamically
    console.log(event.target.value);
})




let users = [
    "vipul",
    "ajmal",
    "saikumar",
    "aravind",
    "sandhya",
    "vikram"
]


const result=document.getElementById("results");

function search(searchstring){
     return users.filter((username)=>{
        return username.includes(searchstring)
     })
}

input.addEventListener("keyup",(event)=>{
const searchedvalue=event.target.value;
let filteredusers=search(searchedvalue);
result.innerText = " ";
for(let i=0; i<filteredusers.length;i++){
    const div=document.createElement("div");
    // div.appendChild(filteredusers)
    div.innerText = filteredusers[i];
     result.appendChild(div);
}
})

















// const result = document.getElementById("results");
// function search(searchstring) {
//     return users.filter((username) => {
//         return username.includes(searchstring)
//     })
// }

// input.addEventListener("keyup", (event) => {
//     const searchedvalue = event.target.value;
//     let filteredusers = search(searchedvalue);
//     result.innerText = " ";
//     for (let i = 0; i < filteredusers.length; i++) {
//         const div = document.createElement("div");
//         div.innerText = filteredusers[i];
//         result.appendChild(div);
//     }

// })



// let arr=[1,2,3,4,5,6,7,8,9]

// let res=arr.filter((ele)=>{
//     return (ele % 2)!=0
// })

// console.log();