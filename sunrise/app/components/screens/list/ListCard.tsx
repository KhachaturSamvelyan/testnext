import { FC, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import ModalContent from "../modal/ModalContent";
import { IList } from "./list.interface";

import styles from "../main/Home.module.scss";
import { useRouter } from "next/router";

interface Props {
  data: IList;
}

const ListCard: FC<Props> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.item && Number(router.query.item) === data.id) {
      setShowModal(true);
    }
  }, [router.query.item, data.id]);

  const handleCardClick = () => {
    setShowModal(true);
    router.push(`/?item=${data.id}`);
  };

  const handleClose = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      {showModal && <ModalContent onClose={handleClose} />}
    </>
  );
};

export default ListCard;
