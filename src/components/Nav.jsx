import React, {Component} from 'react';
import {nav, item, active} from './Nav.module.scss'

class Nav extends Component {
    render() {
        return (
            <nav className={nav}>
                <div className={item}>
                    <a href="#">Profile</a>
                </div>
                <div className={`${item} ${active}`}>
                    <a href="#">Messages</a>
                </div>
                <div className={item}>
                    <a href="#">News</a>
                </div>
                <div className={item}>
                    <a href="#">Music</a>
                </div>
                <div className={item}>
                    <a href="#">Settings</a>
                </div>
            </nav>
        );
    }
}

export default Nav;
