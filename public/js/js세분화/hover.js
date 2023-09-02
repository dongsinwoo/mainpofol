// const html = document.querySelector(".html");
// const css = document.querySelector(".css");
// const js = document.querySelector(".js");
// const react = document.querySelector(".react");
// const node = document.querySelector(".node");
const skills = document.querySelectorAll(".ski");
const skills2 = document.querySelectorAll(".ski2");
let s1Count = 0;
let s2Count = 0;
skills.forEach((skill) => {
  skill.addEventListener("mouseover",()=>{
    const set = setInterval(()=>{
      s1Count+=1
      skill.innerHTML =`${s1Count}%`
      if(s1Count >=80){
        s1Count = 0;
        clearInterval(set)
      }
    },10)
  })
});

skills2.forEach((skill) => {
  skill.addEventListener("mouseover",()=>{
    const set = setInterval(()=>{
      s2Count +=1
      skill.innerHTML =`${s2Count}%`
      if(s2Count>=50){
        s2Count = 0;
        clearInterval(set)
      }
    },15)
  })
});



