

function fetchGrade() {
  chrome.tabs.executeScript(
    {
      code: `var x = document.querySelectorAll('[data-col="STU_POINTS"]'); alert(x[0].innerHTML)`,
    }
  );
}

document.getElementById("clickme").addEventListener("click", fetchGrade);