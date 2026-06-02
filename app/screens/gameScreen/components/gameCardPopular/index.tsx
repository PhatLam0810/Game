'use client';
import { Card } from 'antd';
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './styles.module.scss';

type GameCardPopularProps = {
  title: string;
  category: string;
  image: string;
  status: string;
};

const GameCardPopular: React.FC<GameCardPopularProps> = ({
  title,
  category,
  image,
}) => {
  return (
    <div className={styles.container}>
      <Card className={styles.card} hoverable bodyStyle={{ padding: 0 }}>
        <div className={styles.cover}>
          <Image src={image} alt={title} fill className={styles.image} />
          <div className={styles.coverOverlay} />
          <div className={styles.badge}>
            <Image src={image} alt="HOT" fill className={styles.badgeImage} />
          </div>
          <div className={styles.coverContent}>
            <div className={styles.header}>
              <div className={styles.title}>{title}</div>
              <div className={styles.subTitle}>{category}</div>
            </div>

            <div className={styles.footer}>
              <button type="button" className={styles.actionButton}>
                <HomeOutlined />
                <p className={styles.actionText}>Trang Chủ</p>
              </button>
              <div className={styles.borderRight} />
              <button type="button" className={styles.actionButton}>
                <DownloadOutlined />
                <p className={styles.actionText}>Tải xuống</p>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default GameCardPopular;
