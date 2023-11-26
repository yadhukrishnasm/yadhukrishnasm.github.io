const nameDiv = document.querySelector("#myName");
const image = document.getElementById('myPhoto');
document.addEventListener('scroll',()=>{
    if(scrollY*0.0001 > 0.2){
        nameDiv.setAttribute('sytle',`transform: scale(${scrollY*0.0001});`);
    }
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth:true
})