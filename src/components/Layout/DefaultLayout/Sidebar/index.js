import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side bar</h2>
        </aside>
    );
}

export default Sidebar;
