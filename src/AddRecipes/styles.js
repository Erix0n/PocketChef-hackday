import styled from "styled-components";


const ContentWrapper = styled.div`
    width: 100%;
    padding: 20px;
    text-align: start;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    width: 100%;
    margin: 0px;
    padding: 0px;
    outline:none;
    border: none;
    font-size: 1.1rem;
`;

const InputLabel = styled.div`
    font-size: 1.1rem;
    color: #2a2b42;
    margin-bottom: 3px;

`;

export {
    InputWrapper,
    StyledInput,
    InputLabel,
    ContentWrapper,
};