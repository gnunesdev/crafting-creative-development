import { Route, Routes } from 'react-router-dom';

import * as S from './styles';
import { Navigation } from '../Navigation';
import { ChooseCardFlip } from '@crafting-creative-development/choose-card-flip';

export const App = () => {
  return (
    <S.Container>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/css-animations" element={<ChooseCardFlip />} />
      </Routes>
    </S.Container>
  );
};
