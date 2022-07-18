import { useEffect } from 'react';
import Header from './components/Header';
import NavbarComp from './components/NavbarComp';
import NewsList from './components/NewsList/NewsList';
import { useDispatch } from 'react-redux';
import {
  getUserCountryViaService,
  getCountryFromLocalStorage,
  setCountryInLocalStorage,
} from './helpers/countryHelpers';
import { localeActions } from './store/slices/locale-slice';
import { toggleDarkTheme } from './helpers/themeHelpers';
import { isDarkThemeEnabled } from './helpers/themeHelpers';
import store from './store';

function App() {
  const dispatch = useDispatch();

  const setDarkThemeIfNecessary = () => {
    const isThemedDarkModeInit = store.getState().theme.isDarkTheme;
    const isDarkThemeActive = isDarkThemeEnabled() || isThemedDarkModeInit;

    if (isDarkThemeActive) {
      document.documentElement.classList.add('dark');
      toggleDarkTheme(true);
    }
  };

  setDarkThemeIfNecessary();

  useEffect(() => {
    console.log('use effect app');

    const setCountryIfNecessary = async () => {
      let country = getCountryFromLocalStorage();
      if (!country) {
        country = await getUserCountryViaService();
        setCountryInLocalStorage(country);
        dispatch(localeActions.updateCountryCode(country));
      }
    };

    setCountryIfNecessary();
  }, [dispatch]);

  return (
    <div className="dark:bg-gray-800 min-h-screen">
      <NavbarComp />
      <div className="max-w-[900px] flex flex-col my-0 mx-auto p-4 items-center">
        <Header />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
