'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import GameHeader from '../../components/header/GameHeader';
import GameFooter from '../../components/foodter/GameFooter';
import { GameCard } from './components';
import styles from './page.module.scss';
import {
  FILTERS,
  SERVICE_CARDS,
  GAME_LIST,
  NEW_RELEASES,
  SPOTLIGHT_GAMES,
} from '../../constants';

export default function GameScreen() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [showMore, setShowMore] = useState(false);

  const filteredGames = useMemo(() => {
    const data = showMore ? GAME_LIST : GAME_LIST.slice(0, 4);
    return activeFilter === 'Tất cả'
      ? data
      : data.filter(game => game.category === activeFilter);
  }, [activeFilter, showMore]);

  return (
    <div className={styles.page}>
      <GameHeader />

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.titleBlock}>
            <p className={styles.label}>DỊCH VỤ</p>
            <h1>Game portal giống giao diện MyE.</h1>
            <p className={styles.lead}>
              Nền trắng, chữ xanh, active cam và danh sách game mở rộng khi bấm
              Xem thêm.
            </p>
          </div>

          <div className={styles.serviceBar}>
            {SERVICE_CARDS.map(service => (
              <div key={service.title} className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                  />
                </div>
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subTitle}>DANH SÁCH GAME</p>
              <h2>Danh sách game</h2>
            </div>
            <Button
              type="link"
              className={styles.viewMoreButton}
              onClick={() => setShowMore(prev => !prev)}>
              {showMore ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>

          <div className={styles.filterBar}>
            {FILTERS.map(filter => (
              <button
                key={filter.label}
                type="button"
                className={`${styles.filterButton} ${
                  activeFilter === filter.label ? styles.activeFilter : ''
                }`}
                onClick={() => setActiveFilter(filter.label)}>
                <span>{filter.label}</span>
                <span className={styles.filterCount}>{filter.count}</span>
              </button>
            ))}
          </div>

          <div className={styles.cardGrid}>
            {filteredGames.map((game, index) => (
              <div key={`${game.title}-${index}`} className={styles.cardItem}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subTitle}>GAME MỚI PHÁT HÀNH</p>
              <h2>Ra mắt và sắp ra mắt</h2>
            </div>
            <Button type="link" className={styles.viewMoreButton}>
              Xem thêm
            </Button>
          </div>
          <div className={styles.cardGrid}>
            {NEW_RELEASES.map(game => (
              <div key={game.title} className={styles.cardItem}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subTitle}>GAME NỔI BẬT</p>
              <h2>Top game đáng chơi</h2>
            </div>
          </div>
          <div className={styles.spotlightGrid}>
            {SPOTLIGHT_GAMES.map(item => (
              <div key={item.title} className={styles.spotlightCard}>
                <div className={styles.spotlightTag}>{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <GameFooter />
    </div>
  );
}
