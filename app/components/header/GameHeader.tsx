'use client';
import { Button } from 'antd';
import styles from './GameHeader.module.scss';

const navItems = [
  { label: 'Trang Chủ', active: false },
  { label: 'Trò Chơi', active: true },
  { label: 'Nạp Game', active: false },
  { label: 'Tin Tức', active: false },
  { label: 'Hỗ Trợ', active: false },
];

export default function GameHeader() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>my</div>
          <div>
            <span className={styles.brandTitle}>MyE</span>
            <span className={styles.brandSubtitle}>Game Portal</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map(item => (
            <a
              key={item.label}
              className={`${styles.navLink} ${item.active ? styles.activeLink : ''}`}
              href="#">
              {item.label}
            </a>
          ))}
        </nav>

        <Button type="primary" size="large" className={styles.loginButton}>
          Đăng Nhập
        </Button>
      </div>
    </header>
  );
}
