const circle=document.querySelector(".circle")
const page1=document.querySelector(".page1")

var t1=gsap.timeline()
t1.from(".loader .line h1",{
    y:60,
    stagger:0.5,
    opacity:0,
    delay:0.5,
    duration:0.6
})
t1.from(".loader .line-part1 h4",{
    opacity:0,
    onStart: function () {
        const counter=document.querySelector(".line-counter")
        var grow=0;
        setInterval(function () {
            if (grow < 100) {
              counter.innerText = grow++;
            } else {
              counter.innerText = grow;
              clearInterval();
            }
          }, 33);
        },
      });
t1.from(".loader .line3 h2",{
        y:50,
        opacity:0
    })
t1.to(".loader .line3 h2",{
    animationName:"anime",
})
t1.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
  });
t1.from(".page1",{
      delay:0.2,
      y:1600,
      opacity:0,
      duration:0.5,
      ease:Power4
  })
t1.to(".loader",{
    display:"none"
})
t1.from(".page1 .nav .nav-items,.menu-icon",{
  y:-100,
  opacity:0,
  duration:0.5,
  stagger:0.1
})
t1.from(".page1 .lines h2,.page1 .lines h3",{
  y:70,
  opacity:0,
  duration:0.5,
  stagger:0.1
})
page1.addEventListener("mousemove",(e)=>{
  circle.style.left=e.x+"px"
  circle.style.top=e.y+"px"
})