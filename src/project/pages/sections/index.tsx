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
      tab: 'tab 1 ',
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
    <TabsWrapper mw='600px' m='55px auto' >
      <Tabs fullW='true'>
        {
          dataTabs.map((tab, index) => (
            index === tabIndex
              ?
              <Tab active='default'tabs='classic'  mb='-1px'
                onClick={() => setTabIndex(index)}
                key={index}
              >{tab.tab}</Tab>
              :
              <Tab tabs='underline'
                onClick={() => setTabIndex(index)}
                key={index}
              >{tab.tab}</Tab>
          ))
        }
      </Tabs>

      {
        dataTabs.map((content, index) => (
          index === tabIndex ?
            <TabsContent bg='white' border='1px solid' p='20px' key={index}>
              {content.content}
            </TabsContent> : false
        ))
      }
    </TabsWrapper>
  )
}
export default Sections