import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import NewsCard from "../components/cards/newsCard";

export default function Home() {
  const router = useRouter();
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8000/news");
      const { news } = await data.json();
      setNews(news.reverse());
      
      console.log(news);
    })();
    // .then((req, res) => {
    //   console.log(JSON.stringify(await req));
    //   console.log(res);
    // });
  }, []);

  return (
    <div className={"main-layout"}>
      <h1 className="main-title">Саруулын гайхалтай энгийн мэдээний сайт</h1>
      <div className="container">
        {news.map((item) => (
          <NewsCard {...item} />
        ))}
      </div>
    </div>
  );
}
