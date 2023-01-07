let value = 0;
//increase btn
let label = document.getElementById("label");
const increase = document.getElementById("increase");

increase.addEventListener("click", function increase() {

    value++
    if (value < 10) {
        document.getElementById("label").innerHTML = value;

    } else {
        document.getElementById("label").innerHTML = "Yêu bé <3";
    }

});

//decrease btn
const decrease = document.getElementById("decrease");
decrease.addEventListener("click", function decrease() {
    value--
    if (value < 10) {
        document.getElementById("label").innerHTML = value;

    } else {
        document.getElementById("label").innerHTML = "Sao lại giảm tình yêu của anh dành cho em rồi :( "
    }
});
//reset button
const reset = document.getElementById("reset");
reset.addEventListener("click", function reset() {
    value = 0;
    document.getElementById("label").innerHTML = value;
});

// prompt("Đây có phải là hiền không nếu đúng thì ghi có còn không phải thì out");
// if(prompt.value ==="co" ){

// }

// function display(){
//     if (value==10){
//         document.querySelector("#label2").style.backgroundImage = url("https://www.facebook.com/messenger_media/?attachment_id=882067376368975&message_id=mid.%24cAABa97sEPgCLpIyG3WFc0c78VBAS&thread_id=100020041039360");
//     }
// }ì

setTimeout(function() {
    alert("A yêu em rất nhiều á hiền ơi <3 ");
},10000);