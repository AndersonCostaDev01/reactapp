import styled from "styled-components";

import {props} from '.'

export const Title = styled.h3<props> `
  color: ${props => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
