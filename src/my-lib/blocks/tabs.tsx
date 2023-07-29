import styled from 'styled-components'
import { IGlobal } from '../models/global'




interface ITabsWrapper extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  w?: string
  h?: string
  mw?: string
  mh?: string
  shadow?: string,
  shadowcolor?: string,
  br?: string,
  border?: string
}

interface ITabs extends ITabsWrapper {
  fullW?: string
}

interface ITab extends IGlobal {
  active?: string | 'default'
  tabs?: 'underline' | 'classic' | 'modern'

}

interface ITabsContent extends ITabsWrapper {
  shadow?: string,
  shadowcolor?: string,
  br?: string,
  border?: string
}


export const TabsWrapper = styled.section<ITabsWrapper>`
width: ${(p) => p.w};
  height: ${(p) => p.h};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  display: ${(p) => p.display};
  flex-wrap: ${(p) => p.flexWrap};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
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
  ${(p) => p.sx};
`
export const Tabs = styled.ul<ITabs>`
  width: ${(p) => p.w};
  height: ${(p) => p.h};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  display: ${(p) => p.display ?? 'flex'};
  flex-wrap: ${(p) => p.flexWrap};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
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
  li{
  ${(p) => p.fullW ? 'flex: 1 1 auto' : false};
    }
`
export const Tab = styled.li<ITab>`
  cursor: pointer;
  ${(p) => p.tabs === 'classic' ? `
    padding: 15px 20px ;
    background: #eee;  
    text-align: center;
    ${p.active === 'default' ? 'background: #ccc' : p.active}
    `
    : false};
    ${(p) => p.tabs === 'underline' ? `
    padding: 15px 20px ;
    
    text-align: center;
    ${p.active === 'default' ? 'border-bottom: 2px solid ; ' : p.active}
    `
    : false};

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
export const TabsContent = styled.div<ITabsContent>`
  width: ${(p) => p.w};
  height: ${(p) => p.h};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  display: ${(p) => p.display};
  flex-wrap: ${(p) => p.flexWrap};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
  border-radius: ${(p) => p.br};
  border:${(p) => p.border}; 
  color: ${(p) => p.color};
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





