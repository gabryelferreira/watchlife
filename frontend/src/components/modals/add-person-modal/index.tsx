import React, { useState } from 'react';
import DefaultModal from '../default-modal';
import * as S from './styles';
import PersonsService from '../../../services/persons.service';
import { useDispatch } from 'react-redux';
import { ICreatePerson } from '../../../models/create-person';
import PersonsActions from '../../../store/persons/persons.actions';
import { IPersonState } from '../../../store/persons/persons.model';
import { AxiosResponse } from 'axios';
import { ICreatedPerson } from '../../../models/created-person';

interface IProps {
    children?: any;
    isOpen?: any;
    onRequestClose?: any;
}

const AddPersonModal: React.FC<IProps> = ({
    isOpen,
    onRequestClose
}) => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [confirming, setConfirming] = useState(false);

    async function onConfirm() {
        setConfirming(true);
        const person: ICreatePerson = { name, description };
        let result: AxiosResponse<IPersonState>;
        try {
            result = await PersonsService.createPerson(person);
        } catch (e) {
            console.log("Error creating user");
            setConfirming(false);
            return;
        }
        console.log("to aqui");
        const createdPerson = result.data;
        dispatch(
            PersonsActions.addPerson(createdPerson)
        )
        closeModal();
        
    }

    function closeModal() {
        setName("");
        setDescription("");
        setConfirming(false);
        onRequestClose();
    }

    return (
        <DefaultModal isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        title="Criar nova pessoa"
        confirming={confirming}
        onConfirm={onConfirm}
        disabled={!name || !description}
        >
            <S.AddPersonInputsContainer>

                <S.AddPersonSingleInputContainer>
                    <p>Nome da pessoa</p>
                    <input type="text"
                    placeholder="Nome"
                    maxLength={30}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </S.AddPersonSingleInputContainer>

                <S.AddPersonSingleInputContainer>
                    <p>Descrição da pessoa</p>
                    <input type="text"
                    placeholder="Descrição"
                    maxLength={45}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </S.AddPersonSingleInputContainer>

                

            </S.AddPersonInputsContainer>

        </DefaultModal>
    );

}

export default AddPersonModal;