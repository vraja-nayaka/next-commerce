export const HOME_PAGE = '/';
export const BOOK_PAGE = '/book';

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.book',
    defaultMessage: 'Book',
    href: BOOK_PAGE,
    icon: 'BookIcon',
    dynamic: true,
  },
];
