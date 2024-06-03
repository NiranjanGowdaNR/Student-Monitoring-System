import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' }}>
      <a href="/" className="sidebar__header d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2 sidebar__icon" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto sidebar__nav">
        <li className="nav-item sidebar__nav-item">
          <a href=" " className="nav-link active sidebar__nav-link" aria-current="page">
            <svg className="bi me-2 sidebar__nav-icon" width="16" height="16"><use href="#home"></use></svg>
            Home
          </a>
        </li>
        <li className="sidebar__nav-item">
          <a href=" " className="nav-link text-white sidebar__nav-link">
            <svg className="bi me-2 sidebar__nav-icon" width="16" height="16"><use href="#speedometer2"></use></svg>
            Dashboard
          </a>
        </li>
        <li className="sidebar__nav-item">
          <a href=" " className="nav-link text-white sidebar__nav-link">
            <svg className="bi me-2 sidebar__nav-icon" width="16" height="16"><use href="#table"></use></svg>
            Orders
          </a>
        </li>
        <li className="sidebar__nav-item">
          <a href=" " className="nav-link text-white sidebar__nav-link">
            <svg className="bi me-2 sidebar__nav-icon" width="16" height="16"><use href="#grid"></use></svg>
            Products
          </a>
        </li>
        <li className="sidebar__nav-item">
          <a href=" " className="nav-link text-white sidebar__nav-link">
            <svg className="bi me-2 sidebar__nav-icon" width="16" height="16"><use href="#people-circle"></use></svg>
            Customers
          </a>
        </li>
      </ul>

      <div className="dropdown sidebar__dropdown">
        <a href=" " className="d-flex align-items-center text-white text-decoration-none dropdown-toggle sidebar__dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2 sidebar__dropdown-avatar" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow sidebar__dropdown-menu" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item sidebar__dropdown-item" href=" ">New project...</a></li>
          <li><a className="dropdown-item sidebar__dropdown-item" href=" ">Settings</a></li>
          <li><a className="dropdown-item sidebar__dropdown-item" href=" ">Profile</a></li>
          <li><hr className="dropdown-divider sidebar__dropdown-divider"></hr></li>
          <li><a className="dropdown-item sidebar__dropdown-item" href=" ">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
