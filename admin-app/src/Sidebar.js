import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import Product from './Product/ProductPage';
 import {Link} from 'react-router-dom';
 import CustomerPage from './Customer/CustomerPage';
import ReviewPage from './Review/ReviewPage';
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Suprme Food Products
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/ProductPage'>
                    <BsFillArchiveFill className='icon'/> Products
            </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/CustomerPage'>
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/ReviewPage'>
                    <BsMenuButtonWideFill className='icon'/> Review
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link>
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
        
    </aside>
  )
}

export default Sidebar
