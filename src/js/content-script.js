
function runMapsDownload (message) {

  var startDate = new Date(2020,2,28); //months 0-11!
  var endDate = Date.now(); //months 0-11!


  sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  download = async function () {
    var d = startDate;
    while (d <= endDate) {
      document.location.href = "https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i" + d.getFullYear() 
                                + "!2i" + d.getMonth()
                                + "!3i" +  d.getDate()
                                + "!2m3!1i" + d.getFullYear()
                                + "!2i" + d.getMonth()
                                + "!3i" +  d.getDate();
      await sleep(2000);
      d.setDate(d.getDate() + 1);
    }
  }

  download();

}

browser.runtime.onMessage.addListener((message) => {
  runMapsDownload(message);
});