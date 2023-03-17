import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/navbar.style.css";
import './style/fontawesome/css/all.css';
import image1 from './style/images/qctlogo2.png'


class Navbar extends React.Component { 
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     menuOpen: false
  //   }
  // }

  // // This keeps your state in sync with the opening/closing of the menu
  // // via the default means, e.g. clicking the X, pressing the ESC key etc.
  // handleStateChange (state) {
  //   this.setState({menuOpen: state.isOpen})
  //   console.log(state);
  // }
  
  // // This can be used to close the menu, e.g. when a user clicks a menu item
  // closeMenu () {
  //   this.setState({menuOpen: false})
  //   console.log("this func fired");
  // }

  // // This can be used to toggle the menu, e.g. when using a custom icon
  // // Tip: You probably want to hide either/both default icons if using a custom icon
  // // See https://github.com/negomi/react-burger-menu#custom-icons
  // toggleMenu () {
  //   this.setState(state => ({menuOpen: !state.menuOpen}))
  //   console.log("toggle fired");
  // }

  handleClick = (e) => {
    // e.preventDefault();
    document.getElementsByClassName('modal-backdrop').remove();
    console.log("func fired");
  }
  
  render() {
    return (
      <nav className='navbarposition'>
      <header className='headercontact'>
        <div className='container-fluidcontact'>
          <div className='navb-logo'>
            <Link to="/">
              <img src={image1} alt="logo" />
            </Link>
          </div>
          <div className='navb-items d-none d-xl-flex collapse nav-links navbarfont' id='navbarSupportedContent'>
            <div className='itemcontact'>
              <Link to="/" className='acontact'>Home</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/attractions" className='acontact'>Attractions</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/addattractions" className='acontact'>Add Attraction</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/booking" className='acontact'>Booking</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/about" className='acontact'>About</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/contactus" className='acontact'>Contact Us</Link>
            </div>
          </div>

          <div className='mobile-toggler d-lg-none'>
              <a href="/" data-bs-toggle='modal' data-bs-target='#navbModal'>
                <i className='fa-solid fa-bars icontact'></i>
              </a>
          </div>

          <div className="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog burger-menu">
                    <div className="modal-content burger-menu">

                        <div className="modal-header">
                            <img src={image1} alt="Logo"/>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            
                            <div className="modal-line" onClick={() => this.handleClick()}>
                              <NavLink to="/" className='acontact' >Home</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/attractions" className='acontact'>Attractions</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/addattractions" className='acontact'>Add Attraction</NavLink>
                            </div>
                            
                            <div className="modal-line">
                            <NavLink to="/booking" className='acontact'>Booking</NavLink>
                            </div>

                            <div className="modal-line">
                            <NavLink to="/about" className='acontact'>About</NavLink>
                            </div>
                            
                            <div className="modal-line">
                            <NavLink to="/contactus" className='acontact'>Contact Us</NavLink>
                            </div>

                        </div>

                        {/* <div class="mobile-modal-footer">
                            
                            <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-facebook"></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      </header>
      </nav>
    );
  }
}
export default Navbar;


/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/attractions" className="nav-link">Attractions</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addattractions" className="nav-link">Add Attraction</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contactus" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        </div>
      </nav> */

/* <header className="main-header">
      <div className="container">
        <nav className='navbar navbar-expand-lg main-nav px-0'> */
          /* <a className='navbar-brand'></a> */
    //       <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#mainMenu' aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="icon-bar icon-bar-1"></span>
    //         <span className="icon-bar icon-bar-2"></span>
    //         <span className="icon-bar icon-bar-3"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="mainMenu">
    //       <ul className="navbar-nav ml-auto text-uppercase f1">
    //         <li>
    //           <Link to="/" className="navbar-brand">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/attractions" className="nav-link">Attractions</Link>
    //         </li>
    //         <li>
    //           <Link to="/addattractions" className="nav-link">Add Attraction</Link>
    //         </li>
    //         <li>
    //           <Link to="/about" className="nav-link">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contactus" className="nav-link">Contact Us</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    // </header>


  //   <nav className="navbar active navbarfont navbar-expand-lg" id="nav-container">
  //   <button
  //     className="navbar-toggler"
  //     type="button"
  //     data-bs-toggle="collapse"
  //     data-bs-target="#navbarSupportedContent"
  //     aria-controls="navbarSupportedContent"
  //     aria-expanded="false"
  //     aria-label="Toggle navigation"
  //   >
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse nav-links navbarfont" id="navbarSupportedContent">
  //     <Link to="/" className="logo">QCA</Link>
  //       <ul className="navbar-nav">
  //         <li className="active nav-item">
  //           <Link to="/" className="nav-link">Home</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/attractions" className="nav-link">Attractions</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/addattractions" className="nav-link">Add Attraction</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/about" className="nav-link">About</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/contactus" className="nav-link">Contact Us</Link>
  //         </li>
  //       </ul>
  //     </div>
  // </nav>
