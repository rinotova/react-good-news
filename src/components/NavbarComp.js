import { Navbar } from 'flowbite-react';
import CountrySelector from './CountrySelector';
import ThemeToggler from './ThemeToggler';

const NavbarComp = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <div className="min-w-full font-lobster text-5xl border-b-4 border-double border-gray-500 mb-8 mt-2">
          The Good News
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <CountrySelector />
        <ThemeToggler />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
