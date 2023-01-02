let value =0;
//increase btn
let label =document.getElementById("label");
const increase = document.getElementById("increase");

    increase.addEventListener("click",function increase(){
       
        value++
        if(value<10){
        document.getElementById("label").innerHTML=value;
    }else {
        document.getElementById("label").innerHTML="Yêu bé <3";
    }

});

//decrease btn
const decrease = document.getElementById("decrease");
    decrease.addEventListener("click",function decrease(){
    value--
    if(value<10){
    document.getElementById("label").innerHTML=value;
    }else {
        document.getElementById("label").innerHTML="Sao lại giảm tình yêu của anh dành cho em rồi :( "
    }   
});
//reset button
const reset =document.getElementById("reset");
    reset.addEventListener("click",function reset(){
    value =0;
    document.getElementById("label").innerHTML=value;
});

