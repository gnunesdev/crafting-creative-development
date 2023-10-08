import { Link } from 'react-router-dom';
import * as S from './styles';

export const Navigation = () => {
  return (
    <S.Container>
      <button>
        <Link to="/css-animations">Css animations</Link>
      </button>
    </S.Container>
  );
};
