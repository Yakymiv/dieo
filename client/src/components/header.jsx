import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
  background-image: linear-gradient(90deg, #17a2b8, #64d8cb);
  width: 100%;
  height: 75px;
`;

const StyleH1 = styled.h1`
    display: flex;
    align-items: center;
    margin-left: 25px;
    height: 100%;
    color: #fff;
    font-size: 36px;
    letter-spacing: 2px;
    cursor: default;
`;

const DieHeader = () => (
    <StyleHeader>
        <StyleH1>Orders of tools</StyleH1>
    </StyleHeader>
);

export default DieHeader