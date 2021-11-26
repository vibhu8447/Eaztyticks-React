console.log("inject is running from manifest");

const trialBar = setTimeout(() => {
    console.log("inject is running");
  const foreground_entry_point = document.createElement("div");
  
  foreground_entry_point.id = "foreground";
  
  
  document.querySelector("._1G3Wr").append(foreground_entry_point);
  
  var wapiScript = document.createElement("script");
  wapiScript.src = chrome.runtime.getURL("foreground.bundle.js");
  document.getElementById("foreground").append(wapiScript);
  }, 10000);
  
  /**
   * Navigation bar component
   * in Id = "navBar"
   */
  const navBar = () => {
    setTimeout(() => {
      const nav_entry_point = document.createElement("div");
      nav_entry_point.style.position = 'absolute';
      nav_entry_point.style.top = '0';
      nav_entry_point.style.left = '0';
      nav_entry_point.style.width = '100%';
      nav_entry_point.style.height = '100%';
      nav_entry_point.style.boxSizing = 'border-box';
      nav_entry_point.style.zIndex = '2';

      nav_entry_point.id = "navBar";
      
      
      document.querySelector('._1XkO3').append(nav_entry_point);
      
      var wapiScript = document.createElement("script");
      wapiScript.src = chrome.runtime.getURL("navbar.bundle.js");
      document.getElementById("navBar").append(wapiScript);
    }, 10000);
  }
  
  navBar();