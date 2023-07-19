import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface IInput extends InputHTMLAttributes<HTMLInputElement>, IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
  br?: string
  border?: string
  fs?: string
  ls?: string
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  w?: string
  placeholderColor?: string
}

interface ITExtarea extends IInput{
  h?: string
  minH?: string
}

interface IForm extends IGlobal{
  shadow?: string,
  shadowcolor?: string,
  br?: string,
  border?: string
  w?: string
  maxW?: string
}


export const Input = styled.input<IInput>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
  outline: none;
  width: ${(p) => p.w ?? '100%'};
  font-size: ${(p) => p.fs};
  color: ${(p) => p.color};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  background: ${(p) => p.bg};
  border:${(p) => p.border ?? '1px solid #ccc'};
  border-radius:${(p) => p.br};
  padding: ${(p) => p.p ?? '12px 14px'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb ?? '10px'};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
  &::placeholder{
    color:${(p) => p.placeholderColor ?? '#ccc'};
  }
`
export const Textarea = styled.textarea<ITExtarea>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
  outline: none;
  resize: none;
  width: ${(p) => p.w ?? '100%'};
  height: ${(p) => p.h};
  min-height: ${(p) => p.minH};
  font-size: ${(p) => p.fs};
  color: ${(p) => p.color};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  background: ${(p) => p.bg};
  border:${(p) => p.border ?? '1px solid #ccc'};
  border-radius:${(p) => p.br};
  padding: ${(p) => p.p ?? '12px 14px'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb ?? '10px'};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
  &::placeholder{
    color:${(p) => p.placeholderColor ?? '#ccc'};
  }
`
export const Form = styled.form<IForm>`
  border-radius: ${(p) => p.br};
  border:${(p) => p.border};
  box-shadow: ${(p) => p.shadow ? `0px 0px 7px 3px ${p.shadowcolor ?? 'grey'}` : false};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  width: ${(p) => p.w};
  max-width: ${(p) => p.maxW};
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