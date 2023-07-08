import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface IP extends IGlobal {
  fs?: string,
  ls?: string,
  fw?: number
}

export const P = styled.p<IP>`
 font-size: ${(p) => p.fs ?? '14px'};
 font-weight: ${(p) => p.fw ?? 400};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H1 = styled.h1<IP>`
 font-size: ${(p) => p.fs ?? '40px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H2 = styled.h2<IP>`
 font-size: ${(p) => p.fs ?? '36px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H3 = styled.h3<IP>`
 font-size: ${(p) => p.fs ?? '30px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H4 = styled.h4<IP>`
 font-size: ${(p) => p.fs ?? '26px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H5 = styled.h5<IP>`
 font-size: ${(p) => p.fs ?? '22px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const H6 = styled.h6<IP>`
 font-size: ${(p) => p.fs ?? '18px'};
 font-weight: ${(p) => p.fw ?? 500};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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
export const Span = styled.span<IP>`
 font-size: ${(p) => p.fs};
 font-weight: ${(p) => p.fw ?? 400};
 letter-spacing: ${(p) => p.ls ?? 'inherit'};
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