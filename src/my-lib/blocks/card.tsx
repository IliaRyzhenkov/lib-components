import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface ICard extends IGlobal {
  shadow?: string,
  shadowcolor?: string,
  br?: string,
  border?: string
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
}

interface ICardInner extends IGlobal {
  textAlign?: 'left' | 'right' | 'center'
  minH?: string
  height?: string
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
  border?: string
  flex?: string
}

export const Card = styled.article<ICard>`
height: 100%;
display: ${(p) => p.display ?? 'flex'};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content:${(p) => p.justifycontent ?? 'space-between'};
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
justify-content: ${(p) => p.justifycontent};
display: ${(p) => p.display};
align-items: ${(p) => p.alignitems};
flex: ${(p) => p.flex};
text-align: ${(p) => p.textAlign};
min-height: ${(p) => p.minH};
height: ${(p) => p.height};
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
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};
flex: ${(p) => p.flex ?? 1};
text-align: ${(p) => p.textAlign};
min-height: ${(p) => p.minH};
height: ${(p) => p.height};
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
justify-content: ${(p) => p.justifycontent};
display: ${(p) => p.display};
align-items: ${(p) => p.alignitems};
flex: ${(p) => p.flex};
text-align: ${(p) => p.textAlign};
min-height: ${(p) => p.minH};
height: ${(p) => p.height};
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

