import styled from 'styled-components';
import { ISpace } from './space';

const StyledSpace = styled.div<ISpace>`
    width: ${props => props.theme.size(props.size)}px;
    margin-top: ${props => props.theme.size(props.height)}px;
    height: 100%;
`

export default StyledSpace
