import React, { useEffect, useRef, useState } from 'react';
import './Styles/style.css';
import './Styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const [sticky, setSticky] = useState(null);

  useEffect(() => {
    const menu = menuRef.current;
    const navbar = navbarRef.current;

    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    };

    setSticky(headerRef.current.offsetTop);

    window.onscroll = function() {
      stickyNavbar();
    };

    return () => {
      window.onscroll = null;
    };
    // eslint-disable-next-line
  }, []);

  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      headerRef.current.classList.add('sticky');
    } else {
      headerRef.current.classList.remove('sticky');
    }
  }

  return (
    <div>
      <header ref={headerRef}>
        <Link to="" className='logo'><i className='fas fa-infinity'></i>India Toons</Link>
        <nav className="Navbar" ref={navbarRef}>
          <Link className={location.pathname === "/" ? 'active' : ''} to="/">HOME</Link>
          <Link className={location.pathname === "/popular" ? 'active' : ''} to="/popular">POPULAR</Link>
          <Link to="">CONTACT US</Link>
          <Link className={location.pathname === "/dmca" ? 'active' : ''} to="/dmca">DMCA</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars" ref={menuRef}></i>
          {/* <a href="#" class="fas fa-heart"></a> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
