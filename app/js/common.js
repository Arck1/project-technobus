//Константы и глобальные переменные
//
const days = ['monday', 'tuesday', 'tednesday', 'thursday', 'friday', 'saturday','sunday'];
const fullDays = ['fullMonday', 'fullTuesday', 'fullTednesday', 'fullThursday', 'fullFriday', 'fullSaturday','fullSunday'];
const inWeekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу']

var currentTableId = 0;
var currentWindow = 1;
var googleSpreadsheet;
var tableViewer;
var apiObj;
var  infoList = [];
var sortedTimeLists = { 'to' : [], 'from' : []};
var notificationNumber = 0;

//Параметр для включения геолокации
const isGeoLocationOn = true;

const url = "https://docs.google.com/spreadsheet/pub?key=1VwgzSFxVRu2Z-9tvF8wimO2m3BmuW4ngcST5uGSRYRg&output=html";
const key = "AIzaSyC6gFH_bbSeMSIzEexKIUQ3MGE1MK2mBdo";
const spreadsheetId = "1Xdje643qsnGXaOjU70larjh-UFTh6Bt9ii83a7t68Oo";


/**
 * Установка языка сайта
 * @param {string} lang Пользовательская локаль
 */
// function setLanguage(lang) {
// 	$.getJSON(`lang/${lang}.json`, function (data) {
// 		$.each(data, function (key, val) {
// 			$(`[name = ${key}]`).html(val);
// 		});
// });}

// UpUp.start({
//   'content-url': 'index.html',
//   'assets': ['/img/technopolis.jpg', '/css/main.min.css', '/lang/en.json', '/lang/ru.json','/js/scripts.min.js'],
//   'service-worker-url': '/upup.sw.min.js'
// });


    