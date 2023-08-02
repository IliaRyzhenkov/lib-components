export interface IGlobal {
  p?:string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  m?:string,
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  bg?: string,
  color?: string,
  sx?: string
}


export interface IDisplay {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export interface IProportions {
  h?: string
  w?: string
  minH?: string
  minW?: string
  maxH?: string
  maxW?: string
}