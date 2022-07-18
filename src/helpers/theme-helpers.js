export const isDarkThemeEnabled = () => localStorage.newsDarkTheme === 'true';

export const toggleDarkTheme = (forceDark) => {
  if (forceDark || localStorage.newsDarkTheme !== 'true') {
    document.documentElement.classList.add('dark');
    localStorage.newsDarkTheme = true;
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.newsDarkTheme = false;
  }
};
