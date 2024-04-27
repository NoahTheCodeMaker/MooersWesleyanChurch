var footer = document.getElementById("footer");
var yearSpan = document.createElement("span");
var currentYear = new Date().getFullYear();

yearSpan.textContent = "© " + currentYear + " Mooers Wesleyan Church. All rights reserved.";
footer.appendChild(yearSpan);