import { GetStaticProps } from 'next';
import { countComponentsByCategory, getAllComponents } from '../data/components';
import { HomePage } from '../_components/HomePage/HomePage';

export default HomePage;

export const getStaticProps: GetStaticProps = () => ({
  props: {
    componentsCountByCategory: countComponentsByCategory(),
    allComponents: getAllComponents(),
  },
});
