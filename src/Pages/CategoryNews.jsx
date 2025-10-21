// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";
// import { da } from "date-fns/locale";
import { useEffect, useState } from "react";

const CategoryNews = () => {
  const { id } = useParams();

  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterData);
      return;
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      setCategoryNews(filterData);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="font-semibold mb-5">Dragon News Home {id}</h2>
      {/* <p>
        total <span className="text-secondary">{categoryNews.length}</span>{" "}
        found
      </p> */}
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
