import { useState } from 'react';
import * as S from './styles';

export const ChooseCardFlip = () => {
  return (
    <S.Container>
      <S.IphoneContainer>
        <S.IphoneImg src="images/iphone-mockup.png" />
        <S.IphoneBackground />
        <S.IphoneContent>
          <p>
            Você se tornou um desenvolvedor desde 2015! Isso é incrível, para
            qual área de desenvolvimento você seguiu?
          </p>

          <S.CardContainer>
            <Card position="left" />
            <Card position="right" />
          </S.CardContainer>
        </S.IphoneContent>
      </S.IphoneContainer>
    </S.Container>
  );
};

export type CardProps = {
  position: Position;
};

type Position = 'left' | 'right';

export const Card = ({ position }: CardProps) => {
  const [optionSelected, setOptionSelected] = useState<Position>();

  const handleSetOption = (position: Position) => {
    setOptionSelected(position);
  };

  return (
    <S.Card position={position} onClick={() => handleSetOption(position)}>
      <S.CardInner>
        <S.CardFront />
        <S.CardBack />
      </S.CardInner>
    </S.Card>
  );
};
