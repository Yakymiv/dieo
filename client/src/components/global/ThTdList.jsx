import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import addOrderList from './../../actions/addOrderList';
import styled from 'styled-components';

const StyleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyleGreenSpan = styled.span`
    color: green;
`;

const StyledRedSpan = styled.span`
    color: red;
`;

export const Th = ({ children }) => {
    return(
        <th><StyleDiv>{ children }</StyleDiv></th>
    );
}

export const Td = ({ children }) => {
    return(
        <td><StyleDiv>{ children }</StyleDiv></td>
    )
}

const TdList = ({ children, dieCenter, selectPage, dispatch }) => {
    const [targetId, setTargetId] = useState(false);

    const handleClick = (e) => {
        const id = e.target.dataset.id;
        setTargetId(id);
    }

    useEffect(() => {
        if (targetId === false) return;
        fetch(`http://localhost:5000/die/${targetId}`, {
            method: 'PUT'
        }).then(() => {
            fetch(`http://localhost:5000/die?page=${selectPage}`).then(response => response.json()).then(data => dispatch(addOrderList(data.rows)))
        });
    }, [dispatch, selectPage, targetId])

    const statusElement = () => {
        if (dieCenter !== true ) {
            return <Td>{children.orderstatus === false ? <StyledRedSpan>Очікує</StyledRedSpan> : <StyleGreenSpan>Виконано</StyleGreenSpan>}</Td>;
        }
        if (children.orderstatus === false ) {
            return <Td><Button variant="danger" data-id={children.id} size="sm" onClick={handleClick} block>Очікуєs</Button></Td>
        } else {
            return <Td>{children.orderstatus === false ? <StyledRedSpan>Очікує</StyledRedSpan> : <StyleGreenSpan>Виконано</StyleGreenSpan>}</Td>
        }
    }

    const changeData = () => {
        const date = new Date(children.ordertime);

        let seconds = date.getSeconds();
        if (String(seconds).length === 1 ) seconds = '0' + seconds;
        let minutes = date.getMinutes();
        if (String(minutes).length === 1 ) minutes = '0' + minutes;
        let hours = date.getHours();
        if (String(hours).length === 1 ) hours = '0' + hours;

        let tDate = date.getDate();
        if (String(tDate).length === 1 ) tDate = '0' + tDate;
        let month = date.getMonth();
        if (String(month).length === 1 ) month = '0' + month;
        const years = date.getFullYear();
        return <Td>{`${hours}:${minutes}:${seconds} - ${tDate}.${month}.${years}`}</Td>
    }

    return(
        <tr>
            <Td>{children.machine}</Td>
            <Td>{children.app}</Td>
            <Td>{children.material}</Td>
            <Td>{children.mechanic === 'Mechan' ? 'До машини/верстата' : children.mechanic === 'DIE' ? 'Die - центру' : children.mechanic === null ? '' :
                console.error(
                    'Помилка на стадії відображеня, невірно зчитано/вказано найменування наладчика'
                )}</Td>
            {changeData()}
            {/* <Td>{children.ordertime}</Td> */}
            {statusElement()}
        </tr>
    );
}

export default connect()(TdList);
