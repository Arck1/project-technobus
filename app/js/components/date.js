/**
 * Модуль работы с датой
 */

$(function () {
    /**
     * Установка текущей даты, поиск следующей даты в таблице, выделение ближайшего рейса
     */
    function getDiffTime(hour, minuts) {
        let res = "";
        if (hour < 10)
            res = "0" + hour;
        else
            res = hour;
        if (minuts < 9) {
            res += ":0" + minuts;
        }
        else {
            res += ":" + minuts;
        }
        return res;
    }

    function setDate() {
        let listTo = $("#scheduleList0").get(0).children;
        let listFrom = $("#scheduleList1").get(0).children;
        let selected_item = listTo[0];
        let index = 0;
        let minDiffFromTime = 90000;
        let time = new Date();

        let timeInMins = time.getHours() * 60 + time.getMinutes();

        //Поиск и выделение элемента в таблице к технополису
        for (let i = 0; i < listTo.length; i++) {
            let li = listTo[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            if (hm > timeInMins && minDiffFromTime > Math.abs(timeInMins - hm)) {
                selected_item = li;
                index = i;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }

        if(minDiffFromTime === 90000){
            let divTime = listTo[0].children[0];
            let divInfo = listTo[0].children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            minDiffFromTime = hm + 1440 - timeInMins;
        }
        let divTime = selected_item.children[0];
        let divInfo = selected_item.children[1];
        let [h, m] = divTime.innerText.split(':');

        $("ul #scheduleList0 li .success").removeClass();
        $("ul #scheduleList0 li .alert").removeClass();
        let hourDiff = Math.floor(minDiffFromTime / 60);
        let minutsDiff = minDiffFromTime % 60;




        if (minDiffFromTime > 5 && minDiffFromTime <= 10) {
            selected_item.className = "success";

            divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
        }
        else {
            if(minDiffFromTime <= 5) {
                selected_item.className = "alert";
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
            }
        }
        $(selected_item).addClass("next");


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

            if (hm > timeInMins && minDiffFromTime > Math.abs(hm - timeInMins)) {
                selected_item = li;
                index = i;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }
        if(minDiffFromTime == 90000){
            let divTime = listFrom[0].children[0];
            let divInfo = listFrom[0].children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            minDiffFromTime = hm + 1440 - timeInMins;
        }
        divTime = selected_item.children[0];
        divInfo = selected_item.children[1];

        $("ul #scheduleList1 li .success").removeClass();
        $("ul #scheduleList1 li .alert").removeClass();

        hourDiff = Math.floor(minDiffFromTime / 60);
        minutsDiff = minDiffFromTime % 60;

        if (minDiffFromTime > 5 && minDiffFromTime <= 10) {
            selected_item.className = "success";

            divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);
        }
        else {
            if(minDiffFromTime <= 5){
                selected_item.className = "alert";
                divInfo.children[0].innerText = 'Через ' + getDiffTime(hourDiff, minutsDiff);

            }
        }
        $(selected_item).addClass("next");
    }

    setDate();
    setInterval(setDate, 10000);
});