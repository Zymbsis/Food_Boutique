import { useDispatch, useSelector } from 'react-redux';
import { selectRequestParams } from '@redux/requestParams/slice';
import { useEffect, useRef, useState } from 'react';
import { changeLimit } from '@redux/requestParams/slice';
import { scrollSection } from '../helpers/scrollIntoView';
import { fetchProducts } from 'services';
import { useWindowSize } from './useWindowSize';

export const useAllProduct = () => {
  const dispatch = useDispatch();
  const requestParams = useSelector(selectRequestParams);
  const { page } = requestParams;
  const [allProducts, setAllProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allowScroll, setAllowScroll] = useState(null);
  const sectionRef = useRef(null);
  const windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth >= 1440) {
      dispatch(changeLimit(9));
    } else if (windowWidth < 1440 && windowWidth > 768) {
      dispatch(changeLimit(8));
    } else {
      dispatch(changeLimit(6));
    }
  }, [dispatch, windowWidth]);

  useEffect(() => {
    if (allowScroll === null) return;
    scrollSection(sectionRef, windowWidth);
  }, [allowScroll, windowWidth]);

  useEffect(() => {
    if (requestParams.limit === null) return;

    async function fetchAllProducts() {
      try {
        setError(false);
        setLoading(true);
        const { results, totalPages } = await fetchProducts(requestParams);
        setAllProducts(results);
        setTotalPages(totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAllProducts();
  }, [requestParams]);

  return {
    page,
    allProducts,
    totalPages,
    loading,
    error,
    sectionRef,
    setAllowScroll,
  };
};
