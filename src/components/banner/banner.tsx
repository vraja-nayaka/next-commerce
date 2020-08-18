import React from 'react';
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
} from './banner.style';

interface Props {
  imageUrl: string;
}

export const Banner: React.FC<Props> = ({
  imageUrl,
}) => {

  return (
    <Box>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Title>
          Книги везде
        </Title>
        <Description>
          Заказывайте книги с next-commerce прямо к себе домой
        </Description>
        <SearchWrapper>
          Найти нужную книгу
          </SearchWrapper>
      </Content>
    </Box>
  );
};
