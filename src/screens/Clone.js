import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const StyledCloneButton = styled.button`
    background-color: white;
    border: 0;
    color: rgb(83, 82, 82);
    font-size: 1em;
    margin: 1.2em;
`;

const StyledCloneText = styled.div`
    margin-top: 0.1em;
    box-shadow: 0.125em 0.125em 0.1875em 0.1875em #979595;
    font-size: 0.75em;
    text-align: center;
`;

const Clone = ({clickClone, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [canClone, setCanClone] = useState(true)
    
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const toggleCanClone = () => {
        setCanClone(!canClone)
        setIsOpen(!isOpen)
        clickClone(index)
    }

    return (
    <>
        { canClone ? 
            <StyledCloneButton onClick={toggleIsOpen}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </StyledCloneButton> : null }
            {isOpen ? <StyledCloneText onClick={toggleCanClone}>Clone</StyledCloneText> : null}
        

    
    </>

    );
}

export default Clone;