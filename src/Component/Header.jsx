import React from "react";
import "./header.css";
import { ReactComponent as HygexxLogo } from "../asset/Component 40Hyggex.svg";
import { useState } from "react";

export function Header() {
  const [show, setShow] = useState(false);
  function trigger() {
    setShow(!show);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid mx-5">
        <a className="navbar-brand" href="">
          <HygexxLogo />
        </a>
        <button className="navbar-toggler" onClick={trigger}>
          <span className="navbar-toggler-icon">&#x274C;</span>
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse active"
          }
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="">
                FlashCard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="">
                Contatct
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2 px-4 log-in" href="">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
