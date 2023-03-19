import InputSearch from './components/InputSearch';
import NavbarComp from './components/NavbarComp';
import NewsList from './components/NewsList/NewsList';
import { toggleDarkTheme } from './helpers/themeHelpers';
import { isDarkThemeEnabled } from './helpers/themeHelpers';
import store from './store';

function App() {
  const setDarkThemeIfNecessary = () => {
    const isThemedDarkModeInit = store.getState().theme.isDarkTheme;
    const isDarkThemeActive = isDarkThemeEnabled() || isThemedDarkModeInit;

    if (isDarkThemeActive) {
      document.documentElement.classList.add('dark');
      toggleDarkTheme(true);
    }
  };

  setDarkThemeIfNecessary();

  return (
    <div className='dark:!bg-gray-800 bg-white min-h-screen'>
      <NavbarComp />
      <div className='max-w-[900px] flex flex-col my-0 mx-auto p-4 items-center'>
        <InputSearch />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
