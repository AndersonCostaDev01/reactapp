import styled from "styled-components";

import {props} from '.'

export const P = styled.p<props> `
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')} ;
  line-height: 22px;

`
