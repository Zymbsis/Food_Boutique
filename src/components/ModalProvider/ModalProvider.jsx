import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from 'hooks';
import { CloseButton } from 'shared';
import { MODAL_ROOT } from 'constants';
import css from './ModalProvider.module.css';

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (Component, props) => {
    setModalContent(<Component {...props} />);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      setModalContent(null);
      document.body.style.overflow = 'visible';
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent &&
        createPortal(
          <div className={css.modalBackdrop} onClick={closeModal}>
            <div className={css.modalWindow}>
              <CloseButton handleClick={closeModal} className={css.closeBtn} />
              {modalContent}
            </div>
          </div>,
          MODAL_ROOT
        )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
