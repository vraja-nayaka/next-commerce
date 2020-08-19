import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  ProductCardWrapper,
} from './product-list.style';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import Fade from 'react-reveal/Fade';
import NoResultFound from '../../no-result/no-result';
import { Button } from '../../button/button';
import { GET_PRODUCTS } from '../../../graphql/query/products.query';

const BookCard = dynamic(
  import('../../product-card/product-card/product-card')
);

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  loadMore?: boolean;
  type?: string;
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  fetchLimit = 20,
  loadMore = true,
  type,
}) => {
  const router = useRouter();
  const { data, error, loading, fetchMore, networkStatus } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        type: type,
        text: router.query.text,
        category: router.query.category,
        offset: 0,
        limit: fetchLimit,
      },
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMore = networkStatus === NetworkStatus.fetchMore;


    if (!data || !data.products || data.products.items.length === 0) {
      return <NoResultFound />;
    }

    const handleLoadMore = () => {
      fetchMore({
        variables: {
          offset: Number(data.products.items.length),
          limit: fetchLimit,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return {
            products: {
              __typename: previousResult.products.__typename,
              items: [
                ...previousResult.products.items,
                ...fetchMoreResult.products.items,
              ],
              hasMore: fetchMoreResult.products.hasMore,
            },
          };
        },
      });
    };

    const renderCard = (props) => {

      return (
        <BookCard
          title={props.title}
          image={props.image}
          name={props?.author?.name}
          data={props}
          deviceType={deviceType}
          onClick={() =>
            router.push('/product/[slug]', `/product/${props.slug}`)
          }
        />
      );
    }

  return (
    <>
      <ProductsRow>
        {data.products.items.map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={{ paddingLeft: 0, paddingRight: 1 }}
          >
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                {renderCard(item)}
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loadingMore}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            loadMoreButton
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default Products;
