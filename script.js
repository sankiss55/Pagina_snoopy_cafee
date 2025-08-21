  AOS.init();
function btn_menu()
{
  let menu=document.querySelector("nav ul");
  if(menu.classList.contains("show_menu")){
    menu.classList.remove("show_menu");
  }else{
    menu.classList.add("show_menu");
  }
}
