'use client'

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  const [isActive, setIsActive] = useState(true)
  const deactivate = () => setIsActive(false)
  return (
    <aside className={
      styles['sidebar-container']}
    >
      {!isActive && <button
        className={
          styles['activation-btn']
          + ' ' + styles['activate']}
        onClick={() => setIsActive(true)}
      >
        <IoIosArrowForward /><span className="hidden">show</span>
      </button>}
      <button
        className={
          styles['activation-btn']
          + ' ' + styles['deactivate']}
        onClick={() => setIsActive(false)}
      >
        <IoIosArrowBack /><span className="hidden">hide</span>
      </button>
      <div className={
        styles['sidebar']
        + ' ' + (isActive ? styles['active'] : '')

      }>

        <div className={styles['logo']}>🛍️ Admin</div>
        <nav className={styles['nav']}>
          <Link
            href="/admin/products"
            onClick={deactivate}
          >
            📦 Sản phẩm
          </Link>
          <Link
            href="#"
            onClick={deactivate}
          >
            👥 Người dùng
          </Link>
          <Link
            href="#"
            onClick={deactivate}
          >
            📈 Báo cáo
          </Link>
        </nav>
        <div className={styles['footer']}>
          <button>Đăng xuất</button>
        </div>
      </div>
    </aside>
  );
};
