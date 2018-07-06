// add listener to browser tab update
browser.tabs.onUpdated.addListener(tabId => {
	initialize(tabId);
});

function initialize(tabId) {

		browser.browserAction.setIcon({
		tabId: tabId,
		path: "normalView/icons/f.jpg"
	})

	browser.browserAction.setTitle({
		tabId: tabId,
		title: "Free software habits"
	})
	
}