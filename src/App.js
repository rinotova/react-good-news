import { Fragment, useEffect } from 'react';
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
    <Fragment>
      <NavbarComp />
      <div className="max-w-[900px] flex flex-col my-0 mx-auto p-4 items-center">
        <Header />
        <NewsList />
      </div>
    </Fragment>
  );
}

export default App;
