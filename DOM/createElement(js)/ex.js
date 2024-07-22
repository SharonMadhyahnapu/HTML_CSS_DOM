
//  <div class="modal" id="modal">
    // <div class="modal-body"> 
    //      <input type="text">
    //     <input type="text">
    //     <input type="text">
    //     <button onclick="closemodal()">submit</button> 
//</div>

function openmodal(){
    const modal=document.createElement("div");
    modal.className="modal";
    const modalbody=document.createElement("div");
    modalbody.className="modal-body";
    const input=document.createElement("input");
    const input1=document.createElement("input");
    const button=document.createElement("button")
    button.innerText="submit";
    button.onclick=closemodal;
    modalbody.append(input,input1,button);
    modal.appendChild(modalbody);
    document.body.append(modal);
}

function closemodal(){
    const modal=document.getElementsByClassName("modal")[0];
    modal.style.display="none";
}