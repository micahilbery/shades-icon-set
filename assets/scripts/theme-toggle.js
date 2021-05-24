let preferredTheme = sessionStorage.getItem('preferredTheme');

function setLightTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  }

  document.body.classList.add('light');
  sessionStorage.setItem('preferredTheme', 'light');
}

function setDarkTheme() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
  }

  document.body.classList.add('dark');
  sessionStorage.setItem('preferredTheme', 'dark');
}

function setPreferredTheme() {
  preferredTheme = sessionStorage.getItem('preferredTheme');

  if(preferredTheme === 'light') {
    setLightTheme();
  } else if (preferredTheme === 'dark') {
    setDarkTheme();
  }
}

function toggleTheme() {
    preferredTheme = sessionStorage.getItem('preferredTheme');

  if(preferredTheme === null) {
    sessionStorage.setItem('preferredTheme', 'dark');
    setPreferredTheme();
  } else if(preferredTheme === 'light') {
    sessionStorage.setItem('preferredTheme', 'dark');
    setPreferredTheme();
  } else if (preferredTheme === 'dark') {
    sessionStorage.setItem('preferredTheme', 'light');
    setPreferredTheme();
  }
}

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.style.display = "block"; // shows button if javascript is enabled;
toggleBtn.addEventListener('click', toggleTheme);

setPreferredTheme();
