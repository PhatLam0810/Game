'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import GameHeader from '../../components/header';
import GameFooter from '../../components/footer';
import { GameCard, GameCardPopular } from './components';
import styles from './styles.module.scss';
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
    const filtered =
      activeFilter === 'Tất cả'
        ? GAME_LIST
        : GAME_LIST.filter(game => game.category === activeFilter);

    return showMore ? filtered : filtered.slice(0, 4);
  }, [activeFilter, showMore]);
  console.log('filteredGames', filteredGames);
  return (
    <div className={styles.page}>
      <GameHeader />

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.titleBlock}>
            <p className={styles.subTitle}>DỊCH VỤ</p>
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
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subTitle}>DANH SÁCH GAME</p>
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
                <span
                  className={`${styles.filterCount} ${
                    activeFilter === filter.label ? styles.activeCount : ''
                  }`}>
                  {filter.count}
                </span>
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
            </div>
            <Button type="link" className={styles.viewMoreButton}>
              Xem thêm
            </Button>
          </div>
          <div className={styles.cardGrid}>
            {NEW_RELEASES.map(game => (
              <div key={game.title} className={styles.cardItem}>
                <GameCard badge={''} {...game} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.subTitle}>GAME NỔI BẬT</p>
            </div>
          </div>
          <div className={styles.spotlightGrid}>
            {SPOTLIGHT_GAMES.map(item => (
              <div key={item.title} className={styles.cardItem}>
                <GameCardPopular {...item} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <GameFooter />
    </div>
  );
}
