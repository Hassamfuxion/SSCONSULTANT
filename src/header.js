  import { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import Nav from './nav';

  export default function HeaderStyle({ variant }) {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [isSticky, setIsSticky] = useState();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > prevScrollPos) {
          setIsSticky('cs-gescout_sticky'); // Scrolling down
        } else if (currentScrollPos !== 0) {
          setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
        } else {
          setIsSticky();
        }
        setPrevScrollPos(currentScrollPos); // Update previous scroll position
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
      };
    }, [prevScrollPos]);

    return (
      <header
        className={`cs_site_header header_style_2 cs_style_1 ${
          variant ? variant : ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        } ${isSticky ? isSticky : ''}`}
        style={{
          backgroundColor: 'black', // Set background to black
          color: 'white', // Set text color to white
          transition: 'all 0.3s ease', // Smooth transition for hover effects
        }}
      >
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
              <Link
  to="/"
  className="cs_site_branding"
  style={{
    transition: 'all 0.3s ease',
    color: 'white', // Default text color
    textDecoration: 'none', // Remove underline
  }}
  onMouseEnter={(e) => {
    e.target.style.color = 'blue'; // Hover color change
  }}
  onMouseLeave={(e) => {
    e.target.style.color = 'white'; // Revert color
  }}
  onFocus={(e) => {
    e.target.style.color = 'blue'; // Focus color change
  }}
  onBlur={(e) => {
    e.target.style.color = 'white'; // Revert color
  }}
>
  <video
    src="/assets/images/animation logo.mp4" // Updated video path
    alt="Logo"
    width="250" // Increased width
    height="70" // Increased height
    autoPlay
    loop
    muted
    style={{
      width: '220px', // Ensuring correct width
      height: '80px', // Ensuring correct height
      transition: 'all 0.3s ease',
    }}
  />
</Link>



              </div>
              <div className="cs_main_header_center">
                <div
                  className="cs_nav cs_primary_font fw-medium"
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
            <>
      

            </>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
