import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.css'
import { Container, Row } from '../../my-lib/layout'
import { Button } from '../../my-lib/components/button'
import { Image, ImageAvatar } from '../../my-lib/components/image'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'


const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <Row py={25}>
          <ImageAvatar>
            <Image src="/headerIcon.jpg" alt="logo" />
          </ImageAvatar>
          <Menu className={style.menu}>
            <MenuItem><NavLink to={'/'}>Home</NavLink></MenuItem>
            <MenuItem><NavLink to={'/components'}>Components</NavLink></MenuItem>
            <MenuItem><NavLink to={'/blocks'}>Blocks</NavLink></MenuItem>
            <MenuItem><NavLink to={'/sections'}>Sections</NavLink></MenuItem>
          </Menu>
          <Button>Read More</Button>
        </Row>
      </Container>
    </header>
  )
}

export default Header