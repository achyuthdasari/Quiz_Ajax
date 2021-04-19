var para = document.getElementById("ques");
var btn = document.getElementById("next"); 
// console.log(optns)
var qno=1
var start=0
var scorecnt=0
btn.addEventListener("click",function(){
    if (start!=0){
        var radbtns = document.querySelectorAll("rad");
        for (var rd of radbtns){
            rd.style.disable="Always"
        }
    }
    document.getElementById("next").innerHTML="Next"

    if (start==0){
        document.querySelector("#details").remove()
        var strin1 ="<button id=prev>Prev</button> <button id=next>Next</button>";
        // document.getElementById("buttons").appendChild("<button id=prev>Prev</button>")
        start+=1
        var strin="<input class='rad' id=answer  name=grp type=radio ><text class= option> </text> </input><br><br><input class='rad' id=q1_opt2  name=grp type=radio ><text class= option> </text></input><br><br><input class='rad' id=q1_opt3  name=grp type=radio ><text class= option> </text></input> <br><br><br>"
        document.getElementById("cont").innerHTML=strin
    }
    if (qno==5)
        document.getElementById("next").innerHTML="Submit"
    if (qno==6){  
        document.getElementById("ques").innerHTML=""   
        document.getElementById("cont").innerHTML="" 
        document.getElementById("next").remove();
        document.getElementById("result").innerHTML="<h2 style='color:azure'>You have successfully completed the quiz</h2><h2> Your score is </h2><p id=result>"+ scorecnt+"</p>"
    }
    

    var myrequest = new XMLHttpRequest();
    myrequest.open('GET','https://achyuthdasari.github.io/Quiz_Ajax/Questions.json')
    myrequest.onload = function(){
        var data = JSON.parse(myrequest.responseText);
        // console.log(data)
        // console.log("Hello")
        console.log(qno);
        addhtml(data[qno-1])
        qno++;
    };
    myrequest.send();   
})

function addhtml(dat){
    var optns = document.querySelectorAll("text")
    var quest = qno +"."+ dat.Question
    para.innerhtml= dat.Question
    var i=0
    for (var opt of optns){
        opt.innerHTML=dat.options[i];
        // opt.insertAdjacentHTML('beforeend',dat.options[i]);
        i++;
    }
    para.innerHTML=quest;
    score(dat);
    // para.insertAdjacentHTML('beforeend',quest)

}


function score(data){
    var buttons = document.querySelectorAll("input");
    var texts = document.querySelectorAll("text");
    var cn=0;
    console.log(buttons)
    for(var butn of buttons){
        console.log(data.answer);
        console.log(texts[cn].innerHTML);

        console.log(texts[cn].innerhtml == data.answer);
        if (String(texts[cn].innerhtml) === String(data.answer) && butn.checked==true ){
            // console.log("exec");
            scorecnt++;
            // localStorage.setItem(document.title,"correct")
            console.log(scorecnt)
            console.log("=======")
            // document.getElementById("result").innerHTML = (localStorage.length - 2);
        }
        cn++
    }   
}


