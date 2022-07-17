import { Fragment } from 'react';
import Header from './components/Header';
import NavbarComp from './components/NavbarComp';
import NewsList from './components/NewsList/NewsList';

function App() {
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
