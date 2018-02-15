/**
 * Модуль установки событий работы с свичём
 */
// $(function () {
//     $(".russian").button('toggle');
//     $(".russian").click(function () {
//         setLanguage("ru");
//         $('#map').attr('lang','ru');
//     });
//  $(".russian").click();
//     $(".english").click(function () {
//         setLanguage("en");
//         $('#map').attr('lang','en');
//     });
//  $(".lang").addClass("btn-group-vertical");
//  $(".lang").removeClass("btn-group");
//     $(".to_technopolis").button('toggle');
//  $(".to_technopolis").click(function () {
//          $("#route0").css("visibility", "visible");
//          $("#route0").css("position", "initial");
//          $("#route1").css("visibility", "hidden");
//          $("#route1").css("position", "absolute");
//     });
//  $(".from_technopolis").click(function () {
//         $("#route0").css("visibility", "hidden");
//          $("#route0").css("position", "absolute");
//          $("#route1").css("visibility", "visible");
//          $("#route1").css("position", "initial");
//     });
// });


$(function () {

    $('#First_page').click(function(){
        currentWindow = 1;
        if (currentTableId == 0){
            $('#toTechn').trigger('click');
        }
        else if (currentTableId == 1){
            $('#toMetro').trigger('click');
        }
    });

    $('#Second_page').click(function(){
        currentWindow = 2;
    });

    $('#Third_page').click(function(){
        currentWindow = 3;
    });



    $("#toTechn").click(function () {
        currentTableId = 0;
        $("#toTechn").addClass("is-active");
        $("#toMetro").removeClass("is-active");
        $("#timelineDirection").removeClass("tube");

        if (currentWindow == 1){
            transition1();

            $("#scheduleList1").hide();
            $("#scheduleList0").show();

            let sl = document.querySelector("#scheduleList0 .succes");
            if (!sl) {
                sl = document.querySelector("#scheduleList0 .alert");
                sl = document.querySelector("#scheduleList0 .next");
            }

            $('#timelineDirection').animate({scrollTop: $("#scheduleList0 li.next").offset().top - $("#scheduleList0").offset().top - 60});
        }
        else if (currentWindow == 2)
            transition2();
        else if (currentWindow == 3)
            transition3();

        // let b = $("#scheduleList0 .success");
        // if(b.length == 0){
        //     b = $("#scheduleList0 .alert");
        // }
        // if(b.length == 0){
        //     b = $("#scheduleList0 .next");
        // }
        // console.log(b);
        //$('#timelineDirection').animate({scrollTop: b.offset().top-100});

    });

    $("#toMetro").click(function () {
        currentTableId = 1;
        $("#toMetro").addClass("is-active");
        $("#toTechn").removeClass("is-active");
        $("#timelineDirection").addClass("tube");

        if (currentWindow == 1){
            transition1();

            $("#scheduleList1").show();
            $("#scheduleList0").hide();

            $('#timelineDirection').animate({scrollTop: $("#scheduleList1 li.next").offset().top - $("#scheduleList1").offset().top - 60});
        }
        else if (currentWindow == 2)
            transition2();
        else if (currentWindow == 3)
            transition3();
        // let b = $("#scheduleList1 .success");
        // if(b.length == 0){
        //     b = $("#scheduleList1 .alert");
        // }
        // if(b.length == 0){
        //     b = $("#scheduleList1 .next");
        // }

        //$('#timelineDirection').animate({scrollTop: b.offset().top-100});

    });
});
