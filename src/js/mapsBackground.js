browser.browserAction.onClicked.addListener(clickListener);

async function clickListener() {
  newTab = await browser.tabs.create({url: "http://example.com"});
  //browser.tabs.sendMessage(newTab.id, "run script, please")

  var startDate = new Date(2020,2,28); //months 0-11!
  var endDate = Date.now(); //months 0-11!


  sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  download(startDate, endDate, newTab);

}


async function download(startDate, endDate, createdTab) {
  var d = startDate;
  while (d <= endDate) {
    browser.tabs.update(createdTab.id, { 
      url: "https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i" + d.getFullYear() 
                              + "!2i" + d.getMonth()
                              + "!3i" +  d.getDate()
                              + "!2m3!1i" + d.getFullYear()
                              + "!2i" + d.getMonth()
                              + "!3i" +  d.getDate()
    })
    await sleep(2000);
    d.setDate(d.getDate() + 1);
  }
}