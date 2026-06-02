'use client';
import { Card, Typography } from 'antd';
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './styles.module.scss';
import { GameHot } from '@/public/images';

type GameCardProps = {
  title: string;
  description?: string;
  category: string;
  image: string;
  status: string;
  badge: string;
};

const { Title, Paragraph } = Typography;

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  category,
  image,
  status,
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
          <Title level={4} className={styles.title}>
            {title}
          </Title>
          <div className={styles.subTitle}>{category ?? 'THỂ LOẠI'}</div>
          {description ? (
            <Paragraph className={styles.description}>{description}</Paragraph>
          ) : null}
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
            <HomeOutlined /> Trang Chủ
          </button>
          <button type="button" className={styles.actionButton}>
            <DownloadOutlined /> Tải xuống
          </button>
        </div>
      </Card>
    </div>
  );
};
export default GameCard;
