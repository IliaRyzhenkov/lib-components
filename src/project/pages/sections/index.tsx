import React, { useState } from 'react';
import { Tab, Tabs, TabsContent, TabsWrapper } from '../../../my-lib/blocks/tabs';


const Sections = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const dataTabs = [
    {
      tab: 'tab 0',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga aspernatur atque impedit eligendi magni odio quidem ab odit earum.'
    },
    {
      tab: 'tab 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eoodio quidem ab odit earum.'
    },
    {
      tab: 'tab 2',
      content: 'Lorem ipsum dolor sit t eligendi magni odio quidem ab odit earum.'
    },
    {
      tab: 'tab 3',
      content: 'Lorem ipsum dolor sit '
    },
  ]
  return (
    <TabsWrapper mw='600px' m='auto' bg='orange' p='20px' mt='35px' color='white' shadow='true'>
      <Tabs p='10px' sx='border-bottom:2px solid white; text-transform: uppercase' mb='20px'>
        {
          dataTabs.map((tab, index) =>(
          index === tabIndex 
          ?

          
            <Tab className='active'
              onClick={() => setTabIndex(index)}
              key={index}
            >{tab.tab}</Tab>
            :
            <Tab 
            onClick={() => setTabIndex(index)}
            key={index}
          >{tab.tab}</Tab>
            ))
        }
      </Tabs>

      {
        dataTabs.map((content, index) => (
          index === tabIndex ?
            <TabsContent p='20px' index={index} key={index}>
              {content.content}
            </TabsContent> : false
        ))
      }
    </TabsWrapper>
  )
}
export default Sections