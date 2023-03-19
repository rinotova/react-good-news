import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryInLocalStorage } from '../helpers/countryHelpers';
import { localeActions } from '../store/slices/locale-slice';
import { newsListActions } from '../store/slices/news-slice';

const CountrySelector = () => {
  const dispatch = useDispatch();
  const countryState = useSelector((state) => state.locale.countryCode);
  const countrySelectorRef = useRef('');

  const changeCountryHandler = () => {
    const countryCode = countrySelectorRef.current.value;
    if (countryCode === 'select') {
      return;
    }
    document.querySelector('#newsInputSearch').value = '';
    dispatch(newsListActions.setQuery(null));
    dispatch(newsListActions.resetPageAt());
    dispatch(newsListActions.resetNewsList());
    dispatch(localeActions.updateCountryCode(countryCode));

    setCountryInLocalStorage(countryCode);
  };

  return (
    <select
      disabled
      ref={countrySelectorRef}
      onChange={changeCountryHandler}
      id='countries'
      value={countryState}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4 md:mb-0'
    >
      <option value='select'>Selecy country</option>
      <option value='AR'>Argentina</option>
      <option value='AU'>Australia</option>
      <option value='AT'>Austria</option>
      <option value='BE'>Belgium</option>
      <option value='BR'>Brazil</option>
      <option value='BG'>Bulgaria</option>
      <option value='CA'>Canada</option>
      <option value='CN'>China</option>
      <option value='CO'>Colombia</option>
      <option value='CU'>Cuba</option>
      <option value='CZ'>Czech Republic</option>
      <option value='EG'>Egypt</option>
      <option value='FR'>France</option>
      <option value='DE'>Germany</option>
      <option value='GR'>Greece</option>
      <option value='HK'>Hong Kong</option>
      <option value='HU'>Hungary</option>
      <option value='IN'>India</option>
      <option value='ID'>Indonesia</option>
      <option value='IQ'>Iraq</option>
      <option value='IE'>Ireland</option>
      <option value='IL'>Israel</option>
      <option value='IT'>Italy</option>
      <option value='JP'>Japan</option>
      <option value='JE'>Jersey</option>
      <option value='JO'>Jordan</option>
      <option value='KZ'>Kazakhstan</option>
      <option value='LV'>Latvia</option>
      <option value='LB'>Lebanon</option>
      <option value='LT'>Lithuania</option>
      <option value='MY'>Malaysia</option>
      <option value='MX'>Mexico</option>
      <option value='MA'>Morocco</option>
      <option value='NL'>Netherlands</option>
      <option value='NZ'>New Zealand</option>
      <option value='NG'>Nigeria</option>
      <option value='NO'>Norway</option>
      <option value='PK'>Pakistan</option>
      <option value='PE'>Peru</option>
      <option value='PH'>Philippines</option>
      <option value='PL'>Poland</option>
      <option value='PT'>Portugal</option>
      <option value='RO'>Romania</option>
      <option value='RU'>Russia</option>
      <option value='SA'>Saudi Arabia</option>
      <option value='RS'>Serbia</option>
      <option value='SG'>Singapore</option>
      <option value='SK'>Slovakia</option>
      <option value='SI'>Slovenia</option>
      <option value='ZA'>South Africa</option>
      <option value='ES'>Spain</option>
      <option value='SE'>Sweden</option>
      <option value='CH'>Switzerland</option>
      <option value='TW'>Taiwan</option>
      <option value='TH'>Thailand</option>
      <option value='TR'>Turkey</option>
      <option value='UA'>Ukraine</option>
      <option value='AE'>United Arab Emirates</option>
      <option value='GB'>United Kingdom</option>
      <option value='US' defaultValue>
        United States
      </option>
      <option value='VE'>Venezuela</option>
    </select>
  );
};

export default CountrySelector;
