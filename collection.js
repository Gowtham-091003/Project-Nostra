var searchbar=document.getElementById("searchbar")
var collectionslist=document.querySelectorAll(".collections__sec2__img")

searchbar.addEventListener("keyup", ()=> {
    searchbartext=event.target.value.toUpperCase()
    for(i=0;i<collectionslist.length;i=i+1) {
        if(collectionslist[i].textContent.toUpperCase().includes(searchbartext) == true) {
            collectionslist[i].style.display="flex"
        }
        else {
            collectionslist[i].style.display="none"
        }

    }
})
var checkbox=document.querySelectorAll(".check")

for(let count=0;count<checkbox.length;count=count+1){
    checkbox[count].addEventListener("click",()=> {
        checkboxtext=event.target.value.toUpperCase()
        
        for(let i=0;i<checkbox.length;i=i+1) {
            if(checkbox[count].checked) {
                if(collectionslist[i].textContent.toUpperCase().includes(checkboxtext) == true) {
                   collectionslist[i].style.display="flex" 
                }
                else {
                    collectionslist[i].style.display="none"
                }
            }
            else{
                collectionslist[i].style.display="flex"
            }
        }
    })}

