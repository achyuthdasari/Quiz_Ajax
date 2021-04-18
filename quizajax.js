var request = new XMLHttpRequest();
request.open('GET','C:\Users\Achyuth\Desktop\MSIT_requirements\React\Week_2\Day_10\Quiz_Ajax\Questions.txt')
var data = JSON.parse(request.response);
function display(){
    console.log(data[0])
}
