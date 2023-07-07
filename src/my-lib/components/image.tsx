import styled from 'styled-components'
import { IGlobal } from '../moduls/global'

interface IAvatar extends IGlobal {
  br?: string,
  shadow?: boolean,
  shadowColor?: string,
  size?: string,
  fontSize?: string
}


export const ImageAvatar = styled.div<IAvatar>`
  width: ${(p) => p.size ?? 50};
  height: ${(p) => p.size ?? 50};
  border-radius: ${(p) => p.br ?? '50%'};
  color:${(p) => p.color};
  font-size: ${(p) => p.fontSize ?? "16px"};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.bg};
  box-shadow: ${(p) => p.shadow
    ?
    `0px 0px 9px ${p.shadowColor ?? 'grey'}`
    :
    false};
  padding:
    ${(p) => p.pt ?? 0} 
    ${(p) => p.pr ?? 0}
    ${(p) => p.pb ?? 0} 
    ${(p) => p.pl ?? 0};
  margin:
    ${(p) => p.mt ?? 0} 
    ${(p) => p.mr ?? 0} 
    ${(p) => p.mb ?? 0} 
    ${(p) => p.ml ?? 0}; 
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`