import styled, { css, keyframes } from 'styled-components';
import { CardProps } from './choose-card-flip';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const IphoneContainer = styled.div`
  width: 300px;
  height: 600px;

  position: relative;
`;

export const IphoneImg = styled.img`
  z-index: 2;
  position: absolute;

  width: 300px;
  height: 600px;
`;

export const IphoneBackground = styled.div`
  z-index: 1;
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background: #cacaca;

  border-radius: 50px;
`;

export const IphoneContent = styled.div`
  z-index: 3;
  position: relative;
  box-sizing: border-box;

  width: 300px;
  height: 600px;
  padding: 48px 30px 22px;

  p {
    margin-top: 24px;
    font-size: 14px;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  position: relative;

  width: 100%;

  margin-top: 48px;
`;

const CardAnimation = keyframes`
  from {

  }
`;

const CardStyle = css`
  width: 100%;
  height: 100%;

  position: absolute;
  backface-visibility: hidden;
`;

export const CardFront = styled.div`
  ${CardStyle}

  background: white;
`;

export const CardBack = styled.div`
  ${CardStyle}

  background: black;
  transform: rotateY(-180deg);
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

export const Card = styled.button<CardProps>`
  width: 110px;
  height: 110px;

  border-radius: 12px;

  position: absolute;
  background-color: transparent;

  perspective: 1000px;

  ${(props) => {
    if (props.position === 'left') {
      return 'left: 0';
    }

    return 'right: 0';
  }};

  &:hover {
    ${CardInner} {
      transform: rotateY(-180deg);
    }
  }
`;
