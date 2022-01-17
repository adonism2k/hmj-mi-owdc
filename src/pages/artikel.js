import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Articles from "../components/Articles";
import "../styles/app.scss";

const ArticlesPage = () => {
  return (
    <DefaultLayout>
      <section id="articlePage">
        <h1 className="titlePage">Artikel</h1>
        <Articles />
      </section>
    </DefaultLayout>
  );
};

export default ArticlesPage;
