import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const TRow = styled.tr`
    height: 50px;
`;

const TableAction = styled.span`

`;

const TCell = styled.td`
    text-align: left;
    margin: 0 20px;
`;

const TableRow = (props) => {
    return (
        <TRow>
            <TCell>{props.user.nume}</TCell>
            <TCell>{props.user.prenume}</TCell>
            <TCell>{props.user.mail}</TCell>
            <TCell>{props.user.telefon}</TCell>
            <TCell>{props.user.tricou}</TCell>
            <TCell>{props.user.arie}</TCell>
            <TCell><TableAction><a href="javascript:void(0);">View</a></TableAction></TCell>
        </TRow>
    )
}

export default TableRow;