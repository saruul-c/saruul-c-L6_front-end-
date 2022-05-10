import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function newsDetail() {
  const router = useRouter();
  const [news, setNews] = useState();
  const id = router.query.id;

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8000/news/" + id);
      const { news } = await data.json();
      console.log(news);
      setNews(news);
    })();
  }, []);

  return (
    <div className="main-layout">
      <h1 className="main-title">{news?.title}</h1>
      <img src={news?.image} className="main-litle" alt="" />
      <p className="">{news?.content}</p>
      <button
        onClick={() => {
          router.back();
        }}>
        Буцах
      </button>
    </div>
  );
}
