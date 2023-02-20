import { FC } from 'react';
import { getPagesArray } from '../../../utils/pages';
import s from './Pagination.module.scss'

interface IPaginationProps {
  pagesCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  pagesCount,
  currentPage,
  onChangePage,
}) => {
  const pagesArray = getPagesArray(pagesCount);

  return (
    <div className={s.pages__container}>
      {pagesArray.map((page) => (
        <span
          key={page}
          className={`${s.page} ${page === currentPage && s.page__active}`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};
