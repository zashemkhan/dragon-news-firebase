import React from "react";
import { CiShare2 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
  // console.log(news);
  const { title, image_url, author, details } = news;
  console.log(title);
  const localDate = new Date(author.published_date).toLocaleDateString();
  console.log(localDate);

  return (
    <div className="border p-4 rounded-2xl text-accent">
      <h2 className="font-bold">{title}</h2>
      <img className="rounded-2xl py-2" src={image_url} alt="" />
      <div className="mb-4">
        <p className="">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>
      <div className="flex items-center justify-between border-t-1  pt-4">
        <p className="">{localDate}</p>
        <div className="flex gap-3">
          <CiShare2 size={20} />
          <IoBookmarkOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
