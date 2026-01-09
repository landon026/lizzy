const DEFAULT_URL = "https://teest.videoy.online/";

const params = new URLSearchParams(window.location.search);
const customUrl = params.get("url");

const finalUrl = (customUrl && customUrl.startsWith("http"))
  ? customUrl
  : DEFAULT_URL;

document.getElementById("targetUrl").textContent = finalUrl;
document.getElementById("continueBtn").href = finalUrl;
