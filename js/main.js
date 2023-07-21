var submitBtn = document.getElementById("submitBtn");
var userInput = document.getElementById("userInput");
var homeContent = document.getElementById("homeContent");

var items =[];

submitBtn.addEventListener('click', function(){
    items.push(userInput.value)
    // 
    displayItems()
})


function displayItems(){


    var container="";

    for(var i=0 ; i<items.length; i++){
        container+=`
        <div class="home-item mb-2 px-3  text-dark mx-auto w-25 bg-white d-flex justify-content-between align-items-center">
        <p id="x">${items[i]}</p>
        <i class=" fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})" ></i>
    </div>`
    }


    homeContent.innerHTML= container;
}
function deleteItem(index){
    // console.log("Hello");
    items.splice(index, 1)
    displayItems()

}