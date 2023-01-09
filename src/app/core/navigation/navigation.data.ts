import { FuseNavigationItem } from '@fuse/components/navigation';

export const navigationItems: FuseNavigationItem[] = [
  {
    id: 'main',
    title: 'Main',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/dashboard'
      },
      {
        id: 'user',
        title: 'User',
        type: 'basic',
        icon: 'heroicons_outline:users',
        link: '/user'
      }
    ]
  },
  {
    id: 'others',
    title: 'Others',
    type: 'group',
    children: [
      {
        id: 'settings',
        title: 'Settings',
        type: 'basic',
        icon: 'settings',
        link: '/settings'
      },
      {
        id: 'template',
        title: 'Email Template',
        type: 'basic',
        icon: 'email',
        link: '/template'
      },
      {
        id: 'cms-page-management',
        title: 'CMS Page Management',
        type: 'basic',
        icon: 'pages',
        link: '/cms-page-management'
      },
      {
        id: 'support-ticket',
        title: 'Support Ticket',
        type: 'basic',
        icon: 'pages',
        link: '/support-ticket'
      },
     
    ]
  }
];