import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: "#81c784",fontWeight: "bold"}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color: "#81c784"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color: "#81c784"}}>About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
      <input className="form-check-input mx-1" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: "#81c784"}}>{`${props.mode} mode`}</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {title: PropTypes.string} // you can only send the type you select here so we cannot make title
                                             //a string here