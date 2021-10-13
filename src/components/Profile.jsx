import React, {Component} from 'react';
import {main, post, item} from './Profile.module.scss'


class Profile extends Component {
    render() {
        return (
            <main className={main}>
                <div>
                    <img src="https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/2020-06/VC_Experiences_ReopeningBeaches_RF_1156532604_1280x640.jpg?itok=tPCjquVe" alt=""/>
                </div>
                <div>
                    <img src="https://img1.freepng.ru/20180423/alq/kisspng-logo-dragon-graphic-design-dragon-logo-5ade0b7811f273.9777779215245013680735.jpg" alt=""/>
                </div>
                <div>
                    my posts
                    <div>
                        New Post
                    </div>
                    <div className={post}>
                        <div className={item}>post1</div>
                        <div className={item} >post2</div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Profile;
