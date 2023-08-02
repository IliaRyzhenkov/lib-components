import styled from 'styled-components'
import { IDisplay, IGlobal, IProportions } from '../models/global'

interface ICard extends IGlobal, IDisplay, IProportions {
  shadow?: string,
  shadowcolor?: string,
  br?: string,
  border?: string

}

interface ICardInner extends IGlobal, IDisplay, IProportions {
  textAlign?: 'left' | 'right' | 'center'
  border?: string
  flex?: string
}

export const Card = styled.article<ICard>`
height: ${(p) => p.h ?? '100%'};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};
display: ${(p) => p.display ?? 'flex'};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content:${(p) => p.justifycontent ?? 'space-between'};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
box-shadow: ${(p) => p.shadow ? `0px 0px 7px 3px ${p.shadowcolor ?? 'grey'}` : false};
color: ${(p) => p.color};
background: ${(p) => p.bg};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
`


export const CardHeader = styled.div<ICardInner>`
display: ${(p) => p.display };
justify-content:${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap };
flex-direction: ${(p) => p.flexDirection};
flex: ${(p) => p.flex};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

color: ${(p) => p.color};
background: ${(p) => p.bg};
border:${(p) => p.border};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '15px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
`
export const CardContent = styled.div<ICardInner>`
display: ${(p) => p.display};
justify-content:${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
flex: ${(p) => p.flex ?? 1};
text-align: ${(p) => p.textAlign};
height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};
color: ${(p) => p.color};
background: ${(p) => p.bg};
border:${(p) => p.border};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '15px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
`
export const CardFooter = styled.div<ICardInner>`

display: ${(p) => p.display};
justify-content:${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};

flex: ${(p) => p.flex};
text-align: ${(p) => p.textAlign};
height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};
color: ${(p) => p.color};
background: ${(p) => p.bg};
border:${(p) => p.border};
padding: ${(p) => p.p};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
`

