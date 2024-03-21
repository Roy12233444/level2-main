var arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1649812336132-4deafef3f62e?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    image:
      "https://images.unsplash.com/photo-1519295918781-d590afd8e95d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    image:
      "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Orange peeled",
    image:
      "https://images.unsplash.com/photo-1643996322171-7a94b7acc9a7?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Web Design",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "apple juice",
    image:
      "https://images.unsplash.com/photo-1575159240102-4331f59433ac?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

// var clutter = "";
function showTheCards(){

    var clutter = "";
    arr.forEach(function(obj){
        clutter += ` <div class="box"> 
                        <img class="cursor-pointer" src="${obj.image}" alt="">
                        <div class="caption">Lorem ipsum</div>
                    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    
    var input = document.querySelector("#searchinput");

    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    });

    input.addEventListener("blur", function () {
         document.querySelector(".overlay").style.display = "none";
       });
    
    input.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`;
        })
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
    
}

handleSearchFunctionality();
showTheCards();