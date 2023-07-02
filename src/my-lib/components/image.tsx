import styled from 'styled-components'
import { IGlobal } from '../moduls/global'

interface IAvatar extends IGlobal{
  br?:string,
  shadow?:boolean,
  shadowColor?:string,
  size?: number
}


export const ImageAvatar = styled.div<IAvatar>`
  width: ${(p) => p.size ?? 50}px;
  height: ${(p) => p.size ?? 50}px;
  border-radius: ${(p) => p.br ?? '50%'};
  color:${(p) => p.color};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.bg};
  box-shadow: ${(p) => p.shadow 
   ?
   `0px 0px 9px ${p.shadowColor ?? 'grey' }` 
   : 
   false};
  padding:
    ${(p) => p.pt ?? 0}px 
    ${(p) => p.pr ?? 0}px 
    ${(p) => p.pb ?? 0}px 
    ${(p) => p.pl ?? 0}px;
  margin:
    ${(p) => p.mt ?? 0}px 
    ${(p) => p.mr ?? 0}px 
    ${(p) => p.mb ?? 0}px 
    ${(p) => p.ml ?? 0}px; 
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`