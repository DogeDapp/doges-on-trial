import React from 'react'
import { storiesOf } from '@storybook/react'

import MasonryGrid from '../src/components/masonry-grid'

const bricks = [...new Array(100)].map((_, i) => (
  <div
    key={i}
    style={{
      alignItems: 'center',
      background: '#3d464d',
      border: '2px solid #f5f8fa',
      display: 'flex',
      height: `${100 + ((i ** i % 100) / 100) * 200}px`,
      justifyContent: 'center',
      width: '200px'
    }}
    masonryGridFilterValues={[i % 2 === 0 ? 'even' : 'odd']}
    masonryGridSortValues={{ index: i }}
  >
    BRICK {i}
  </div>
))
const createRenderMasonryGridStory = ({ filter, sort } = {}) => () => (
  <div style={{ height: '400px', overflowY: 'scroll' }}>
    <MasonryGrid filter={filter} sort={sort} style={{ color: '#fff' }}>
      {bricks}
    </MasonryGrid>
  </div>
)

storiesOf('Masonry Grid', module)
  .add('default', createRenderMasonryGridStory())
  .add('filter odds', createRenderMasonryGridStory({ filter: ['even'] }))
  .add('filter evens', createRenderMasonryGridStory({ filter: ['odd'] }))
  .add(
    'sort ascending',
    createRenderMasonryGridStory({ sort: { index: 'ascending' } })
  )
  .add(
    'sort descending',
    createRenderMasonryGridStory({ sort: { index: 'descending' } })
  )
