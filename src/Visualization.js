import React, {useState} from 'react'
import Timeline from 'react-visjs-timeline'



const initialItems = [{
    start: new Date(2010, 7, 15),
    content: 'Item 1',
    group: 1
  },
]

  const groups = [{
    id: 1,
  }]

  // const getNewItem = (start) =>{
  //   return {
  //     start,
  //     content: 'Item 3',
  //     group: 1
  //   }
  // }

  // const Event = (item) => {
  //   return '<h1>' +item.start + '</h1><p>' + item.description + '</p>';
  // }


  const Visualization = () => {
    const [items, setItems] = useState(initialItems)
  const options = {
    width: '100%',
    maxHeight: '500px',
    stack: true,
    showMajorLabels: true,
    showCurrentTime: true,
    zoomMin: 1000000,
    type: 'box',
    template: function (item, element, data) {
      return '<h1>' +item.start + '</h1><p>' + item.description + '</p>';
    },
    editable: {
      add: true,         
      updateTime: true, 
      updateGroup: true, 
      remove: true,      
      overrideItems: false  
    },
    onAdd: function (item, callback) {
      handleAdd(item);
    },
    format: {
      minorLabels: {
        minute: 'h:mma',
        hour: 'ha'
      }
    }
  }

  const handleAdd = (item) => {
    setItems([...items, item])
  }

return (

<Timeline options={options} 
items={items}
groups={groups}
/>
)

}

export default Visualization
