const projectBoxx = document.querySelector(".project-box").offsetTop;
const project = document.querySelector(".project");
const slider = document.querySelector(".slider");
const s_wid = slider.offsetWidth;
const s_li = slider.children;
const innerBar = document.querySelector(".bar");

const loding = document.querySelector(".loding");
const projectClick = document.querySelector(".profect-click");

const bodyy = document.body;

let win_wid = window.innerWidth;

// wheel 이벤트 최대치
let s_move_max = (s_wid - (win_wid/1.2)) * -1

// 포지션값
let s_pos = 0;
let li_pos = 0;

// bar style수정
let pct = 0;

const moveSlider = (eDeltaY)=>{
  s_pos -= eDeltaY;
  if(s_pos < s_move_max){
    s_pos ===s_move_max;
    return ; 
  }else if(s_pos > 0){
    s_pos = 0;
    return ;
  }

  slider.style.transform = `translateX(${s_pos}px)`
  liUpdown(eDeltaY);
}

const liUpdown = (eDeltaY)=>{
  li_pos += eDeltaY;
  
  for(let i = 0; i < s_li.length; i++){
    if(i%2 !==0 ){
      if(s_pos ===0){
        li_pos = 0
        s_li[i].style.transform = ``;
      }else{
        s_li[i].style.transform = `translateY(${li_pos / (i*6)}px)`;
      }
    }else{
      if(s_pos ===0){
        li_pos = 0
        s_li[i].style.transform = ``;
      }else{
        s_li[i].style.transform = `translateY(${-li_pos / (i*6)}px)`;
      }
  }
  }
}

const onbar = () =>{
  pct = s_pos * 100 / s_move_max;
  innerBar.style.clipPath =`polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)`
}

project.addEventListener("wheel",(e)=>{
  // e.preventDefault;
  moveSlider(e.deltaY);
  onbar();
  console.log(li_pos);
});

window.addEventListener("wheel",(e)=>{
  if(e.deltaY < 0){
    body.classList.remove("stop-scroll");
  }
});

window.addEventListener("scroll",()=>{
  const wt = window.pageYOffset;
  if(projectBoxx<=wt){
    body.classList.add("stop-scroll");
    window.scrollTo({top:projectBoxx , behavior:"smooth"});
  }
});


projectClick.addEventListener("click",()=>{
  loding.style.right = "0"
  body.style.overflow= "hidden"
  setTimeout(()=>{
    loding.style.right = ""
    project.style.opacity = 1
    project.style.pointerEvents = "all"
  },3000);
});