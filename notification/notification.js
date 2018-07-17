﻿﻿
//gets software list from const variable declared in data.js
let alternativeApps = localSoftwareList['softwareList'];

//gets software list from server (github)
fetch('https://cdn.rawgit.com/Enkelena/gsoc-project/master/alternativeApps.json')
  .then( response => response.json() )
  .then(function(remoteSoftwareList) {
    const localListDate = new Date(localSoftwareList.modified);
    const remoteListDate = new Date(remoteSoftwareList.modified);
    //if modified date is newer, it uses the list from server
    if (localListDate < remoteListDate) {
        alternativeApps = remoteSoftwareList['softwareList'];
    }
  });

function updateCurrentUrl() {
    function logTabs(tabs) {
        if(tabs[0].url) {
            handleMessage(tabs[0].url);
        }
     }
    function onError(){
        showNotification(null);
    }
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);
} 
browser.tabs.onActivated.addListener(updateCurrentUrl);

//service is loaded into the page (getCurrentURL.js)
const service = browser.runtime.connect({name:"updateWindowURL"});

function findBetterAlternatives(currentUrl) {
    let betterAlternatives = null;
    alternativeApps.forEach((next) => {
        //test if the notification has been shown for that specific entry
        if(!next.shown && next.url[0] === currentUrl) {
            betterAlternatives = next
            next['shown'] = true;
        }
    })
    return betterAlternatives;
}

function handleMessage(request) {
    //if notifications are paused don't show: return
    if (localStorage.getItem("notification") === "off") return;
    
    //get list of software alternatives
    currentUrl = request.currentWindowURL;
    if (currentUrl) {
        const betterAlternatives = findBetterAlternatives(currentUrl);
        //if an alternative is returned show
        if (betterAlternatives && betterAlternatives.alternatives){
            if (betterAlternatives.alternatives.length > 1) {
                showNotification(currentUrl,betterAlternatives);
            }
        }
    }
}

function showNotification(currentURL, betterAlternatives) {
    //we shouldn't show notification for settings page and empty pages
    if (currentURL === 'about') return;

    //create message
    let message = `${betterAlternatives.name} has Open Source alternatives,\n`;
    if (betterAlternatives.alternatives[0] && betterAlternatives.alternatives[0].name) {
        message = `${message}like ${betterAlternatives.alternatives[0].name}`;
    }
    if (betterAlternatives.alternatives[1] && betterAlternatives.alternatives[1].name) {
        message = `${message} or ${betterAlternatives.alternatives[1].name}`;
    }
    message = `${message}. Click for more!`;

    //using the id 'software-notification', therefore not creating endless notifications for the user
    browser.notifications
    .create('software-notification',
    {
        "type":"basic",
        "iconUrl":"f.svg",
        "title": "Free software habits",
        "message": message
    })
    .then(id => id);

    //when the user clicks the notification, should open a page with list of software
    //https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications/onClicked
    browser.notifications.onClicked.addListener(() => {
        browser.notifications.clear('software-notification');
        //open tab with project page
        browser.tabs.create({url: 'https://opensource.org'});
    });
}

browser.runtime.onConnect.addListener(m => m.onMessage.addListener(handleMessage)); 

