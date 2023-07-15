import React from 'react';
import { Container, } from '../../../my-lib/layout';
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Image } from '../../../my-lib/components/image';
import { H3, P } from '../../../my-lib/components/typography';
import { BtnLink } from '../../../my-lib/components/buttons';
import { Popup } from '../../../my-lib/blocks/pop-up';


const Blocks = () => {
  return (
    <Container mt={'50px'}>
      <Popup open mw='500px' eclipseOpacity='0.4'> 
        <Card border={'1px solid #F6EFE8'} pb={'10px'} shadow shadowColor='#F6EFE8' >
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
    </Container>
  )
}
export default Blocks