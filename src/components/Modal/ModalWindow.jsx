import { useImperativeHandle, useRef, useState } from 'react';
import { CloseButton } from 'shared';

const ModalWindow = ({ ref }) => {
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    openModal: (Component, props) => {
      setModalContent(<Component {...props} />);
      modalRef.current.showModal();
      // document.body.style.overflow = 'hidden';
    },
  }));

  const onModalClose = () => {
    setModalContent(null);
    document.body.style.overflow = 'visible';
  };

  const closeModalOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
      modalRef.current.close();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onClose={onModalClose}
      onClick={closeModalOnBackdropClick}
      className="rounded-[20px] bg-zinc-50"
    >
      {modalContent}
      <form method="dialog">
        <CloseButton
          type="submit"
          className="absolute right-3 top-3 size-6 md:right-6 md:top-6 md:size-7"
        />
      </form>
    </dialog>
  );
};

export default ModalWindow;
