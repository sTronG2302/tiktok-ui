import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { IoMdCloseCircle } from 'react-icons/io';
import { ImSpinner } from 'react-icons/im';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>
                <div>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
