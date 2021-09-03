
let myLeads = [];
let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
console.log(ulEl);


buttonEl.addEventListener("click", function() {
    
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();

});

function renderLeads(){
let listItems = "";

for( let i = 0; i<myLeads.length ; i++){
   //listItems += "<li><a target = '_blank' href = ' " + myLeads[i] + " '>" + myLeads[i] + "</a></li>" ;

   //using backticks
   listItems += `
                <li>
                    <a target = '_blank' href = '${myLeads[i]}'> 
                    ${myLeads[i]} </a>
                </li>` ; 

    /*const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);*/
    
}

ulEl.innerHTML = listItems;
}

