import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";

import styles from "../main/Home.module.scss";
import { useList } from "../list/useList";

interface Props {
  onClose: () => void;
}

const ModalContent: FC<Props> = ({ onClose }) => {
  const router = useRouter();
  const { modal, isModalError, isModalLoading } = useList(
    1,
    Number(router.query.item)
  );

  return (
    <div className={styles.modal}>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onHide={onClose}>
            <Modal.Title>
              {isModalLoading
                ? "Загрузка..."
                : isModalError
                ? "Что то пошло не так!"
                : modal?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{modal?.text}</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default ModalContent;
