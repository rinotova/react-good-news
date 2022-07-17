import { Navbar } from 'flowbite-react';
import CountrySelector from './CountrySelector';
import ThemeToggler from './ThemeToggler';

const NavbarComp = () => {
  return (
    <div className="min-w-full border-b-4 border-double border-gray-500 mb-8 mt-2">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <div className="min-w-full font-lobster text-5xl">The Good News</div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <CountrySelector />
          <ThemeToggler />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
