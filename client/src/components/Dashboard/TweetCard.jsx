import React from "react";

const TweetCard = ({ data }) => {
  return (
    <div className="bg-blue-200 rounded-md m-4 p-12 text-black">
      <p>{data?.description}</p>
      <p>{data?.userId}</p>
      <p>{data?.createdAt}</p>
    </div>
  );
};

export default TweetCard;
