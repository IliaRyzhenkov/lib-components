import styled from 'styled-components'


interface IMenu {
  display: 'flex' | 'block',
}

interface IMenuItem {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fontSize?: string,
  letterSpacing?: string,
  color?: string,
  mr?: number,
  mt?: number,
  mb?: number,
  ml?: number,

}

export const Menu = styled.ul<IMenu>`
display: ${(props) => props.display};
align-items: center;
`

export const MenuItem = styled.li<IMenuItem>`
margin:
${(p) => p.mt ?? 0}px 
${(p) => p.mr ?? 20}px 
${(p) => p.mb ?? 0}px 
${(p) => p.ml ?? 0}px
;
font-size: ${(p) => p.fontSize};
letter-spacing: ${(p) => p.letterSpacing};
a{
  color:${(p) => p.color};
  text-decoration: none;
  text-transform: ${(p) => p.textTransform};
}
`