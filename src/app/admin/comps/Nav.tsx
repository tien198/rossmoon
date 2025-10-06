'use client'

import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Nav() {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className={
      styles['sidebar']
      + ' ' + (isActive ? styles['active'] : '')}
    >
      <span
        className={
          styles['activation-btn']
          + ' ' + styles['activate']}
        onClick={() => setIsActive(true)}
      >
        <IoIosArrowForward />
      </span>
      <span
        className={
          styles['activation-btn']
          + ' ' + styles['deactivate']}
        onClick={() => setIsActive(false  )}

      >
        <IoIosArrowBack />
      </span>
      <div className={styles['logo']}>🛍️ Admin</div>
      <nav className={styles['nav']}>
        <a href="#">📦 Sản phẩm</a>
        <a href="#">👥 Người dùng</a>
        <a href="#">📈 Báo cáo</a>
      </nav>
      <div className={styles['footer']}>
        <button>Đăng xuất</button>
      </div>
    </nav>
  );
};
