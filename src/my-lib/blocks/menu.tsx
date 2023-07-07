import styled from 'styled-components'
import { IGlobal } from '../moduls/global'


interface IMenu {
  display?: 'flex' | 'block',
}

interface IMenuItem extends IGlobal {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fontSize?: string,
  letterSpacing?: string,


}

export const Menu = styled.ul<IMenu>`
display: ${(props) => props.display ?? 'flex'};
align-items: center;
`

export const MenuItem = styled.li<IMenuItem>`
margin:
${(p) => p.mt ?? 0},
${(p) => p.mr ?? '20px'},
${(p) => p.mb ?? 0},
${(p) => p.ml ?? 0},
;
font-size: ${(p) => p.fontSize};
letter-spacing: ${(p) => p.letterSpacing};
text-transform: ${(p) => p.textTransform};

a{
  color:${(p) => p.color};
  text-decoration: none;
  text-transform: ${(p) => p.textTransform};
}
`