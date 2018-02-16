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

function showMap() {
    if (currentTableId === 0) {
        $('#map0').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7757fad0712b0a44ffbabf020dc68752cea4c3c876db47744728c731e6c3051c&amp;width=' + $('#map0').width() + '&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>');
    } else {
        $('#map1').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afcd18ec223d5d71ebccdb36407f7f14715e6a207a5455b0d3bfad2ed86a2f2b1&amp;width=' + $('#map1').width() + '&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>');
    }
}

$(window).resize(function () {
    if (currentWindow === 2) {
        showMap();
    }
});

$(function () {


    $('#First_page').click(function () {
        currentWindow = 1;
        if (currentTableId == 0) {
            $('#toTechn').trigger('click');
        }
        else if (currentTableId == 1) {
            $('#toMetro').trigger('click');
        }
    });

    $('#Second_page').click(function () {
        currentWindow = 2;
        showMap();
    });

    $('#Third_page').click(function () {
        currentWindow = 3;
    });


    $("#toTechn").click(function () {
        currentTableId = 0;

        $("#toTechn").addClass("is-active");
        $("#toMetro").removeClass("is-active");
        $("#timelineDirection").removeClass("tube");

        if (currentWindow == 1) {
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
        else if (currentWindow == 2){
            transition2();
            showMap();
        }

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

        if (currentWindow == 1) {
            transition1();

            $("#scheduleList1").show();
            $("#scheduleList0").hide();

            $('#timelineDirection').animate({scrollTop: $("#scheduleList1 li.next").offset().top - $("#scheduleList1").offset().top - 60});
        }
        else if (currentWindow == 2) {
            transition2();
            showMap();
        }

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
