'use client';
import { Card } from 'antd';
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './styles.module.scss';
import { GameHot } from '@/public/images';

type GameCardProps = {
  title: string;
  category: string;
  image: string;
  status: string;
  badge: string;
};

const GameCard: React.FC<GameCardProps> = ({
  title,
  category,
  image,
  badge,
}) => {
  return (
    <div className={styles.container}>
      {badge === 'HOT' && (
        <Image
          src={GameHot}
          width={80}
          height={120}
          alt={title}
          className={styles.badge}
        />
      )}

      <Card className={styles.card} hoverable>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{category}</div>
        </div>

        <div className={styles.cover}>
          <div className={styles.cornerFlag} aria-hidden />
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 640px) 100vw, 360px"
          />
          <div className={styles.coverOverlay} />
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.actionButton}>
            <HomeOutlined />
            <p className={styles.actionText}>Trang Chủ</p>
          </button>
          <div className={styles.borderRight}></div>
          <button type="button" className={styles.actionButton}>
            <DownloadOutlined />
            <p className={styles.actionText}>Tải xuống</p>
          </button>
        </div>
      </Card>
    </div>
  );
};
export default GameCard;
