const params = new URLSearchParams(window.location.search);
const target = params.get("url");

if (target) {
  document.getElementById("continueBtn").href = target;
  document.getElementById("targetText").innerText = target;
} else {
  document.getElementById("targetText").innerText = "No destination specified";
  document.getElementById("continueBtn").style.display = "none";
}
