/**
 * Модуль работы с датой
 */
$(function () {
    /**
     * Установка текущей даты, поиск следующей даты в таблице
     */
    function setDate() {
        let listTo = $("#scheduleList0").get(0).children;
        let listFromm = $("#scheduleList1").get(0).children;
        let ctime;
        let chm = 90000;
        let time = new Date();
        let timeInMins = time.getHours() * 60 + time.getMinutes();

        for(let i = 0; i < listTo.length; i++){
            let li = listTo[i];
            let divTime = li.children[0];
            let divInfo = li.children[1];

            let [h, m] = divTime.innerText.split(':');

            let hm = h * 60 + m;
            
            if(hm < timeInMins && chm > Math.abs(timeInMins - hm)){
                ctime = li;
                chm = Math.abs(timeInMins - hm);
                console.log(chm);
            }
        }



    }

    setDate();
    setInterval(setDate, 1000);
});