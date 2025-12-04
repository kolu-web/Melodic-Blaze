const scrollElement = document.querySelectorAll(".topage")
const observer= new IntersectionObserver ( ( entries)=>{
    entries.forEach((entry)=>{
if( entries.isIntersecting){
    console.log("here")
}
 })

},{})
scrollElement.forEach(el => observer.observe(el))