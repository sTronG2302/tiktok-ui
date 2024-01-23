import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../Button';
import { FaEllipsisV, FaRegQuestionCircle, FaRegKeyboard } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FaCoins } from 'react-icons/fa6';
import { IoLanguageSharp, IoSettings, IoLogOut } from 'react-icons/io5';
import Menu from '../../../Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';
import routesConfig from '../../../../config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <IoLanguageSharp />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FaRegQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FaRegKeyboard />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <CgProfile />,
            title: 'View profile',
            to: '/@strg',
        },
        {
            icon: <FaCoins />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <IoSettings />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <IoLogOut />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search></Search>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://lh3.googleusercontent.com/ogw/ANLem4ajMdel4zcpbc6pkh2m7pp9O9rnxnuFZGcxJxVKJw=s32-c-mo"
                                alt="Duc Trong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FaEllipsisV />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
