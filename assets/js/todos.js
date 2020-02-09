//Global variables
let li = document.getElementsByTagName("li");
let trash = document.getElementsByTagName("span");
let newToDo = document.querySelector("input[type='text']");
 
// Check off specific Todos by clicking
function toggleComplete(target) {
    target.classList.toggle("completed");
};
 
 
//Click on <span> or <i> to delete todo
function deleteToDo(target) {
    if (target.nodeName == "SPAN") {
        target.parentNode.parentNode.removeChild(target.parentNode);
    } else {
        target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
    }
};
 
//Create new ToDo and add events to created <li> and <span>
newToDo.addEventListener("keypress", function (eventData) {
    if (eventData.keyCode === 13) {
        let ul = document.querySelector("ul");
        let newLi = document.createElement("li");
        newLi.innerHTML = "<span><i class='fa fa-trash'></i></span> " + newToDo.value;
        ul.appendChild(newLi);
        newLi.addEventListener("click", function (eventData) {
            toggleComplete(eventData.target);
        });
        let span = newLi.childNodes[0];
        span.addEventListener("click", function (eventData) {
            deleteToDo(eventData.target);
        });
        newToDo.value = "";
    };
});
 
//Add event listeners for pregenerated <li> elements
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function(eventData) {
        toggleComplete(eventData.target)
    });
};
 
//Add event listeners for prerenderer <span> elements
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function (eventData) {
        deleteToDo(eventData.target);
    });
};

