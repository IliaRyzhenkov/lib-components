import styled from 'styled-components'
import { IGlobal } from '../models/global'

export interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignItems?: 'center' | 'flex-end' | 'flex-start'
}
export interface IBox extends IRow {
  shadow?: string,
  br?: string,
  border?: string
}

export interface IContainer extends IBox {
  flex?: string,
  fullWidth?: boolean
}

export interface ISection extends IBox {
  flex?: string
}

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  spacing?: string
}

export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItems};
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
`

export const Container = styled.div<IContainer>`
  max-width: ${(p) => p.fullWidth ? '100%' : '1300px'};
  flex: ${(p) => p.flex};
  width: 100%;
  margin: auto;
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItems ?? 'center'};
  box-shadow:${(p) => p.shadow};
  border-radius: ${(p) => p.br};
  border:${(p) => p.border};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl ?? '15px'};
  padding-right: ${(p) => p.pr ?? '15px'};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
`

export const Col = styled.div<ICol>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignItems ?? 'center'};
box-shadow:${(p) => p.shadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
flex-wrap: wrap;
flex-basis: ${(p) => p.size == 1 ? `calc(8.3% - ${p.spacing ?? '15px'})` :
    p.size == 2 ? `calc(16.6% - ${p.spacing ?? '15px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '15px'})` :
        p.size == 4 ? `calc(33.3% - ${p.spacing ?? '15px'})` :
          p.size == 5 ? `calc(41.6% - ${p.spacing ?? '15px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '15px'})` :
              p.size == 7 ? `calc(58.3% - ${p.spacing ?? '15px'})` :
                p.size == 8 ? `calc(66.6% - ${p.spacing ?? '15px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '15px'})` :
                    p.size == 10 ? `calc(83.3% - ${p.spacing ?? '15px'})` :
                      p.size == 11 ? `calc(91.6% - ${p.spacing ?? '15px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '15px'})` :
                          'calc(100%)'
  };
 color: ${(p) => p.color};
 background: ${(p) => p.bg};
 padding: ${(p) => p.p};
 padding-top: ${(p) => p.pt};
 padding-bottom: ${(p) => p.pb};
 padding-left: ${(p) => p.pl};
 padding-right: ${(p) => p.pr};
 margin-top: ${(p) => p.mt};
 margin-bottom: ${(p) => p.mb};
 margin-left: ${(p) => p.ml};
 margin-right: ${(p) => p.mr};
`

export const Box = styled.div<IBox>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignItems ?? 'center'};
box-shadow:${(p) => p.shadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
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
`
export const Section = styled.section<ISection>`
flex: ${(p) => p.flex};
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignItems ?? 'center'};
box-shadow:${(p) => p.shadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
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
`