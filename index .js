
let links=document.getElementsByClassName("nav-link");

for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",function () {
        for(let temp=0;temp<links.length;temp++){
            links[temp].classList.remove("active")
        }
        this.classList.add("active")
    })
}

// window.addEventListener("load",loadstop);

// function loadstop(){
//     document.getElementById("staticLoading").style.display="none";
// }




