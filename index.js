function myFunction() {
    let userName = localStorage.getItem("userName");
    if (!userName) {
      userName = prompt("What is your name");
      if (!userName) {
        userName = "Brother"; // Set default value as "Brother"
      }
      localStorage.setItem("userName", userName);
    }
    document.getElementById("userName").innerHTML = `Hi ${userName}! How are you today?`;
    document.getElementById("homeMessage").innerHTML = "This is the Home Page";
  }
  
  // Check if the page is hard-reloaded using the PerformanceNavigation interface
  if (performance.navigation.type === 1) {
    localStorage.removeItem("userName");
  }
  
  myFunction();
  