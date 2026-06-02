import Image from 'next/image';
import styles from './styles.module.scss';
import { Logo } from '@/public/images';

export default function GameFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image
          src={Logo}
          alt="myE"
          width={120}
          height={80}
          className={styles.logo}
        />

        <div className={styles.contactLine}>
          <span>Email: hotro@mye.vn</span>
          <span>Hotline: 0902 500 198</span>
        </div>

        <div className={styles.companyInfo}>
          <p className={styles.companyName}>CÔNG TY CỔ PHẦN MYE</p>
          <p>Chịu trách nhiệm quản lí nội dung: Ông Lâm Trung Hiệp</p>
          <p>
            Địa chỉ: 477/22 Âu Cơ, Phường Phú Trung, Quận Tân Phú, Thành phố Hồ
            Chí Minh, Việt Nam
          </p>
          <p>
            Giấy phép G1 số: Số 297/GP-BTTTT. Ngày cấp 14/07/2020, Nơi cấp Bộ
            Thông Tin và Truyền Thông
          </p>
        </div>

        <div className={styles.policyLinks}>
          <a href="#">Điều khoản dịch vụ</a>
          <span className={styles.separator}>|</span>
          <a href="#">Chính sách bảo mật</a>
        </div>

        <p className={styles.copy}>
          ©Copyright © 2026 MYE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
