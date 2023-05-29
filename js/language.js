// Get the button and paragraphs
const enBtn = document.getElementById("en-Btn");
const ruBtn = document.getElementById("ru-Btn");
const geBtn = document.getElementById("ge-Btn");

// English
const titleEn = document.getElementById("title-en");
const aboutMeEn = document.getElementById("about-me-en");
const educationEn = document.getElementById("education-en");

// Russian
const titleRu = document.getElementById("title-ru");
const aboutMeRu = document.getElementById("about-me-ru");
const educationRu = document.getElementById("education-ru");

// Georgian
const titleGe = document.getElementById("title-ge");
const aboutMeGe = document.getElementById("about-me-ge");
const educationGe = document.getElementById("education-ge");

// Function to hide all language content
function hideAllLanguageContent() {
  titleEn.classList.add("hidden");
  aboutMeEn.classList.add("hidden");
  educationEn.classList.add("hidden");

  titleRu.classList.add("hidden");
  aboutMeRu.classList.add("hidden");
  educationRu.classList.add("hidden");

  titleGe.classList.add("hidden");
  aboutMeGe.classList.add("hidden");
  educationGe.classList.add("hidden");
}

// Function to show English content
function showEnglishContent() {
  titleEn.classList.remove("hidden");
  aboutMeEn.classList.remove("hidden");
  educationEn.classList.remove("hidden");
}

// B-English
enBtn.addEventListener("click", () => {
  hideAllLanguageContent();
  showEnglishContent();
});

// B-Russian
ruBtn.addEventListener("click", () => {
  hideAllLanguageContent();
  titleRu.classList.remove("hidden");
  aboutMeRu.classList.remove("hidden");
  educationRu.classList.remove("hidden");
});

// B-Georgian
geBtn.addEventListener("click", () => {
  hideAllLanguageContent();
  titleGe.classList.remove("hidden");
  aboutMeGe.classList.remove("hidden");
  educationGe.classList.remove("hidden");
});
