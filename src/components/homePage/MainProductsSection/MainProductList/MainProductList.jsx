import MainProductItem from '../MainProductItem/MainProductItem';
import css from './MainProductList.module.css';
import { useRef, useEffect } from 'react';
import { scrollSection } from '../.helpers/scrollIntoView.js';

const MainProductList = ({ productList, windowWidth, allowScroll }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (allowScroll === null) return;
    scrollSection(sectionRef, windowWidth);
  }, [allowScroll, windowWidth]);

  return (
    <>
      <ul className={css.productList} ref={sectionRef}>
        {productList.map(product => (
          <li className={css.productItem} key={product._id}>
            <MainProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainProductList;
