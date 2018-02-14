var notificationList;

function hideNotification() {
    $('#notification').hide();
}

function getNotification() {


    let notification = infoList[0];

    $("#title_notification").text(notification[0]);
    $("#output_notification").text(notification[1]);
    $('#notification').show();

}

$(function () {
    $('#notification').click(function () {
        hideNotification();
    });

    infoList = JSON.parse(localStorage.getItem('info')).values;

    getNotification();
});