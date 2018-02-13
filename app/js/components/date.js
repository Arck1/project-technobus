/**
 * Модуль работы с датой
 */

$(function () {
    /**
     * Установка текущей даты, поиск следующей даты в таблице
     */
    function setDate() {
        let listTo = $("#scheduleList0").get(0).children;
        let listFrom = $("#scheduleList1").get(0).children;
        let selected_item = listTo[0];
        let minDiffFromTime = 90000;
        let time = new Date();
        let timeInMins = time.getHours() * 60 + time.getMinutes();

        for(let i = 0; i < listTo.length; i++){
            let li = listTo[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);
            
            if(hm > timeInMins && minDiffFromTime > Math.abs(timeInMins - hm)){
                selected_item = li;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }
        let divTime = selected_item.children[0];
        let divInfo = selected_item.children[1];
        let [h, m] = divTime.innerText.split(':');

        $("ul #scheduleList0 li").removeClass();

        let hourDiff = parseInt(h) - time.getHours();
        let minutsDiff = parseInt(m) - time.getMinutes();

        function getDiffTime(hour, minuts) {
            let res = "";
            if(hour < 10)
                res = "0" + hour;
            else
                res = hour;
            if(minuts < 9){
                res += ":0" + minuts;
            }
            else {
                res += ":" + minuts;
            }
            return res;
        }

        if(minDiffFromTime > 5){
            selected_item.className = "success";

            divInfo.children[0].innerText = 'Через '+ getDiffTime(hourDiff, minutsDiff) ;
            console.log(divInfo.children[0]);
        }
        else {
            selected_item.className = "alert";
            divInfo.children[0].innerText = 'Через '+ getDiffTime(hourDiff, minutsDiff) ;
            console.log(divInfo.children[0]);
        }

        minDiffFromTime = 90000;
        selected_item = listFrom[0];
        for(let i = 0; i < listFrom.length; i++){
            let li = listFrom[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = parseInt(h) * 60 + parseInt(m);

            if(hm > timeInMins && minDiffFromTime > Math.abs(hm - timeInMins)){
                selected_item = li;
                minDiffFromTime = Math.abs(timeInMins - hm);
                // console.log(minDiffFromTime);
            }
        }
        divTime = selected_item.children[0];
        divInfo = selected_item.children[1];

        $("ul #scheduleList1 li").removeClass();

        if(minDiffFromTime > 5){
            selected_item.className = "success";

            divInfo.children[0].innerText = 'Через '+ getDiffTime(hourDiff, minutsDiff) ;
            console.log(divInfo.children[0]);
        }
        else {
            selected_item.className = "alert";
            divInfo.children[0].innerText = 'Через '+ getDiffTime(hourDiff, minutsDiff) ;
            console.log(divInfo.children[0]);
        }
        

    }

    setDate();
    setInterval(setDate, 10000);
});