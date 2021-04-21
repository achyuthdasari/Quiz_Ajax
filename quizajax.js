var para = document.getElementById("ques");
var btn = document.getElementById("next"); 
// console.log(optns)
var qno=1
var start=0
var scorecnt=0
// var id1="opn"
// var id2="opn"
// var id3="opn"

btn.addEventListener("click",function(){
    
    // console.log(document.getElementById("ques-area").innerHTML)
    score();
    uncheck();

    // var id1="opn1"
    // var id2="opn2"
    // var id3="opn3"

    document.getElementById("next").innerHTML="Next"
    // adddetails()

    var strin="<input class='rad' id= opn1 name=grp type=radio ><text class= option> </text> </input><br><br><input class='rad' id= opn2 name=grp type=radio ><text class= option> </text></input><br><br><input class='rad' id= opn3  name=grp type=radio ><text class= option> </text></input> <br><br><br>"
    document.getElementById("cont").innerHTML=strin

    if (start==0){
        adddetails()
        document.querySelector("#details").remove()
        var strin1 ="<button id=prev>Prev</button> <button id=next>Next</button>";
        // document.getElementById("buttons").appendChild("<button id=prev>Prev</button>")
        start+=1
        var strin="<input class='rad' id= opn1 name=grp type=radio ><text class= option> </text> </input><br><br><input class='rad' id= opn2 name=grp type=radio ><text class= option> </text></input><br><br><input class='rad' id= opn3  name=grp type=radio ><text class= option> </text></input> <br><br><br>"
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
        // console.log(qno);
        addhtml(data[qno-1])
        qno++;
    };
    myrequest.send();   
})

function addhtml(dat){
    // console.log(dat.answer)
    if(dat.answer=="1"){
        document.getElementById('opn1').id = 'answer';
    }
    if(dat.answer=="2"){
        document.getElementById('opn2').id = 'answer';
    }
    if(dat.answer=="3"){
        document.getElementById('opn3').id = 'answer';
    }
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
    // para.insertAdjacentHTML('beforeend',quest)

}


function score(){
    var buttons = document.querySelectorAll("input");
    // console.log(buttons)
    for(var butn of buttons){
        // console.log(data);
        // console.log(butn.id);
        // console.log(butn.checked)
        if (butn.id=="answer"){
            if(butn.checked==true){
                scorecnt++;
                // localStorage.setItem(document.title,"correct")
                console.log("Score is"+scorecnt)
                // console.log("=======")
                // document.getElementById("result").innerHTML = (localStorage.length - 2);          
            }
            
        } 
        
    }   
}

function uncheck() {
    var radbtns = document.querySelectorAll(".rad");
    for (var rd of radbtns){
        rd.checked = false
    }
}

function adddetails(){
    var x = document.getElementById("nam").value;
    var y = document.getElementById("rol").value;
    // console.log(x)
    // console.log(y)
    if (x=="")
        x="Guest"
    if (y=="")
        y="0000"
    document.getElementById("per_det").innerHTML= "Hello,  " + x + " - " + y
}
