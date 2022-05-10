import React from "react";
import { useRouter } from "next/router";

export default function NewsCard({
  image = "https://www.translationvalley.com/wp-content/uploads/2020/03/no-iamge-placeholder.jpg",
  title,
  content,
  _id
}) {
  const router = useRouter();
  return (
    <div
      className="news-card"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {
        router.push({ pathname: "/newsDetail", query: { id: _id } });
      }}>
      <div className="about">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
