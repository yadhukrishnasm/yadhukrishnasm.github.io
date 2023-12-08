const nameDiv = document.querySelector("#myName");
const image = document.getElementById('myPhoto');
console.log(window.innerWidth)
window.addEventListener('scroll',()=>{
    console.log(scrollY);
})


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth:true
// })

nameDiv.addEventListener('mousemove',(event)=>{

    let xandY = xY(event.clientX,event.clientY)
    console.log("x :"+xandY.resX+" y :"+xandY.resY)
    
    nameDiv.style["text-shadow"] = `${xandY.resX}px ${xandY.resY}px 1px #F8E9C3`;
})


function xY(x,y){
    let res={
        resX:null,
        resY:null
    };
    let widthCenter = (window.innerWidth)/2;
    let heightCenter = (window.innerHeight)/2;
    
        if(x != widthCenter && y!=heightCenter){
            res ={
                resX:(x-widthCenter)/10,
                resY:(y-heightCenter)/10,
            }
        }else{
            return res={
                resX:0,
                resY:0
      
            }
        }
        return res
    
}