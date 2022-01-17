import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";

const Articles = () => {
  const data = useStaticQuery(graphql`
    query ArticleCards {
      allContentfulArticle(limit: 3, sort: { fields: date, order: ASC }) {
        nodes {
          id
          thumbnail {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          title
          date(formatString: "MMM D, YYYY", locale: "id-ID")
          minutesRead
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 100, truncate: true, format: PLAIN)
            }
          }
          author {
            image {
              gatsbyImageData(
                placeholder: BLURRED
                cornerRadius: -1
                aspectRatio: 1
                height: 50
                quality: 100
              )
              title
            }
            name
          }
        }
      }
    }
  `);

  const articles = data.allContentfulArticle.nodes;

  return (
    <div className="articleWrapper">
      {articles.map((article) => {
        const { id, thumbnail, title, date, minutesRead, author } = article;
        const content = article.content.childMarkdownRemark.excerpt;
        const thumbnailImage = getImage(thumbnail.gatsbyImageData);
        const authorImage = getImage(author.image.gatsbyImageData);
        return (
          <div className="articleCard" key={id}>
            <Link to="/artikel">
              <GatsbyImage
                image={thumbnailImage}
                alt={thumbnail.title}
                className="articleImage"
              />
            </Link>
            <div className="articleInfo">
              <div className="articleContentWrapper">
                <Link to="/artikel">
                  <h1 className="articleTitle">{title}</h1>
                </Link>
                <p className="articleContent">{content}</p>
              </div>
              <div className="articleAuthor">
                <GatsbyImage
                  image={authorImage}
                  alt={author.image.title}
                  className="authorImage"
                />
                <div className="authorInfo">
                  <p className="authorName">
                    By <span className="name">{author.name}</span>
                  </p>
                  <div className="contentInfo">
                    <span className="datePosted">{date}</span>•
                    <span className="minutesRead">{minutesRead} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
