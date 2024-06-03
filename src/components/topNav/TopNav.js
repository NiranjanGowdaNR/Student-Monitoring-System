import React from 'react';

function TopNav() {
  return (
    <div className="container-fluid">
      <a className="navbar-brand" href=" ">Never expand</a><button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
      </button>

      <div className="navbar-collapse collapse show" id="navbarsExample01">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href=" ">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=" ">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href=" " tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href=" " id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown01">
              <li><a className="dropdown-item" href=" ">Action</a></li>
              <li><a className="dropdown-item" href=" ">Another action</a></li>
              <li><a className="dropdown-item" href=" ">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  );
}

export default TopNav;
