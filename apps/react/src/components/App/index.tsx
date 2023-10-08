import { Route, Routes } from 'react-router-dom';

import * as S from './styles';
import { Navigation } from '../Navigation';

export const App = () => {
  return (
    <S.Container>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/css-animations" element={<div>css animations</div>} />
      </Routes>
    </S.Container>
  );
};
