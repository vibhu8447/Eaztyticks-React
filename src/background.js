chrome.runtime.onInstalled.addListener((reason) => {
  // chrome.tabs.create({
  //   url: "https://web.whatsapp.com",
  // });
  // chrome.tabs.create({
  //   url: "https://eazybe.com/fb",
  // });
  // chrome.runtime.setUninstallURL("https://eazybe.com/feedback");
});
chrome.runtime.onMessage.addListener((message, sender) => {
  chrome.run;
});

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (
//     changeInfo.status === "complete" &&
//     tab.url.includes("https://web.whatsapp.com")
//   ) {
//     chrome.tabs.executeScript(
//       tabId,
//       { file: "./inject_script.js" },
//       function () {
//         // chrome.tabs.executeScript(
//         //   tabId,
//         //   { file: "./foreground.bundle.js" },
//         //   function () {
//         //     console.log("INJECTED AND EXECUTED");
//         //   }
//         // );
//       }
//     );
//   }
// });
// chrome.runtime.setUninstallURL(message);
