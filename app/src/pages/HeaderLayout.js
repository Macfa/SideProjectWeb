import './HeaderLayout.scss';
import HeaderPage from '../layouts/header/pages/HeaderPage';
import { NavLink } from "react-router-dom";

function HeaderLayout() {
  return (
    <header className='header_layout p-1'>
        <nav className='header_nav'>
          <ul className='header_list d-flex p-2 flex-row justify-content-between'>
            <li className='header_item'><NavLink className='header_target' to='/'>Macfa</NavLink></li>
            <li className='header_item'><NavLink className='header_target' to='/intro'>양력</NavLink></li>
            <li className='header_item'><NavLink className='header_target' to='/work'>작업본</NavLink></li>
          </ul>
        </nav>
    </header>
  );
}

export default HeaderLayout;