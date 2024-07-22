function createEle(eleobj){
    const ele= document.createElement(eleobj.tag);
    ele.innerText=eleobj.text;
    //ele.attribute=eleobj.attr;
    return ele;
}



const listElements=[
    {tag:"div",text:"this is js div",attr:""},
    {tag:"span",text:"this is js span",attr:""},
    {tag:"p",text:"this is js p",attr:""},
];

const createdElement=listElements.map(createEle);
document.getElementsByTagName("body")[0].append(...createdElement);

// console.log(createdElement);

// //creating child to div,span,p(same para tag for 3tags)
// createdElement.map((elee)=>{
//    let para= document.createElement("p");
//    para.innerText="this is para";
//    elee.appendChild(para)
// })
// // let p=document.createElement("p")
// // p.className="hsgsjh"

//creating child to div,span,p(diff tags for 3 diff tags)
const innerelement=[
    {tag:"div",text:"this is js inner div",attr:""},
    {tag:"span",text:"this is js inner span",attr:""},
    {tag:"p",text:"this is js inner p",attr:""},
];

innerelement.map((inobj,index)=>{
    let inside=createEle(inobj);
    createdElement[index].appendChild(inside);
})


//C:\Users\sharo\regnant_workspace\js_April\DOM\createElement(armorize)