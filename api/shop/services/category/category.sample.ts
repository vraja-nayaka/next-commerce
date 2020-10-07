import Category from './category.type';
import { plainToClass } from 'class-transformer';

const loadCategories = (): Category[] => {
  return plainToClass(Category, [
    {
      id: 1,
      title: 'Science Fiction',
      slug: 'science_fiction',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
    {
      id: 2,
      title: 'Children Literature',
      slug: 'children_literature',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
    {
      id: 3,
      title: 'Comic Book',
      slug: 'comic_book',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
    {
      id: 4,
      title: 'Fantasy',
      slug: 'fantasy',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
    {
      id: 5,
      title: 'Horror',
      slug: 'horror',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },

    {
      id: 6,
      title: 'Novel',
      slug: 'novel',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },

    {
      id: 7,
      title: 'Romantic',
      slug: 'romantic',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
    {
      id: 8,
      title: 'Thriller',
      slug: 'thriller',
      products: [],
      type: 'book',
      icon: '',
      children: [],
    },
  ]);
};

export default loadCategories;
