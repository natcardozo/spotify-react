import React from "react";

import logo from "../../assets/logo-spotify.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <nav className="sidebar__navigation">
            <div className="logo">
                <a href="/index.html">
                    <img src={logo} alt="Logotipo do Spotify" />
                </a>
            </div>
            <div>
                <ul className="sidebar__items">
                    <li className="sidebar__item">
                        <a href="">
                            <span className="sidebar__icon"><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="">
                            <span className="sidebar__icon"><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <section className="sidebar__library">
            <div className="library__header">
                <h2><span><FontAwesomeIcon icon={faBook} /></span>Sua biblioteca</h2>
                <button><span className="fa fa-plus"></span></button>
            </div>
            <div className="library__card">
                <h3>Crie sua primeira playlist</h3>
                <p>É fácil, vamos te ajudar.</p>
                <button>Criar playlist</button>
            </div>
            <div className="library__info">
                <a href="">Legal</a>
                <a href="">Centro de Provacidade</a>
                <a href="">Política de privacidade</a>
                <a href="">Cookies</a>
                <a href="">Sobre anúncios</a>
                <a href="">Acessibilidade</a>
                <a href="">Notice at Collection</a>
                <a href="">You Privacy Choices <span className="fa fa-toggle-on info__toggle"></span></a>
                <a href="">Cookies</a>
            </div>
            <div className="library__language">
                <button><span><FontAwesomeIcon icon={faGlobe} /></span>Português do Brasil</button>
            </div>
        </section>
    </div>
  )
}
