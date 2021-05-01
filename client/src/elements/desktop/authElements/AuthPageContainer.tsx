import styled, { keyframes } from 'styled-components';

export default styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    position: absolute;
    animation: gradient 30s ease infinite;
    background: linear-gradient(-45deg, #ee7752, #23a6d5);
    justify-content: center;
    align-items: center;

    @keyframes gradient {
        0%{
            background-position: 0 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0 50%;
        }
    }
`