'use client';
import { Card, Typography } from 'antd';
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './GameCard.module.scss';

type GameCardProps = {
  title: string;
  description?: string;
  category: string;
  status: string;
  badge?: string;
  image: string;
};

const { Text, Title, Paragraph } = Typography;

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  category,
  status,
  badge,
  image,
}) => {
  return (
    <Card className={styles.card} bodyStyle={{ padding: 0 }} hoverable>
      <div className={styles.cover}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 640px) 100vw, 360px"
        />
        <div className={styles.coverOverlay} />
        <div className={styles.badge}>{badge ?? status}</div>
        <div className={styles.category}>{category}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <Text type="secondary">{status}</Text>
          <span className={styles.actionTag}>Xem game</span>
        </div>
        <Title level={4} className={styles.title}>
          {title}
        </Title>
        <Paragraph className={styles.description}>{description}</Paragraph>
        <div className={styles.footer}>
          <button type="button" className={styles.actionButton}>
            <HomeOutlined /> Trang Chủ
          </button>
          <button type="button" className={styles.actionButton}>
            <DownloadOutlined /> Tải xuống
          </button>
        </div>
      </div>
    </Card>
  );
};
export default GameCard;
