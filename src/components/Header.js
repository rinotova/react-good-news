import { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <div className="min-w-full font-lobster text-5xl border-b-4 border-double border-gray-500 mb-8 mt-3">
        The Good News
      </div>
      <input
        type="search"
        placeholder="Search..."
        className="min-w-full h-9 outline-0 border-b-2 border-solid border-black text-lg mb-8"
      />
    </Fragment>
  );
};
export default Header;
