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
import { isDarkThemeEnabled } from './helpers/theme-helpers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const setDarkThemeIfNecessary = () => {
      const isDarkThemeActive = isDarkThemeEnabled();

      if (isDarkThemeActive) {
        document.documentElement.classList.add('dark');
      }
    };

    const setCountryIfNecessary = async () => {
      let country = getCountryFromLocalStorage();
      if (!country) {
        country = await getUserCountryViaService();
        setCountryInLocalStorage(country);
        dispatch(localeActions.updateCountryCode(country));
      }
    };
    setDarkThemeIfNecessary();
    setCountryIfNecessary();
  }, [dispatch]);

  return (
    <div className="dark:bg-gray-800">
      <NavbarComp />
      <div className="max-w-[900px] flex flex-col my-0 mx-auto p-4 items-center">
        <Header />
        <NewsList />
      </div>
    </div>
  );
}

export default App;
