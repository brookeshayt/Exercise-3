console.log('Come work out with Henry the Hamster!');

$("#button-1").on("click", function () {
    console.log('Ah yes, the classic hamster wheel. But Henry is no ordinary hamster');
    $("#button-1").addClass("button-active");
    $(".image").html("<img src='../images/Henry5.png'>");
    $("#button-2, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-2").on("click", function () {
    console.log('Its about drive, its about power, we stay hungry, we devour');
    $("#button-2").addClass("button-active");
    $(".image").html("<img src='../images/Henry2.png'>");
    $("#button-1, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-3").on("click", function () {
    console.log('Henry takes out his frustration in a demure way... with a punching bag');
    $("#button-3").addClass("button-active");
    $(".image").html("<img src='../images/Henry3.png'>");
    $("#button-1, #button-2, #button-4, #button-5").removeClass("button-active");
});

$("#button-4").on("click", function () {
    console.log('Weeeeeeeeeee');
    $("#button-4").addClass("button-active");
    $(".image").html("<img src='../images/Henry4.png'>");
    $("#button-1, #button-2, #button-3, #button-5").removeClass("button-active");
});

$("#button-5").on("click", function () {
    console.log('Dwayne "The Rock" Johnson, is that you?');
    $("#button-5").addClass("button-active");
    $(".image").html("<img src='../images/Henry.png'>");
    $("#button-1, #button-2, #button-3, #button-4").removeClass("button-active");
});