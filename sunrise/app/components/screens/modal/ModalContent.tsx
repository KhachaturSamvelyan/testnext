import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import { useList } from "../list/useList";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalContent: FC = () => {
  const router = useRouter();
  const { modal, isModalError, isModalLoading } = useList(
    1,
    Number(router.query.id)
  );

  return isModalLoading ? (
    <h1>Загрузка...</h1>
  ) : isModalError ? (
    <h1>Что то пошло не так!</h1>
  ) : (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{modal?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{modal?.text}</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default ModalContent;
