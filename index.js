//Move the buttoms around.
var count=0;
function moveButtons(button){
  var button = document.getElementById('button');
  count++
  console.log(count);
  console.log(button.innerHTML)
  if (count%4==1){
  button.innerHTML="Hit me again!"

  button.style.marginTop="100px"
    }
  if (count%4==2){
  button.innerHTML="You're so weak !"

  button.style.marginTop="200px"
    }
  if (count%4==3){
  button.innerHTML="Do you even lift?!"

  button.style.marginTop="300px"
    }
  if (count%4==0){
  button.innerHTML="Click Harder!"
button.style.marginTop="0px"
    }
}


function getQuote() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
             console.log(xmlhttp);
             appendQuote(xmlhttp);

           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };


    xmlhttp.open("GET", "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&newkey="+Date.now(), true);
    xmlhttp.send();
}


function appendQuote (x) {
  var wisdom = JSON.parse(x.response);
  console.log(wisdom);
   document.getElementById("quote").innerHTML = wisdom[0].content;
}
