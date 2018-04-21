// $("p").click(function(){

    //     $(this).hide();
    // });

    $(".red").on("click", function(){
        $(this).fadeOut(400);
    });

    $("li").on("click", function(){
        console.log("this is a li: ", $(this).html());
    });

    // $("button").click(function(){
    //     $("input").toggle()
    // })

    // $("input").keyup(function(){
    //     var name = $(this).val();
    //     console.log(name);
    //     var fullThing = "hello" + name;

    //     $("h1").text(fullThing);
    // });

    $("sign-up-form").submit(function(e){
        e.preventDefault();
        consile.log("hey" + "input");
    });

    var username = $("input[name='username']").val();
    console.log("username is: ", username);
    var password = $(Input[name='password']").val();
    if (username === "ironhack" && password ==="ironhack123"){
    console.log("You are in");
    }else{
        console.log("please retry");
    })
