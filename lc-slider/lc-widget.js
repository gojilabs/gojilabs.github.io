const slider = document.getElementById("goji-bar");
const anchor = document.getElementById("goji-link");
// Replace this url with url of your landing page
const url = new URL("https://lakecountrymfg.com/");
url.searchParams.append("goBackUrl", window.location.href);

anchor.href = url;

const root = document.documentElement;

const updateScores = (before, medium, premium) => {
  root.style.setProperty("--goji-before-score-opacity", before);
  root.style.setProperty("--goji-medium-score-opacity", medium);
  root.style.setProperty("--goji-premium-score-opacity", premium);
};

const updateImages = (before, medium, premium) => {
  root.style.setProperty("--goji-before-img-opacity", before);
  root.style.setProperty("--goji-medium-img-opacity", medium);
  root.style.setProperty("--goji-premium-img-opacity", premium);
};

const updateTextBox = (height, mb, opacity) => {
  root.style.setProperty("--goji-text-height", height);
  root.style.setProperty("--goji-text-mb", mb);
  root.style.setProperty("--goji-text-opacity", opacity);
};

slider.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #DADCDE 0%, #004077 " +
    value +
    "%, #fff " +
    value +
    "%,  #fff 100%)";

  if (this.value < 100) {
    updateImages(1, this.value / 100, 0);
  } else {
    updateImages(0, 2 - this.value / 100, 1);
  }

  if (this.value < 50) {
    updateScores(1, 0, 0);
  } else if (this.value > 150) {
    updateScores(0, 0, 1);
  } else {
    updateScores(0, 1, 0);
  }

  if (this.value > 1) {
    updateTextBox("0", "0", "0");
  } else {
    updateTextBox("103px", "33px", "1");
  }
};
