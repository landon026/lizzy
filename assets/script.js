const params = new URLSearchParams(window.location.search);
const url = params.get("url");

const targetText = document.getElementById("targetUrl");
const button = document.getElementById("continueBtn");

if (url && url.startsWith("http")) {
  targetText.textContent = url;
  button.href = url;
} else {
  targetText.textContent = "No valid destination provided";
  button.style.display = "none";
}
