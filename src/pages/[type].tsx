import React from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Banner } from '../components/banner/banner';
import {
  MainContentArea,
  ContentSection,
  SidebarSection,
} from '../assets/styles/pages.style';

import { sitePages } from '../site-settings/site-pages';
import { useRefScroll } from '../utils/use-ref-scroll';
// import { initializeApollo } from '../utils/apollo';
// import { GET_PRODUCTS } from '../graphql/query/products.query';
// import { GET_CATEGORIES } from '../graphql/query/category.query';
const Sidebar = dynamic(() => import('../layouts/sidebar/sidebar'));
const Products = dynamic(() =>
  import('../components/product-grid/product-list/product-list')
);

const CategoryPage: React.FC<any> = ({ deviceType }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];
  return (
    <>
      <Banner
        imageUrl={page?.banner_image_url}
      />
      <MainContentArea>
          <SidebarSection>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </SidebarSection>
          <ContentSection>
            <div ref={targetRef}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={20}
              />
            </div>
          </ContentSection>
        </MainContentArea>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: GET_PRODUCTS,
  //   variables: {
  //     type: params.type,
  //     offset: 0,
  //     limit: 20,
  //   },
  // });
  // await apolloClient.query({
  //   query: GET_CATEGORIES,
  //   variables: {
  //     type: params.type,
  //   },
  // });

  return {
    props: {
      // initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'book' } },
    ],
    fallback: false,
  };
}
export default CategoryPage;
