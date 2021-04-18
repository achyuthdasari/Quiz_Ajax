var para = document.getElementById("ques");
var optns = document.querySelectorAll("text")
var btn = document.getElementById("next"); 
console.log(optns)
var qno=1
var scorecnt=0
btn.addEventListener("click",function(){
    if (qno==5)
        document.getElementById("next").innerHTML="Submit"
    var myrequest = new XMLHttpRequest();
    myrequest.open('GET','https://achyuthdasari.github.io/Quiz_Ajax/Questions.json')
    myrequest.onload = function(){
        var data = JSON.parse(myrequest.responseText);
        // console.log(data)
        // console.log("Hello")
        addhtml(data[qno-1])
        qno++;
    };
myrequest.send();   
})

function addhtml(dat){
    var quest = qno +"."+ dat.Question
    para.innerhtml= dat.Question
    var i=0
    for (var opt of optns){
        opt.innerHTML=dat.options[i];
        // opt.insertAdjacentHTML('beforeend',dat.options[i]);
        i++;
    }
    para.innerHTML=quest;
    score();
    // para.insertAdjacentHTML('beforeend',quest)

}


function score(){
    var buttons = document.querySelectorAll("input")
    console.log(buttons)
    for(var butn of buttons){
        console.log(butn.id)
        if (butn.id=="answer" && butn.checked==true){
            // console.log("exec");
            scorecnt++;
            // localStorage.setItem(document.title,"correct")
            console.log(scorecnt)
            console.log("=======")
            // document.getElementById("result").innerHTML = (localStorage.length - 2);
        }
    }   
}


