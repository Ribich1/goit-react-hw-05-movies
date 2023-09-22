import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BtnLink=styled(Link)`
padding: 8px;
margin: 12px 0;
border: 1px solid black;
border-radius: 8px;
display: inline-block;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
&:hover,&:focus {
    transform:scale(1.1);

}
`