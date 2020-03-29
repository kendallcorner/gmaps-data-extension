browser.browserAction.onClicked.addListener(clickListener);

async function clickListener() {

  //TODO: change to website of addon
  newTab = await browser.tabs.create({url: "http://example.com"});

  //Change to popup with date selection in browserAction

  var startDate = new Date(2020,2,28); //months 0-11!
  var endDate = new Date(2020,2,29); //months 0-11!



  download(startDate, endDate, newTab);

}


async function download(startDate, endDate, createdTab) {
  browser.tabs.update(createdTab.id, { 
    url: "https://www.google.com/maps/timeline/kml?authuser=0&pb=!1m8!1m3!1i" 
          + startDate.getFullYear() 
          + "!2i" + startDate.getMonth()
          + "!3i" +  startDate.getDate()
          + "!2m3!1i" + endDate.getFullYear()
          + "!2i" + endDate.getMonth()
          + "!3i" +  endDate.getDate()
  })
}