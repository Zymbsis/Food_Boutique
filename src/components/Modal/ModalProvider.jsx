import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from 'components';
import { MODAL_ROOT } from 'constants';
import { createContext } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const dialogRef = useRef();

  const openModal = (Component, props) => dialogRef.current.openModal(Component, props);

  return (
    <ModalContext value={{ openModal }}>
      {children}
      {createPortal(<ModalWindow ref={dialogRef} />, MODAL_ROOT)}
    </ModalContext>
  );
};

export default ModalProvider;
