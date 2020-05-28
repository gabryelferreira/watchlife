import React, { useMemo } from 'react';
import Modal, { Styles } from 'react-modal';
import * as S from './styles';
import customStyles from './custom-styles';

interface IProps {
    children?: any;
    isOpen?: any;
    onRequestClose?: any;
    shouldCloseOnEsc?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    title?: string;
    confirmText?: string;
    onConfirm?(): void;
    confirming?: boolean;
    confirmingText?: string;
    disabled?: boolean;
}

const DefaultModal: React.FC<IProps> = ({
    children,
    isOpen,
    onRequestClose,
    shouldCloseOnEsc,
    shouldCloseOnOverlayClick,
    title,
    confirmText,
    onConfirm,
    confirming,
    confirmingText,
    disabled,
}) => {

    const getConfirmText = useMemo(() => {
        if (confirming) {
            return confirmingText || "CRIANDO";
        }
        return confirmText || "CRIAR";
    }, [confirming, confirmingText, confirmText]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnEsc={shouldCloseOnEsc}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <S.DefaultModalContainer>

                <S.DefaultModalCloseButton>
                    <i onClick={onRequestClose} className="material-icons">close</i>
                </S.DefaultModalCloseButton>

                <S.DefaultModalTitle>{title}</S.DefaultModalTitle>
                {children}

                <S.DefaultModalButtonsContainer>
                    <S.DefaultModalButton onClick={onRequestClose}>CANCELAR</S.DefaultModalButton>
                    <S.DefaultModalButton disabled={disabled || confirming} onClick={onConfirm}>{getConfirmText}</S.DefaultModalButton>
                </S.DefaultModalButtonsContainer>

            </S.DefaultModalContainer>
        </Modal>
    );

}

export default DefaultModal;