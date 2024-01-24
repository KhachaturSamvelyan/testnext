import { FC } from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { IList } from "./list.interface";

interface Props {
  data: IList;
}

const ListCard: FC<Props> = ({ data }) => {
  return (
    <Link href={`/list/${data.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ListCard;
