import { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search..."
        className="min-w-full h-9 outline-0 border-0 border-b-2 border-solid border-black text-lg mb-8 dark:bg-slate-400	dark:text-slate-200"
      />
    </Fragment>
  );
};
export default Header;
