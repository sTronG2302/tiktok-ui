import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { IoMdCloseCircle } from 'react-icons/io';
import { ImSpinner } from 'react-icons/im';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import React from 'react';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck="false"></input>
                    <button className={cx('clear')}>
                        <IoMdCloseCircle />
                    </button>
                    <ImSpinner className={cx('loading')} />
                    <button className={cx('search-btn')}>
                        <HiOutlineMagnifyingGlass />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
