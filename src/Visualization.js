import React from 'react'
import Timeline from 'react-visjs-timeline'

const options = {
  width: '100%',
  maxHeight: '500px',
  stack: true,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000000,
  type: 'box',
  format: {
    minorLabels: {
      minute: 'h:mma',
      hour: 'ha'
    }
  }
}

const items = [{
    start: new Date(2010, 7, 15),
    content: 'Item 1',
    group: 1
  },
  {
    start: new Date(2010, 8, 15),
    content: 'Item 2',
    group: 1
  },
  {
    start: new Date(2010, 9, 15),
    content: 'Item 3',
    group: 1
  }
]

  const groups = [{
    id: 1,
  }]

const Visualization = () => {

return (

<Timeline options={options} 

items={items}
groups={groups}
/>
)

}

export default Visualization
