//back end
function convert(number){
    var arrayinput =[];
    for (var i =1; i<= number;i ++) {
    if(i % 15 === 0 ){
        arrayinput.push("pingpong");
    }
    else if (i % 3 === 0){
            arrayinput.push("ping");
        }
    else if (i % 5 === 0) {
            arrayinput.push("pong");
        }
    else {
            arrayinput.push(i);
        }
    }
    return arrayinput;
    }
    function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//front-end
$(document).ready(function(){
    $(".blanks form").submit(function(event){
        var user= parseInt($("input#entry").val());
        var output= convert(user);
        output.forEach(function(element){
        $("#result").append("<li>" + element + "</li>")
        event.preventDefault();
    });
});
});
