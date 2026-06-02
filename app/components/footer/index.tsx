import styles from './styles.module.scss';

export default function GameFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.brandTitle}>myE Game Portal</span>
          <span className={styles.brandSub}>
            © 2026 myE. Tất cả quyền được bảo lưu.
          </span>
        </div>
        <div className={styles.links}>
          <a className={styles.link} href="#">
            Chính sách
          </a>
          <a className={styles.link} href="#">
            Liên hệ
          </a>
          <a className={styles.link} href="#">
            Hỗ trợ
          </a>
        </div>
      </div>
    </footer>
  );
}
