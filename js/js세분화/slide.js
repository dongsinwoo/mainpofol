// 슬라이드
const projectAll = document.querySelector(".pc-slide")
const projectSlide = document.querySelector(".pc-mask");
const projectItems = document.querySelectorAll(".pc-item");
const arrow = document.querySelector(".pc-arrow");

// 슬라이드 헤드
const webSite = document.querySelector(".pc-website");
const front = document.querySelector(".pc-mini");
const app = document.querySelector(".pc-app");

// 슬라이드 전체 횟수
const page = document.querySelector(".pc-page");

// m-슬라이드
const MprojectAll = document.querySelector(".m-slide");
const MprojectSlide = document.querySelector(".m-mask");
const MprojectItems = document.querySelectorAll(".m-item");
const Marrow = document.querySelector(".m-arrow");

// m-슬라이드 헤드
const MwebSite = document.querySelector(".m-website");
const Mfront = document.querySelector(".m-mini");
const Mapp = document.querySelector(".m-app");

// m-슬라이드 전체 횟수
const Mpage = document.querySelector(".m-page");

const ww = window.innerWidth;


// 슬라이드 크기  + 움직이는 값
let margin = 100;
let itemWidth = projectItems[0].clientWidth + margin;


// 슬라이드 메인 카운트/트렌슬레이트
let projectCount = 0; //슬라이드 번호
let translate = 0; //슬라이드 위치값

let pagesCount = projectItems.length;
let pageCount =  1;


// m-슬라이드 크기  + 움직이는 값
let Mmargin = 100;
let MitemWidth = MprojectItems[0].clientWidth + margin;


// 슬라이드 메인 카운트/트렌슬레이트
let MprojectCount = 0; //슬라이드 번호
let Mtranslate = 0; //슬라이드 위치값

let MpagesCount = MprojectItems.length;
let MpageCount =  1;

const slide = (e)=>{
  // 슬라이드 메인
  
  e.preventDefault();
  console.log(projectCount)
  if(e.target.className === "right"){
    if(projectCount !== (projectItems.length/2)-1){
      translate -= itemWidth;
      projectSlide.style.transform = `translateX(${translate*2}px)`
      projectCount +=1;
      pageCount+=1;
    }
  }else if(e.target.className === "left"){
    if(projectCount !== 0){
      translate += itemWidth;
      projectSlide.style.transform= `translateX(${translate*2}px)`;
      projectCount -=1;
      pageCount-=1;
    }
  } 

  // 슬라이드 헤드 텍스트 바꿔주기
  if(projectCount===0){
    webSite.style.display = "block";
    front.style.display = "none";
    app.style.display = "none";
  }else if(projectCount === 1){
    webSite.style.display = "none";
    front.style.display = "block";
    app.style.display = "none";
  }else if(projectCount === 2){
    webSite.style.display = "none";
    front.style.display = "none";
    app.style.display = "block";
  }

  page.textContent = `${pageCount} / ${pagesCount/2}`
}

const mSlide= (e)=>{
  e.preventDefault()
  console.log(MprojectCount);
  if(e.target.className === "right"){
    if(MprojectCount !== MprojectItems.length-1){
      Mtranslate -= MitemWidth;
      MprojectSlide.style.transform = `translateX(${Mtranslate}px)`
      MprojectCount +=1;
      MpageCount+=1;
    }
  }else if(e.target.className === "left"){
    if(MprojectCount !== 0){
      Mtranslate += MitemWidth;
      MprojectSlide.style.transform= `translateX(${Mtranslate}px)`;
      MprojectCount -=1;
      MpageCount-=1;
    }
  } 

  // 슬라이드 헤드 텍스트 바꿔주기
  if(MprojectCount===0 || MprojectCount===1 ){
    MwebSite.style.display = "block";
    Mfront.style.display = "none";
    Mapp.style.display = "none";
  }else if(MprojectCount === 2 || MprojectCount == 3 ){
    MwebSite.style.display = "none";
    Mfront.style.display = "block";
    Mapp.style.display = "none";
  }else if(MprojectCount === 4 || MprojectCount === 5){
    MwebSite.style.display = "none";
    Mfront.style.display = "none";
    Mapp.style.display = "block";
  }

  Mpage.textContent = `${MpageCount} / ${MpagesCount}`
}

page.textContent = `${pageCount} / ${pagesCount/2}`
Mpage.textContent = `${MpageCount} / ${MpagesCount}`
arrow.addEventListener("click",slide);
Marrow.addEventListener("click",mSlide);
window.addEventListener("resize",()=>{
  itemWidth = projectItems[0].clientWidth +margin;
  projectCount = 0; //슬라이드 번호
  translate = 0; //슬라이드 위치값
  pageCount = 1;
  projectSlide.style.transform = `translateX(${translate*2}px)`
  page.textContent = `${pageCount} / ${pagesCount/2}`

  MitemWidth = MprojectItems[0].clientWidth+Mmargin;
  MprojectCount = 0; //슬라이드 번호
  Mtranslate = 0; //슬라이드 위치값
  MpageCount = 1;
  MprojectSlide.style.transform= `translateX(${Mtranslate}px)`;
  Mpage.textContent = `${MpageCount} / ${MpagesCount}`
});

AOS.init();