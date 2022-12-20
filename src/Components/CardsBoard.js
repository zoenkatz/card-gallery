import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Card from "./Card";

const CardsBoard = ({ rowsNumber }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["cardData"],
    queryFn: () =>
      fetch("https://thronesapi.com/api/v2/Characters").then((res) =>
        res.json()
      ),
  });

  const [rowNum, setRowNum] = useState(rowsNumber);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
      setIsLoadingMore(false)
  }, [rowNum])


  return (
    <div className="board">
      <div className="board-cards">
        {data?.length &&
          Array.from({ length: rowNum }, (param, i) => {
            return (
              <div className="row" key={`row${i}`}>
                {data
                  .slice(data.length - (i + 1) * 4, data.length - i * 4)
                  .sort((a, b) => b.id - a.id)
                  .map((cardItem, index) => {
                    return <Card key={index} {...cardItem} />;
                  })}
              </div>
            );
          })}
      </div>
      <button
        onClick={() => {
          setRowNum(rowNum + 1);
            setIsLoadingMore(true)
        }}
        disabled={isLoading || isLoadingMore}
      >
        More
      </button>
    </div>
  );
};

export default CardsBoard
