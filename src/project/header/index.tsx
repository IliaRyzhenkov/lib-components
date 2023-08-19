import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from '../../my-lib/layout';
import { Menu, MenuItem } from '../../my-lib/blocks/menu';
import { LHeader } from '../../my-lib/sections/header';
import { Button } from '../../my-lib/components/buttons';
import { Theme } from '../store/theme';
import { Switch, SwitchWrapper } from '../../my-lib/components/switcher';


const menuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]
const Header = () => {

  const [switchBtn, setSwitchBtn] = useState(true)

  return (
    <LHeader minH='86px'>
      <Row alignitems='center' sx='height:100%' p='20px 40px'>
        <Menu>
          {
            menuItems.map((e) => (
              <MenuItem key={e.link} fs={'18px'} color={'white'} ls={'1px'} mr={'20px'}><NavLink to={e.link}>{e.name}</NavLink></MenuItem>
            ))
          }
        </Menu>
        <Button >Read More</Button>
          <SwitchWrapper w='50px' active={`${switchBtn}`} onClick={() => (setSwitchBtn(!switchBtn), Theme.setCurrentTheme(switchBtn))}>
            <Switch />
          </SwitchWrapper>
      </Row>
    </LHeader>
  )
}
export default Header


