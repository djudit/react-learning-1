import { BookList } from './Books';
// import { favouriteBooks } from '../books.json';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

// const Booksapp = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

export default function Booksapp() {
  return (
    <>
      <h1>Books of the week</h1>

      <BookList books={favouriteBooks} />
    </>
  );
}
