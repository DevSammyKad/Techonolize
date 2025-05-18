import { LuLayoutDashboard } from 'react-icons/lu';
import HomeIcon from '../assets/HomeIcon.png';
import { FaRegUser } from 'react-icons/fa';
import { GrChat } from 'react-icons/gr';
import { MdOutlineWallet } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FaRegCompass } from 'react-icons/fa';
import { FaBuffer } from 'react-icons/fa';

export const SidebarList = [
  { path: '/dashboard', icon: LuLayoutDashboard, heading: 'Dashboard' },
  { path: '/discover', icon: FaRegCompass, heading: 'Discover' },
  { path: '/profile', icon: FaRegUser, heading: 'Profile' },
  { path: '/projects', icon: FaBuffer, heading: 'Projects' },

  { path: '/chat', icon: GrChat, heading: 'Chat' },
  { path: '/wallet', icon: MdOutlineWallet, heading: 'Wallet' },
  { path: '/upgrade', icon: FiSettings, heading: 'Upgrade' },
];
export const NavbarList = [
  {
    path: '/',
    icon: HomeIcon,
    heading: 'Find Talent ',
  },
  { path: '/', icon: 'LuLayoutDashboard', heading: 'Inspiration' },
  { path: '/', icon: 'LuLayoutDashboard', heading: 'Projects' },
  { path: '/', icon: 'LuLayoutDashboard', heading: 'Discover' },
  { path: '/', icon: 'LuLayoutDashboard', heading: 'Jobs' },
  { path: '/', icon: 'LuLayoutDashboard', heading: 'Go Pro ' },
];
