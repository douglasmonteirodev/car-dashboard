import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";

import "./topnav.css";

const TopNav = () => {
  return (
    <div className='top__nav'>
      <div className='top__nav-wrapper'>
        <div className='search__box'>
          <input type='text' placeholder='search or type' />
          <span>
            <i className='ri-search-line'></i>
          </span>
        </div>

        <div className='top__nav-right'>
          <span className='notification'>
            <i className='ri-notification-line'></i>
            <span className='badge'></span>
          </span>
          <div className='profile'>
            <Link to='/settings'>
              <img src={profileImg} alt='profilePhoto' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
