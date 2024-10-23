import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from 'hooks';
import { MODAL_ROOT } from 'constants';
import { deleteAllProducts } from '@redux/cart/slice.js';
import { CloseButton } from 'shared';
import css from './ModalProvider.module.css';

const ModalProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);
  const [isOrderSent, setIsOrderSent] = useState(false);

  const openModal = (Component, props) => {
    setModalContent(<Component {...props} />);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        setModalContent(null);
        document.body.style.overflow = 'visible';
        if (!isOrderSent) return;
        dispatch(deleteAllProducts());
        navigate('/');
      }
    },
    [dispatch, navigate, isOrderSent]
  );

  const removeCart = () => {
    setIsOrderSent(true);
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, removeCart }}>
      {children}
      {modalContent &&
        createPortal(
          <div className={css.modalBackdrop} onClick={closeModal}>
            <div className={css.modalWindow}>
              <CloseButton onClick={closeModal} className={css.closeBtn} />
              {modalContent}
            </div>
          </div>,
          MODAL_ROOT
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
