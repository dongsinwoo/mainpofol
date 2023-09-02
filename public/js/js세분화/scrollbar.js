window.onscroll = function() {
  myFunction()
};
   
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height1 = document.documentElement.scrollHeight; 
  let height2 = document.documentElement.clientHeight;
  let height = height1 - height2
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
}  

