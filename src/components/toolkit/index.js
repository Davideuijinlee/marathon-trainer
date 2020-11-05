import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = styled.section`
    background: lightgrey;
    border-bottom: double;
    height: 10vh;
    width: 100vw;
`;

export default () => {
    return (
        <Wrapper>
            <div>Return</div>
        </Wrapper>
    )
}