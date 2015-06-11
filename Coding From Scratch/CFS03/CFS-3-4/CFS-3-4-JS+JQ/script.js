//jQuery Events

//Anytime we write jQuery, it needs to be in this document.ready event, simply because it allows our HTML to fully load so that we don't have any issues with editing our page.

$(function () {

    //Click Event
    $("h1").click(function () {
        $(this).css("color", "red");
    })
    //DblClick Event
    $("h1").dblclick(function () {
        $(this).css("color", "black")
    })


    $("h1").mouseenter(function () {
        //   alert("You've entered the element!");
    })

    $("h1").mouseout(function () {
        //    alert("You have now left the element.")
    })

    $("p").mousedown(function () {
        console.log("The user has clicked a paragraph.");
    })

    $("p").mouseup(function () {
        console.log("The user has lifted his finger.");
    })

    $("p").hover(function () {
        $(this).css("fontSize", "45px");
    },
    function () {
        $(this).css("fontSize", "1em");
    })

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    })

    $("input").blur(function () {
        $(this).css("background-color", "white");
    })

    //jQuery Effects

//hide and show
/*
$("#magic").click(function () {
    $("p").hide(5000);
})

$("#magic").dblclick(function () {
    $("p").show(5000);
})
*/


//toggle method
$("#magic").click(function () {
    $("p").toggle(4000);
})

//Fading
//fadeIn()
//$("button").click(function () {
//    $(".box").fadeIn(3000);
//})

////fadeOut()

//$("button").dblclick(function () {
//    $(".box").fadeOut(5000);
//});

//fadeToggle()

//$("button").click(function () {
//    $(".box").toggle("fast");
//});

//fadeTo

$("button").click(function () {
        $(".box").fadeTo("fast", 0.6);
    });

})