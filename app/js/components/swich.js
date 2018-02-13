/**
 * Модуль установки событий работы с свичём
 */
// $(function () {
//     $(".russian").button('toggle');
//     $(".russian").click(function () {
//         setLanguage("ru");
//         $('#map').attr('lang','ru');
//     });
// 	$(".russian").click();
//     $(".english").click(function () {
//         setLanguage("en");
//         $('#map').attr('lang','en');
//     });
// 	$(".lang").addClass("btn-group-vertical");
// 	$(".lang").removeClass("btn-group");
//     $(".to_technopolis").button('toggle');
// 	$(".to_technopolis").click(function () {
// 			$("#route0").css("visibility", "visible");
// 			$("#route0").css("position", "initial");
// 			$("#route1").css("visibility", "hidden");
// 			$("#route1").css("position", "absolute");
//     });
// 	$(".from_technopolis").click(function () {
//         $("#route0").css("visibility", "hidden");
// 			$("#route0").css("position", "absolute");
// 			$("#route1").css("visibility", "visible");
// 			$("#route1").css("position", "initial");
//     });
// });
$(function switchs() {
    $("#scheduleList1").hide();
    $("#toTechn").click(function () {
        currentTableId = 0;
        $("#toTechn").addClass("is-active");
        $("#toMetro").removeClass("is-active");
        $("#timelineDirection").removeClass("tube");
        $("#scheduleList1").hide();
        $("#scheduleList0").show();
    });

    $("#toMetro").click(function () {
        currentTableId = 1;
        $("#toMetro").addClass("is-active");
        $("#toTechn").removeClass("is-active");
        $("#timelineDirection").addClass("tube");
        $("#scheduleList1").show();
        $("#scheduleList0").hide();
    });
});
