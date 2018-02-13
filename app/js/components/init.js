$(function () {
    $("#scheduleList1").hide();
    let listTo = $("#scheduleList0").get(0).children;
    let listFrom = $("#scheduleList1").get(0).children;
    let lastLi = listTo[listTo.length - 1];
    lastLi.className = "warning";

    console.log(lastLi);
    lastLi.children[1].children[1].innerText = "Всегда есть другие варианты";

    lastLi = listFrom[listFrom.length - 1];
    lastLi.className = "warning";
    lastLi.children[1].children[1].innerText = "Всегда есть другие варианты";

});