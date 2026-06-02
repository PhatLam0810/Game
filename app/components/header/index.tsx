'use client';
import { Button } from 'antd';
import styles from './styles.module.scss';
import { title } from 'process';
import Image from 'next/image';
import { Logo } from '@/public/images';

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
        <Image
          src={Logo}
          width={120}
          height={80}
          alt={'Logo'}
          className={styles.logo}
        />

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
