import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from "./Modal";
import changeLook from "../store/changeLook";
import {observer} from "mobx-react-lite";

const StyledButton = styled.button`
    background: ${props => props.background};
    color: ${props => props.color};
    padding: 3px;
    margin: 10px;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    position:absolute;
    right: 0;
`
const StyledNotification = styled.div`
    position:absolute;
    margin: 10px;
    right: 0;
    color: brown;
    border: 1px solid brown;
    border-radius: 10px;
    padding: 3px;
    font-weight: bold;
`

const StyledContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index: 10000;
`

const StyledBtnForDark = styled.button`
    min-width: 100px;
    padding: 5px;
    border-radius: 15px;
    margin: 10px 3px;
    font-weight: bold;
    background: #1c2742;
    color: white;
    cursor: pointer;
`
const StyledBtnForLight = styled.button`
    min-width: 100px;
    padding: 5px;
    border-radius: 15px;
    margin: 10px 3px;
    font-weight: bold;
    background: lightcyan;
    cursor: pointer;
`

const ModalButton = observer((props) => {
    const [modalActive, setModalActive] = useState(false);
    console.log(modalActive)
    const handlerOpenModal = () => {
        setModalActive(!modalActive)
    }

    return (
        <div>
            {!modalActive ?
            <StyledButton {...props} onClick={handlerOpenModal}/>
                :
                <div>
                    <StyledNotification>
                        Modal is open
                    </StyledNotification>
                    <StyledContainer>
                        <Modal background={"white"}
                               active={modalActive}
                               setActive={setModalActive}>
                                <span>Change the mode of App</span>
                                <div>
                                    <StyledBtnForDark
                                        onClick={() => {changeLook.changeToDarkLook()}}
                                    >
                                        Dark
                                    </StyledBtnForDark>

                                    <StyledBtnForLight
                                        onClick={() => {changeLook.changeToLightLook()}}
                                    >
                                        Light
                                    </StyledBtnForLight>
                                </div>
                        </Modal>
                    </StyledContainer>
                </div>
            }
        </div>
    );
});

export default ModalButton;