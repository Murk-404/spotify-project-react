import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '..\\src\\images\\samplfy-logo-new.png'

// export default function Header() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={logo} alt="Spotify" height="70" className="d-inline-block align-top"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/features">Features</Nav.Link>
//             <Nav.Link href="/about">About</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">Something else</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               No ideas
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

export default function Header() {
  return (
    <div id='nav_bar'>
      <NavLink to='/'> <img src={logo} alt="Samplfy" id='logo'/> </NavLink>
      <div class='nav_button_divider'></div>
      <NavLink to='/features' style={{textDecoration: 'none', height:'30%'}}> <span class='nav_text'>Features</span> </NavLink>
      <div class='nav_button_divider'></div>
      <NavLink to='/about' style={{textDecoration: 'none', height:'30%'}}> <span class='nav_text'>About</span> </NavLink>
      <div class='nav_button_divider'></div>
    </div>
  )
}