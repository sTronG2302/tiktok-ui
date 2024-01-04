import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FaCheckCircle } from 'react-icons/fa';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-gau-cute.jpg"
                alt="Ava"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>sTronG</span>
                    <FaCheckCircle className={cx('check')} />
                </h4>
                <span className={cx('username')}>ducstrg</span>
            </div>
        </div>
    );
}

export default AccountItem;
