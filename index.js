/**
 * Variable to control the language of the CV.
 * Set to 'en' for English or 'uk' for Ukrainian.
 */
const LANG = 'en'; 

/**
 * Function to apply translations to the DOM.
 * It searches for all elements with a 'data-i18n' attribute
 * and replaces their content with the corresponding translation.
 */
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];

    if (translation) {
      if (el.tagName === 'TITLE') {
        document.title = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });
}

// Apply translations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(LANG);
});
