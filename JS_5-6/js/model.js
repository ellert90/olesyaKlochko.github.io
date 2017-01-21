 var init = 0;
 var startDate;
 var timerId;


 function clearTIME() {
  init = 0;
  clearTimeout(timerId);
  document.getElementById('time-value').innerHTML = '00:00:00.00';
 }

 function findTIME() {
   startDate = new Date();
   startTIME();
   init = 1;

 }

 function startTIME() {
  var thisDate = new Date();
  var t = thisDate.getTime() - startDate.getTime();
  var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
  t = Math.floor (t/1000);
  var s = t%60; t-=s;
  t = Math.floor (t/60);
  var m = t%60; t-=m;
  t = Math.floor (t/60);
  var h = t%60;
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  if (init == 1) document.getElementById('time-value').innerHTML = h + ':' + m + ':' + s + '.' + ms;
  timerId = setTimeout("startTIME()", 1);
 }

 function pauseTIME() {
    clearInterval(timerId);
 }

 function continueTIME() {
  startDate = new Date();
  clearInterval(timerId);
  timerId = setTimeout("startTIME()", 1);
  }
