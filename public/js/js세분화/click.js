const loding = document.querySelector(".loding");
const projectClick = document.querySelector(".profect-click");

projectClick.addEventListener("click",()=>{
  loding.style.right = "0"
  setTimeout(()=>{
    loding.style.right = ""
  },3000);
});