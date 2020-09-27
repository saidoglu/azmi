import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Register Document',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Internal Document',
        url: '/base/cards',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Normal',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Circulation',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Regularation',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Disision',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          }
        ]
      }
    ]
  },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
