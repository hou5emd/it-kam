import React, {Component} from 'react';
import {header} from './Header.module.scss'

class Header extends Component {
    render() {
        return (

            <header className={header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt=""/>
            </header>

        );
    }
}

export default Header;
