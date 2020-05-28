import React from 'react';
import * as S from './styles';

interface IProps {
    stars: number;
    onClick?(star: number): void;
}

const Stars: React.FC<IProps> = ({ stars, onClick }) => {

    function onStarClick(star: number) {
        if (onClick)
            onClick(star);
    }

    return (
        <S.StarsContainer>
            {[1, 2, 3, 4, 5].map(star => {
                if (stars >= star) {
                    return <i key={star} onClick={() => onStarClick(star)} className="material-icons">star</i>;
                } else if (stars >= star - 0.75) {
                    return <i key={star} onClick={() => onStarClick(star)} className="material-icons">star_half</i>;
                } else {
                    return <i key={star} onClick={() => onStarClick(star)} className="material-icons">star_border</i>;
                }
            })}
        </S.StarsContainer>
    );
}

export default Stars;