export const isDarkThemeEnabled = () => localStorage.newsDarkTheme === 'true';

export const toggleDarkTheme = () => {
  if (localStorage.newsDarkTheme === 'true') {
    document.documentElement.classList.remove('dark');
    localStorage.newsDarkTheme = false;
  } else {
    document.documentElement.classList.add('dark');
    localStorage.newsDarkTheme = true;
  }
};
