import React from 'react';
import { useRouter } from 'next/router';
import {
  NoResultWrapper,
  ButtonWrapper,
} from './no-result.style';
import { ArrowPrev } from '../../assets/icons/ArrowPrev';
import { Button } from '../button/button';

type NoResultFoundProps = {
  id?: string;
};

const NoResultFound: React.FC<NoResultFoundProps> = ({ id }) => {
  const router = useRouter();

  function onClickButton() {
    const href = router.pathname;

    router.push(href, href, { shallow: true });
  }
  return (
    <NoResultWrapper id={id}>
      <h3>
        К сожалению, ничего не нашлось
      </h3>

      <ButtonWrapper>
        <div onClick={onClickButton}>
          <Button>
            <ArrowPrev /> Вернуться назад
          </Button>
        </div>
      </ButtonWrapper>
    </NoResultWrapper>
  );
};

export default NoResultFound;
