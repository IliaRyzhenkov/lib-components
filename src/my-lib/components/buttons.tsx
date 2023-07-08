import styled from 'styled-components'
import { IGlobal } from '../models/global'


interface IButton extends IGlobal {
 
}

export const Button = styled.button<IButton>`
  border-style: none;
  border-radius: 5px;
  border: 1px solid #2f80ed;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  min-height: 45px;
  outline: none;
  transition: all .3s;
  box-shadow: none;
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
   &:hover {
    background-color: white;
    color:#2f80ed;
   }
`