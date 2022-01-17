import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "feature" } }
        sort: { fields: name }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `);

  const FeatureContents = [
    {
      title: "Pengetahuan",
      image: data.allFile.nodes[0].publicURL,
      desc: "Organisasi Himpunan Manajemen Informatika ini terdapat sesi pembelajaran melalui program kerja yang tersedia seperti Seminar, Study Club.",
    },
    {
      title: "Sharing",
      image: data.allFile.nodes[1].publicURL,
      desc: "Organisasi Himpunan Manajemen Informatika mewadahi aspirasi-aspirasi mahasiswa khususnya mahasiswa Manajemen Informatika.",
    },
    {
      title: "Berorganisasi",
      image: data.allFile.nodes[2].publicURL,
      desc: "Organisasi Himpunan Manajemen Informatika untuk mahasiswa jurusan MI sebagai media pembelajaran mahasiswa dalam berorganisasi.",
    },
  ];

  const FeatureList = FeatureContents.map((feature, index) => {
    const { title, image, desc } = feature;
    return (
      <div className={"feature-" + (index + 1)} key={index}>
        <h4 className="title">{title}</h4>
        <img src={image} alt={title} />
        <p className="desc">{desc}</p>
      </div>
    );
  });
  return <div className="features">{FeatureList}</div>;
};

export default Features;
