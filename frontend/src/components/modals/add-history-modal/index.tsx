import React, { useState } from 'react';
import DefaultModal from '../default-modal';
import * as S from './styles';
import Stars from '../../stars';
import { AxiosResponse } from 'axios';
import { ICreateHistory } from '../../../models/create-history';
import personsService from '../../../services/persons.service';
import { IPersonHistoryState, IPersonState } from '../../../store/persons/persons.model';

interface IProps {
    children?: any;
    isOpen?: any;
    onRequestClose(history?: IPersonHistoryState): any;
    person: IPersonState,
}

const AddHistoryModal: React.FC<IProps> = ({
    isOpen,
    onRequestClose,
    person
}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [stars, setStars] = useState(0);
    const [confirming, setConfirming] = useState(false);

    function handleStarClick(star: number) {
        if (star === stars) {
            setStars(star - 0.5);
            return;
        }
        setStars(star);
    }

    async function handleSubmit() {
        setConfirming(true);
        const history: ICreateHistory = {
            title,
            description,
            stars
        }
        let result: AxiosResponse<IPersonHistoryState>
        try {
            result = await personsService.createHistory(person.id, history);
        } catch (e) {
            console.log("Error creating history");
            return;
        }
        closeModal(result.data);
    }

    function closeModal(history?: IPersonHistoryState) {
        setStars(0);
        setTitle("");
        setDescription("");
        onRequestClose(history);
    }

    return (
        <DefaultModal isOpen={isOpen}
            onRequestClose={onRequestClose}
            onConfirm={handleSubmit}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
            title="Criar nova história"
            disabled={!title || !description}
            confirming={confirming}
        >
            <S.AddHistoryInputsContainer>

                <S.AddHistorySingleInputContainer>
                    <p>Título da história</p>
                    <input type="text"
                        placeholder="Título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </S.AddHistorySingleInputContainer>

                <S.AddHistorySingleInputContainer>
                    <p>Descrição da história</p>
                    <textarea placeholder="Descrição"
                        rows={2}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </S.AddHistorySingleInputContainer>

                <S.AddHistorySingleInputContainer>
                    <p>Nota da história</p>
                    <Stars stars={stars} onClick={handleStarClick} />
                </S.AddHistorySingleInputContainer>



            </S.AddHistoryInputsContainer>

        </DefaultModal>
    );

}

export default AddHistoryModal;