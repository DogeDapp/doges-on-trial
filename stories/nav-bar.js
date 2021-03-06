import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import NavBar from '../src/components/nav-bar'
import Button from '../src/components/button'
import NotificationBadge from '../src/components/notification-badge'
import Identicon from '../src/components/identicon'
import doge from '../src/assets/images/doge.jpg'

const now = Date.now()

storiesOf('Nav Bar', module).add('default', () => (
  <div style={{ width: '900px' }}>
    <NavBar
      routes={[
        { title: 'Doges', to: '/' },
        { title: 'How it Works', to: '/how-it-works' },
        { title: 'Crypto Meme', to: '/crypto-meme' },
        { title: 'Twitterverse', to: 'https://twitter.com', isExternal: true }
      ]}
      extras={[
        <Button key="0" type="ternary" size="small">
          Submit Doge
        </Button>,
        <NotificationBadge
          key="1"
          notifications={[
            {
              id: '0',
              date: new Date(now),
              message: 'This is a notification.',
              thumbnailURL: doge
            },
            {
              id: '1',
              date: new Date(now - 8.64e7),
              message: 'This is a notification.',
              thumbnailURL: doge
            },
            {
              id: '2',
              date: new Date(now - 6.048e8),
              message: 'This is a notification.',
              thumbnailURL: doge
            },
            {
              id: '3',
              date: new Date(now - 2.628e9),
              message: 'This is a notification.',
              thumbnailURL: doge
            },
            {
              id: '4',
              date: new Date(now - 1.577e10),
              message: 'This is a notification.',
              thumbnailURL: doge
            }
          ]}
          maxShown={4}
          onNotificationClick={action('onNotificationClick')}
          onShowAll={action('onShowAll')}
        >
          <Identicon address="Placeholder" round />
        </NotificationBadge>
      ]}
    />
  </div>
))
