import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Container, Row } from '../../my-lib/layout'
import { Button } from '../../my-lib/components/button'
import { Image, ImageAvatar } from '../../my-lib/components/image'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'
import { LHeader } from '../../my-lib/sections/header'

const menuItems = [
  { link: '/', name: 'Home' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {
  return (
    <LHeader bg={'#F6EFE8'}>
      <Container>
        <Row pt={'15px'} pb={'15px'}>
          <Box display={'flex'}>
          <ImageAvatar shadow shadowColor={'pink'} size={'70px'} mr={'20px'}>
            <Image src="/headerIcon.jpg" alt="logo" />
          </ImageAvatar>
          <Menu display={'flex'} >
            {
              menuItems.map((e) => (
                <MenuItem key={e.link} fontSize={'18px'} color={'black'} letterSpacing={'1px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
              ))
            }

          </Menu>
          </Box>
          <Button>Read More</Button>
        </Row>
      </Container>
    </LHeader>
  )
}

export default Header