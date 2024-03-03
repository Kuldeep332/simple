Shery.imageEffect("#back",{style:5,debug:true, gooey:true})
document.querySelectorAll(".elem").forEach(function(elem){
	var a=elem.querySelectorAll("h1")
var index=0;
var v=false;
document.querySelector("#main").addEventListener("click",function(){
	// alert()
if(!v){
	v=true
	gsap.to(a[index],{
		top:"-=100%",
		ease:Expo.easeInOut,
		duration:1,
		onComplete:function(){
			gsap.set(this._targets[0],{
				top:"100%"
			})
			v=false
		},

	})
	index==a.length-1?index=0:index++
	
	gsap.to(a[index],{
		top:"-=100%",
		ease:Expo.easeInOut,
		duration:1,})
}
})
})
function copy(){
	navigator.clipboard.writeText();
}
copy()

