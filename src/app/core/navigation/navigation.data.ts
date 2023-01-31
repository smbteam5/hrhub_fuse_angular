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
        id: 'offers',
        title: 'Offers',
        type: 'basic',
        icon: 'offers',
        link: '/offers'
      },
      {
        id: 'onboarding',
        title: 'Onboarding',
        type: 'basic',
        icon: 'onboarding',
        link: '/onboarding-candidates'
      },
      {
        id: 'employees',
        title: 'Employees',
        type: 'basic',
        icon: 'employees',
        link: '/employees'
      },
      {
        id: 'leaves',
        title: 'Leaves',
        type: 'basic',
        icon: 'leaves',
        link: '/leaves'
      },
      {
        id: 'support-ticket',
        title: 'Support Tickets',
        type: 'basic',
        icon: 'tickets',
        link: '/support-ticket'
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'basic',
        icon: 'settings',
        link: '/settings'
      },
      {
        id: 'employee-management',
        title: 'Employee Management',
        type: 'basic',
        icon: 'management',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Events',
        type: 'basic',
        icon: 'events',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Upcoming Schedules',
        type: 'basic',
        icon: 'upcoming',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Schedule History',
        type: 'basic',
        icon: 'history',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Designation Management',
        type: 'basic',
        icon: 'designation',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Email Template',
        type: 'basic',
        icon: 'email',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'CMS Page Management',
        type: 'basic',
        icon: 'cms',
        link: '/employees-list'
      },
      {
        id: 'employee-management',
        title: 'Logout',
        type: 'basic',
        icon: 'logout',
        link: '/employees-list'
      }
    ]
  }
];