var notificationNumber = 0;
var notificationList;

function hideNotification(){
    $('#notification').hide();
    notificationNumber++;
    getNotification();
}

function getNotification(){

    if(notificationNumber < notificationList.length){
        let notification = notificationList[notificationNumber];

        $("#title_notification").text(notification[0]);
        $("#output_notification").text(notification[1]);
        $('#notification').show();
    }
}

$(function(){
    $('#notification').click(function () {
        hideNotification();
    });
    let notificationJSON = JSON.parse(localStorage.getItem('info'));
    console.log(notificationJSON);
    let notification = notificationJSON.values;
    notification.shift();
    notificationList = notification;

   getNotification();
});