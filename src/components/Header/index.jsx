import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'

import "./Header.css"

export default function Header({searchInput, setSearchInput}) {
  return (
    <nav className="header">
        <div className="header__navigation">
            <button className="arrow-left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="arrow-right">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        <div className="header__search">
            <FontAwesomeIcon icon={faSearch} />
            <input 
                id="search-input" 
                className="search__input" 
                type="text" 
                maxLength="800" 
                placeholder="O que você quer ouvir?" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
        <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
    </nav>
  )
}
