{/* <div class="modal" id="modal">
    <div class="modal-body">
        <form>
            <span class="material-icons close" onclick="closemodal()">close</span>
            <p style="color: #182A4D; font-size: 20px;">Add Task</p>
            <input type="text" name="Taskname" placeholder="Task Name">
            <textarea type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
            <input type="text" placeholder="Asignee">

            <select name="status" >
                <option value="">TO DO</option>
                <option value="">IN PROGRESS</option>
                <option value="">COMPLETED</option>
            </select>
            <button type="submit">submit</button>
        </form>
    </div>
</div>  */}


const newmodal=document.createElement("div");
newmodal.id="modal";
newmodal.className="modal";
newmodal.innerHTML=`<div class="modal-body">
        <form>
            <span class="material-icons close" onclick="closemodal()">close</span>
            <p style="color: #182A4D; font-size: 20px;">Add Task</p>
            <input type="text" name="Taskname" placeholder="Task Name">
            <textarea type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
            <input type="text" placeholder="Asignee">

            <select name="status" >
                <option value="">TO DO</option>
                <option value="">IN PROGRESS</option>
                <option value="">COMPLETED</option>
            </select>
            <button type="submit">submit</button>
        </form>
    </div>`


//const modal=document.getElementsByClassName("modal")[0];
// or take id as modal and getElementById("modal")

function closemodal(){
    newmodal.remove();
    // modal.remove();
}






const createIssueButton=document.getElementById("create-issue")
const box=document.getElementsByClassName("box")[0];    //bug solved

createIssueButton.addEventListener("click",(e)=>{
// document.body.appendChild(modal);
document.body.appendChild(newmodal);

// div class="item">
//  <textarea cols="30" rows="3" style="resize: none;" ></textarea>
//     <select>
//         <option value="">ABC</option>
//         <OPtion value="">XYZ</OPtion>
//     </select>
// </div>

    // // e.target.remove();  //1:23:29(removing)

    // createIssueButton.remove(); //1:34:44
     
    // const itemContainer=document.createElement("div");
    // itemContainer.className="item";
    // itemContainer.innerHTML=`<textarea cols="30" rows="3" style="resize: none;" ></textarea>
    //  <select>
    //     <option value="">ABC</option>
    //      <OPtion value="">XYZ</OPtion>
    //  </select>`;
    // //  const box=e.target.parentNode;

    //  //focus on textarea
      
    //  box.appendChild(itemContainer);
    //  itemContainer.children[0].focus();
})

