import { useState } from 'react';
import { Link } from 'react-router-dom';  // Use Link from react-router-dom

export default function Nav({ setMobileToggle }) {
  const [hovered, setHovered] = useState(null);

  // Inline styles
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 15px',
    transition: 'color 0.3s ease',
  };

  const hoveredStyle = {
    color: 'lightblue',
  };

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link
          to="/"  // Fixed path for Home (root path)
          onClick={() => setMobileToggle(false)}
          style={{ ...linkStyle, ...(hovered === 'home' ? hoveredStyle : {}) }}
          onMouseEnter={() => setHovered('home')}
          onMouseLeave={() => setHovered(null)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"  // Correct path for About
          onClick={() => setMobileToggle(false)}
          style={{ ...linkStyle, ...(hovered === 'about' ? hoveredStyle : {}) }}
          onMouseEnter={() => setHovered('about')}
          onMouseLeave={() => setHovered(null)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/service"  // Correct path for Services
          onClick={() => setMobileToggle(false)}
          style={{ ...linkStyle, ...(hovered === 'service' ? hoveredStyle : {}) }}
          onMouseEnter={() => setHovered('service')}
          onMouseLeave={() => setHovered(null)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/contact"  // Correct path for Contact
          onClick={() => setMobileToggle(false)}
          style={{ ...linkStyle, ...(hovered === 'contact' ? hoveredStyle : {}) }}
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
