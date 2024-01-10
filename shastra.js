let menuIcon = document.getElementById("menu-icon");
let menuItem = document.getElementById("menu");

menuIcon.addEventListener("click", handleClick);
let flag = true;
function handleClick(){
    
    
    if(flag == true){
        menuIcon.setAttribute("class",'bx bx-x');
        menuItem.style.display="block";
        flag = false;
    }
    else{
        menuIcon.setAttribute("class",'bx bx-menu');
        menuItem.style.display="none";
        flag = true;
    }
    
}