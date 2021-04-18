var request = new XMLHttpRequest();
request.open('GET','https://achyuthdasari.github.io/Quiz_Ajax/Questions.txt')
var data = JSON.parse(request.response);
function display(){
    console.log(data[0])
}
