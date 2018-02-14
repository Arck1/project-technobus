/**
 * Модуль работы с датой
 */

$(function () {
    /**
     * Установка текущей даты, поиск следующей даты в таблице, выделение ближайшего рейса, добавление перерыва,
     * отсчёт времени
     */
    function getDiffTime(hour, minuts) {
        let res = "";
        if (hour < 10)
            res = "0" + hour;
        else
            res = hour;
        if (minuts < 10) {
            res += ":0" + minuts;
        }
        else {
            res += ":" + minuts;
        }
        return res;
    }

    function setDate() {

        apiObj.showTimetable(0);
        $(".break").remove();
        // $(".ftwo").hide();
        // $(".fone").hide();

        let listTo = $("#scheduleList0").get(0).children;
        let listFrom = $("#scheduleList1").get(0).children;


        let lastLi = listTo[listTo.length - 1];
        $(lastLi).addClass("warning");

        lastLi.children[1].children[1].innerText = "Всегда есть другие варианты";

        lastLi = listFrom[listFrom.length - 1];
        $(lastLi).addClass("warning");
        lastLi.children[1].children[1].innerText = "Всегда есть другие варианты";


        let selected_item = listTo[0];
        let index = 0;
        let minDiffFromTime = 90000;
        let time = new Date();
        // time.setHours(15);
        // time.setMinutes(50);
        let timeInMins = time.getHours() * 60 + time.getMinutes();

        //Поиск и выделение элемента в таблице к технополису
        for (let i = 0; i < listTo.length; i++) {
            let li = listTo[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            if (hm > timeInMins && minDiffFromTime > Math.abs(timeInMins - hm) && !$(li).hasClass('shadow')) {
                selected_item = li;
                index = i;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }

        if (minDiffFromTime === 90000) {
            let divTime = listTo[0].children[0];
            let divInfo = listTo[0].children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            minDiffFromTime = hm + 1440 - timeInMins;
        }
        let divTime = selected_item.children[0];
        let divInfo = selected_item.children[1];
        let [h, m] = divTime.innerText.split(':');

        // $(".success").removeClass();
        // $(".alert").removeClass();
        // $(".next").removeClass();
        $("ul #scheduleList0 li .next").removeClass("success");
        $("ul #scheduleList0 li .next").removeClass("alert");
        $("ul #scheduleList0 li .next").removeClass("next");


        let hourDiff = Math.floor(minDiffFromTime / 60);
        let minutsDiff = minDiffFromTime % 60;


        if (minDiffFromTime > 5 && minDiffFromTime <= 10) {
            //selected_item.className = "success";
            $(selected_item).addClass("success");
            divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
        }
        else {
            if (minDiffFromTime <= 5) {
                //selected_item.className = "alert";
                $(selected_item).addClass("alert");
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
            }
            else {
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
            }
        }
        $(selected_item).addClass("next");

        if (index < listTo.length - 1) {
            let nextIndex = index + 1;
            while (nextIndex < listTo.length && $(listTo[nextIndex]).hasClass('shadow'))
                nextIndex++;
            if (nextIndex < listTo.length) {
                let nextTime = listTo[nextIndex].children[0];

                let [h, m] = nextTime.innerText.split(':');
                let nextTimeInMinutes = parseInt(h) * 60 + parseInt(m);
                let difMins = nextTimeInMinutes - timeInMins;
                while (difMins < 0) {
                    difMins += 24 * 60;
                }
                let hourDiff = Math.floor(difMins / 60);
                let minutsDiff = difMins % 60;

                divInfo.children[1].innerText = "Следующий за ним - через " + getDiffTime(hourDiff, minutsDiff);
            }

        }
        if (minDiffFromTime >= 10 && minDiffFromTime < 200) {
            $(selected_item).before("<li class=\"break fone\"><div class=\"time-info\">" +
                "<div class=\"info\">Перерыв " + minDiffFromTime + " минут</div>" +
                "<div class=\"desc\">Воспользуйтесь общественным транспортом</div></div></li>");

            if (currentTableId === 0)
                $(".fone").show();
        }
        else {
            $(".break fone").remove();
        }

        //Поиск и выделение элемента в таблице к метро

        minDiffFromTime = 90000;
        index = 0;
        selected_item = listFrom[0];
        for (let i = 0; i < listFrom.length; i++) {
            let li = listFrom[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            if (hm > timeInMins && minDiffFromTime > Math.abs(hm - timeInMins) && !$(li).hasClass('shadow')) {
                selected_item = li;
                index = i;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }
        if (minDiffFromTime === 90000) {
            let divTime = listFrom[0].children[0];
            let divInfo = listFrom[0].children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            minDiffFromTime = hm + 1440 - timeInMins;
        }
        divTime = selected_item.children[0];
        divInfo = selected_item.children[1];

        $("ul #scheduleList1 li .next").removeClass("success");
        $("ul #scheduleList1 li .next").removeClass("alert");
        $("ul #scheduleList1 li .next").removeClass("next");
        //$("ul #scheduleList1 li .alert").removeClass();

        hourDiff = Math.floor(minDiffFromTime / 60);
        minutsDiff = minDiffFromTime % 60;


        if (minDiffFromTime > 5 && minDiffFromTime <= 10) {
            $(selected_item).addClass("success");
            //selected_item.className = "success";

            divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
        }
        else {
            if (minDiffFromTime <= 5) {
                $(selected_item).addClass("alert");
                //selected_item.className = "alert";
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);

            }
            else {
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
            }
        }
        $(selected_item).addClass("next");

        if (index < listFrom.length - 1) {
            let nextIndex = index + 1;
            let teta = !$(listFrom[nextIndex]).hasClass('shadow');
            while (nextIndex < listFrom.length && $(listFrom[nextIndex]).hasClass('shadow'))
                nextIndex++;
            if(nextIndex < listFrom.length){
                let nextTime = listFrom[nextIndex].children[0];
                let [h, m] = nextTime.innerText.split(':');
                let nextTimeInMinutes = parseInt(h) * 60 + parseInt(m);
                let difMins = nextTimeInMinutes - timeInMins;
                while (difMins < 0) {
                    difMins += 24 * 60;
                }
                let hourDiff = Math.floor(difMins / 60);
                let minutsDiff = difMins % 60;

                divInfo.children[1].innerText = "Следующий за ним - через " + getDiffTime(hourDiff, minutsDiff);
            }

        }

        if (minDiffFromTime >= 10 && minDiffFromTime < 200) {
            $(selected_item).before("<li class=\"break ftwo\"><div class=\"time-info\">" +
                "<div class=\"info\">Перерыв " + minDiffFromTime + " минут</div>" +
                "<div class=\"desc\">Воспользуйтесь общественным транспортом</div></div></li>");

            if (currentTableId === 1) {
                $(".ftwo").show();
            }

        }
        else {
            $(".break ftwo").remove();
        }
    }

    setDate();
    setInterval(setDate, 10000);
});