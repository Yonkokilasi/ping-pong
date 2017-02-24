//back end

function convert(number){
    var input =[];
    for (var i =1; i<= number;i ++) {
    if(i % 15 === 0 ){
        input.push("pingpong");
    }
    else if (i % 3 === 0){
            input.push("ping");
        }
    else if (i % 5 === 0) {
            input.push("pong");
        }
    else {
            input.push(i);
        }
    }
    return input;
    console.log(input);
    }


//front-end
$(document).ready(function(){
    $("#blanks form").submit(function(event){
        var user= parseInt($("input#entry").val());
        var output= convert(user);
        $("#in").append("<li>" + output + "</li>")
        event.preventDefault();
    });
});
