import styled from 'styled-components'

export const Menu = styled.ul`
display: flex;
align-items: centr;
`



export const MenuItem = styled.li`
margin-left: 20px;
font-size: 16px;
letter-spacing: 1px;
&:first-child{
  margin-left:0;
}
a{
  text-decoration: none;
  text-transform: uppercase;
}
`