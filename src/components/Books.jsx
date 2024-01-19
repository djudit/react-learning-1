import './Books.css';
import { FcBiohazard } from 'react-icons/fc';
import { ImAirplane } from 'react-icons/im';

export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.id}>
            <ImAirplane className="icon-plane" size="60" />
            <FcBiohazard className="my-icon" size="24" />
            {book.name}
          </li>
        );
      })}
    </ul>
  );
};
