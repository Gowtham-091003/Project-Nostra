let hero__images=document.getElementById("hero__images")
let btnleft=document.querySelector(".btnleft")
let btnright=document.querySelector(".btnright")

const imagelist=["pic1","pic2","pic3"]
let index=0;

btnleft.addEventListener("click",()=> {
    index=index-1
    if(index<0) {
        index=2
    }
    hero__images.style.backgroundImage = `url("./${imagelist[index]}.jpg")`;

})
btnright.addEventListener("click",()=> {
    index=index+1
    if (index==imagelist.length) {
            index=0
    }
    hero__images.style.backgroundImage = `url(".//images/${imagelist[index]}.jpg")`;

})
