var today=new Date();            
document.getElementById("write").innerHTML=today;
showtask();
let addtaskinput=document.getElementById("addtaskinput");
let addtaskbtn=document.getElementById("addtaskbtn");
addtaskbtn.addEventListener("click",function(){
  addtaskinputval=addtaskinput.value;
  if(addtaskinputval.trim()==0){
    alert("Enter your task and then click on Add button");
  }
  else{
  let webtask=localStorage.getItem("localtask");
  if(webtask==null)
   taskObj=[];
  else{
    taskObj=JSON.parse(webtask);
  }
  taskObj.push(addtaskinputval);
  localStorage.setItem("localtask",JSON.stringify(taskObj));
  addtaskinput.value='';
}
  showtask();
})

function showtask(){
  let webtask=localStorage.getItem("localtask");
  if(webtask==null){
    taskObj=[];
  }
  else{
    taskObj=JSON.parse(webtask);
  }
  let html='';
  let addedtasklist=document.getElementById("addedtasklist");
  taskObj.forEach((item,index) => {
       html += `<tr class="aligntable">
                   <th scope="row">${index+1}</th>
                   <td class="align">${item}</td>
                   <td><button type="button" onclick="deleteitem(${index})" class="btn">delete</button></td>
                </tr>`;

  })
  addedtasklist.innerHTML=html;
}

// function edittask(index){
//   let addtaskbtn=document.getElementById("addtaskbtn");
//   let savetaskbtn=document.getElementById("savetaskbtn");
//   let saveindex=document.getElementById("saveindex");
//   saveindex.value=index;
//   let webtask=localStorage.getItem("localtask");
//   let taskObj=JSON.parse(webtask);
//   addtaskinput.value=taskObj[index];
//   addtaskbtn.style.display="none";
//   savetaskbtn.style.display="block";
// }


// let savetaskbtn=document.getElementById("savetaskbtn");
// savetaskbtn.addEventListener("click",function(){
//   let addtaskbtn=document.getElementById("addtaskbtn");
//   let webtask=localStorage.getItem("localtask");
//   let taskObj=JSON.parse(webtask);
//   let saveindex=document.getElementById("saveindex").value;
//   taskObj[saveindex]=addtaskinput.value;
//   savetaskbtn.style.display="none";
//   addtaskbtn.style.display="block";
//   localStorage.setItem("localtask",JSON.stringify(taskObj));
//   addtaskinput.value='';
//   showtask();
// })

function deleteitem(index){
  let webtask=localStorage.getItem("localtask");
  let taskObj=JSON.parse(webtask);
  taskObj.splice(index,1);
  localStorage.setItem("localtask",JSON.stringify(taskObj));
  showtask();
}

let deleteallbtn=document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click",function(){
  let webtask=localStorage.getItem("localtask");
  let taskObj=JSON.parse(webtask);
  if(webtask==null){
    taskObj=[];
  }
  else{
    taskObj=JSON.parse(webtask);
    taskObj=[];
  }
  // savetaskbtn.style.display="none";
  // addtaskbtn.style.display="block";
  localStorage.setItem("localtask",JSON.stringify(taskObj));
  showtask();
})

let searchtextbox=document.getElementById("searchtextbox");
searchtextbox.addEventListener("input",function(){
  let trlist=document.querySelectorAll("tr");
  Array.from(trlist).forEach(function(item){
    let searchedtext=item.getElementsByTagName("td")[0].innerText;
    let searchtextboxval=searchtextbox.value;
    let re=new RegExp(searchtextboxval,'gi');
    if(searchedtext.match(re)){
      item.style.display="table-row";
    } 
    else{
      item.style.display="none";
    }
   })
})