import './HeaderPage.scss';
import { NavLink } from "react-router-dom";
// @import 'App.scss';
// import styled from "styled-components";
// import '/App.scss';

// const headerLayout = styled.header`
//   background-color: $apl-bg;
//   color: $apl-color;
//   font-family: $def-ff;
// `;

function HeaderPage() {
  return (
    // <BrowserRouter>
    <header className='header_layout p-2'>
        <nav className='header_nav'>
          <ul className='header_list d-flex p-2 flex-row justify-content-between'>
            <li className='header_item'><NavLink className='header_target' to=''>HOME</NavLink></li>
            <li className='header_item'><NavLink className='header_target' to='work'>OBJECT</NavLink></li>
            <li className='header_item'><NavLink className='header_target' to='plan'>PLAN</NavLink></li>
            <li className='header_item'><NavLink className='header_target' to='intro'>WHO's</NavLink></li>
          </ul>
        </nav>
    </header>
    // </BrowserRouter>
  );
}

export default HeaderPage;