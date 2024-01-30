import { FC, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import ListCard from "./ListCard";
import { useList } from "./useList";
import { IList } from "./list.interface";

import styles from "../main/Home.module.scss";

const List: FC = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedPage = localStorage.getItem("currentPage");
      return storedPage ? parseInt(storedPage) : 1;
    }
    return 1;
  });

  const { data, isLoading, isError } = useList(currentPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentPage", currentPage.toString());
    }
  }, [currentPage]);

  return isLoading ? (
    <h1>Загрузка...</h1>
  ) : isError ? (
    <h1>Что-то пошло не так!</h1>
  ) : (
    <div className={styles.lists}>
      {data.map((el: IList) => (
        <ListCard key={el.id} data={el} />
      ))}
      <div className={styles.buttons}>
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          variant="primary"
        >
          1
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === 2}
          variant="primary"
        >
          2
        </Button>
      </div>
    </div>
  );
};

export default List;
