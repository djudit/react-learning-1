import clsx from 'clsx';
// import './Card.css';
import css from './Card.module.css';
import { HiOutlineAtSymbol } from 'react-icons/hi';

export const Card = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      <HiOutlineAtSymbol className={css.iconCard} size="40" />
      {children}
    </p>
  );
};
