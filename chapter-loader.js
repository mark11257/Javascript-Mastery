// Chapter JS Loader - Dynamically loads/unloads chapter scripts
const chapterScripts = {
  ch1: 'CH01_Introduction/ch1.js',
  ch2: 'CH02_JavaScript_Basics/ch2.js',
  ch3: 'CH03_Functions/ch3.js',
  ch4: 'CH04_Built_in_Objects/ch4.js',
  ch5: 'CH05_Error_Handling/ch5.js',
  ch6: 'CH06_Object/ch6.js',
  ch7: 'CH07_Function_Object/ch7.js',
  ch8: 'CH08_BOM/ch8.js',
  ch9: 'CH09_DOM/ch.9.js',
  ch9cookies: 'CH09_DOM/ch.9-cookies.js',
  ch10: 'CH10_Events/ch10.js',
  ch11: 'CH11_AJAX_JSON/ch11.js'
};

let currentScript = null;

function loadChapter(chapter) {
  // Remove current script
  if (currentScript && currentScript.parentNode) {
    currentScript.remove();
  }

  const scriptSrc = chapterScripts[chapter];
  if (!scriptSrc) {
    console.warn('No script for chapter:', chapter);
    return;
  }

  // Create new script tag
  const script = document.createElement('script');
  script.src = scriptSrc;
  script.defer = true;
  script.onload = () => {
    console.log(`Loaded ${chapter.toUpperCase()} JS`);
    // Update button states
    document.querySelectorAll('.chapter-activate').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-chapter="${chapter}"]`);
    if (activeBtn) activeBtn.classList.add('active');
  };
  document.head.appendChild(script);
  currentScript = script;
}

// Event listeners for activate buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.chapter-activate').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chapter = e.target.dataset.chapter;
      loadChapter(chapter);
    });
  });
  // Default load CH11
  loadChapter('ch11');
});

