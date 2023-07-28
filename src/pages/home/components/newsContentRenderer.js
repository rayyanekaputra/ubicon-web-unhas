import React from "react";
import { NewsContentList } from "../data/newsContent";
import "../components/newsContentRenderer.css";

export function NewsContentRenderer() {
  const newsContentRenderer = NewsContentList.map((news) => (
    <li key={news.id} className="news-content-list">
      <img src={news.img_path} alt={news.title} />
      <div className="news-content">
        <h1>{news.title_posted}</h1>
        <p className="date_p">{news.date_posted}</p>
        <div className="truncate_brief">
          <p>{news.brief_posted}</p>
        </div>
      </div>
    </li>
  ));

  return newsContentRenderer;
}
