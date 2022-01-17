import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import DefaultLayout from "../layouts/DefaultLayout";

const DepartemenPage = () => {
  const departmentImage = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "departemen" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const departments = [
    {
      name: "Dep. Puslitbang",
      description:
        "Departemen Pusat Penelitian dan Pengembangan (Puslitbang) merupakan salah satu departemen yang ada di Himpunan Mahasiswa Jurusan Manajemen Informatika (HMJ MI). Departemen ini bergerak dibidang akademik yaitu pengembangan kemampuan dan penalaran mahasiswa Jurusan Manajemen Informatika. Dengan adanya departemen Litbang, diharapkan dapat meningkatkan kualitas mahasiswa Jurusan Manajemen Informatika, sehingga tercipta lingkungan akademik yang kompeten dan dinamis.",
      image: getImage(departmentImage.allFile.nodes[0]),
    },
    {
      name: "Dep. Humas",
      description:
        "Humas merupakan departemen yang menaungi 3 bidang diantaranya bidang dalam kampus yang bertugas dalam menjaga hubungan dengan organisasi ataupun bidang yang ada di dalam kampus sedangan untuk bidang luar kampus sendiri menjaga hubungan dengan pihak-pihak yang ada diluar kampus dan bidang informasi dan komunikasi yang mengelola informasi serta Publikasi kegiatan HMJ MI.",
      image: getImage(departmentImage.allFile.nodes[1]),
    },
    {
      name: "Dep. Keanggotaan",
      description:
        "Menjaga internal anggota lembaga (staff dan member), melakukan administrasi anggota dan alumni lembaga secara terpusat, serta bertanggung jawab dalam kaderisasi lembaga.",
      image: getImage(departmentImage.allFile.nodes[2]),
    },
  ];

  return (
    <DefaultLayout>
      <section id="departemen">
        <Tab.Group>
          <Tab.List className="tabList">
            {departments.map((department, index) => {
              const { name } = department;
              return (
                <Tab as={Fragment} key={index}>
                  {({ selected }) => (
                    <button className={selected ? "tabSelected" : "tab"}>
                      {name}
                    </button>
                  )}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels>
            {departments.map((department, index) => {
              const { name, description, image } = department;
              return (
                <Tab.Panel key={index} className="departemenContent">
                  <div className="departemenContentWrapper">
                    <h1>{name}</h1>
                    <p>{description}</p>
                  </div>
                  <GatsbyImage
                    image={image}
                    alt={name}
                    className="departemenImage"
                    placeholder="blurred"
                  />
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </section>
    </DefaultLayout>
  );
};

export default DepartemenPage;
