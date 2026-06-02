import { MY_ICON, GIFT_ICON, CROWN_ICON, PROFILE_ICON } from './icons';

export const COLORS = {
  primary: '#093A88',
  active: '#FF7900',
  background: '#FFFFFF',
  border: '#dce4f2',
  muted: '#64748b',
  text: '#093A88',
};

export const NAV_ITEMS = [
  { label: 'Trang Chủ', active: false },
  { label: 'Trò Chơi', active: true },
  { label: 'Nạp Game', active: false },
  { label: 'Tin Tức', active: false },
  { label: 'Hỗ Trợ', active: false },
];

export const SERVICE_CARDS = [
  { title: 'MYE COIN', icon: MY_ICON },
  { title: 'GIFT CODE', icon: GIFT_ICON },
  { title: 'VIP CLUB', icon: CROWN_ICON },
  { title: 'TÀI KHOẢN', icon: PROFILE_ICON },
];

export const FILTERS = [
  { label: 'Tất cả', count: 60 },
  { label: 'Simulation', count: 4 },
  { label: 'Action', count: 11 },
  { label: 'RPG', count: 37 },
  { label: 'Shooting', count: 5 },
  { label: 'Racing', count: 1 },
];

export const GAME_LIST = [
  {
    title: 'Hào Khí Tam Quốc',
    category: 'RPG',
    status: 'HOT',
    badge: 'HOT',
    image: '/images/GAME NỔI BẬT (1).png',
  },
  {
    title: 'Boom Tank',
    category: 'Action',
    status: 'MỚI',
    badge: 'HOT',
    image: '/images/GAME NỔI BẬT (3).png',
  },
  {
    title: 'Hào Khí Du Hiệp',
    category: 'Racing',
    status: 'NEW',
    badge: 'GAME MỚI',
    image: '/images/GAME NỔI BẬT (4).jpg',
  },
  {
    title: 'Phi Long Chiến',
    category: 'Shooting',
    status: 'MỚI',
    badge: 'NEW',
    image: '/images/GAME NỔI BẬT (5).jpg',
  },
  {
    title: 'Đấu Trường Thép',
    category: 'Action',
    status: 'HOT',
    badge: 'HOT',
    image: '/images/GAME NỔI BẬT (1).png',
  },
  {
    title: 'Tướng Quân',
    category: 'Simulation',
    status: 'MỚI',
    badge: 'NEW',
    image: '/images/GAME NỔI BẬT (3).png',
  },
  {
    title: 'Huyết Quốc',
    category: 'RPG',
    status: 'TREND',
    badge: 'HOT',
    image: '/images/GAME NỔI BẬT (4).jpg',
  },
  {
    title: 'Phi Long Chiến',
    category: 'Shooting',
    status: 'MỚI',
    badge: 'NEW',
    image: '/images/GAME NỔI BẬT (5).jpg',
  },
];

export const NEW_RELEASES = [
  {
    title: 'Hào Khí Chiến Hồn',
    category: 'RPG',
    status: 'HOT',
    description: 'Phiên bản cập nhật mới nhất.',
    image: '/images/GAME NỔI BẬT (2).png',
  },
  {
    title: 'Boom Tank',
    category: 'Action',
    status: 'HOT',
    description: 'Chế độ bắn mới.',
    image: '/images/GAME NỔI BẬT (3).png',
  },
  {
    title: 'Hào Khí Tam Quốc',
    category: 'Strategy',
    status: 'NEW',
    description: 'Thêm bản đồ mới.',
    image: '/images/GAME NỔI BẬT (1).png',
  },
  {
    title: 'Hào Khí Du Hiệp',
    category: 'Adventure',
    status: 'NEW',
    description: 'Cốt truyện mở rộng.',
    image: '/images/GAME NỔI BẬT (4).jpg',
  },
];

export const SPOTLIGHT_GAMES = [
  {
    title: 'Hào Khí Chiến Hồn',
    description: 'Phiên bản cập nhật mới nhất.',
    tag: 'GAME NỔI BẬT',
  },
  {
    title: 'Hào Khí Du Hiệp',
    description: 'Cốt truyện mới mở rộng.',
    tag: 'GAME NỔI BẬT',
  },
  {
    title: 'Hào Khí Tam Quốc',
    description: 'Thách thức chiến thuật sâu sắc.',
    tag: 'GAME NỔI BẬT',
  },
];
