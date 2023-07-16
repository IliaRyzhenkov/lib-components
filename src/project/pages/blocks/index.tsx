import React, { useState } from 'react';
import { Box, Container, } from '../../../my-lib/layout';
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Image } from '../../../my-lib/components/image';
import { H3, P, H1 } from '../../../my-lib/components/typography';
import { BtnLink, Button } from '../../../my-lib/components/buttons';
import { Popup } from '../../../my-lib/blocks/pop-up';


const Blocks = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [openAllow, setOpenAllow] = useState(false)

  function popupOpen() {
    setOpenPopup(!openPopup)
  }
  function popupAllow() {
    setOpenAllow(!openAllow)
  }
  return (
    <Container mt={'50px'}>
      <Box display='flex' justifycontent='flex-end'>
        <Button onClick={() => setOpenPopup(!openPopup)} hover='reverseBorder'>openPopup</Button>
        <Button onClick={() => setOpenAllow(!openAllow)} hover='reverseBorder'>openAllow</Button>
      </Box>
      <Popup openPopup={popupOpen} open={openPopup} mw='500px' eclipseOpacity='0.4'>
        <Card border={'1px solid #F6EFE8'} pb={'10px'} shadowcolor='#F6EFE8' >
          <CardHeader >
            <Image src='https://loremflickr.com/640/360' />
          </CardHeader>
          <CardContent pl={'10px'} pr={'10px'}>
            <H3 mb={'10px'}>Card Title</H3>
            <P lh={'1.4em'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto omnis ut illum sunt quae?</P>
          </CardContent>
          <CardFooter display={'flex'} p={'10px'} >
            <BtnLink mr={'10px'} hover={'reverseBorder'}>
              Read More
            </BtnLink>
            <BtnLink hover={'reverseBorder'}>
              Subscribe
            </BtnLink>
          </CardFooter>
        </Card>
      </Popup>
      <Popup openPopup={popupAllow} open={openAllow}>
        <Card shadow={'true'}>
          <CardHeader p='20px'>
            <H1>lorem ipsum</H1>
          </CardHeader>
          <CardContent p='20px' sx={'border-top: 1px solid grey'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, omnis?
          </CardContent>
          <CardFooter display='flex' p='20px'>
            <Button bg='orange' hover='reverseBorder'>allow</Button>
            <Button hover='reverseBorder'>close</Button>
          </CardFooter>
        </Card>
      </Popup>
    </Container>
  )
}
export default Blocks