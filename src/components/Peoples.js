import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import InstagramIcon from "../images/Icon/InstagramIcon.svg";
import LinkedinIcon from "../images/Icon/LinkedinIcon.svg";
import TwitterIcon from "../images/Icon/TwitterIcon.svg";

const Peoples = () => {
  const data = useStaticQuery(graphql`
    query PeoplesImage {
      allFile(
        filter: { relativeDirectory: { eq: "peoples" } }
        sort: { fields: name }
        limit: 3
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const peoplesContent = [
    {
      image: getImage(data.allFile.nodes[0]),
      name: "Abdian Rizky Ramadan",
      desc: "Pembina Organisasi",
      instagramAccount: "https://www.instagram.com/adonism2k/",
      twitterAccount: "https://twitter.com/adonisme2k",
      linkedinAccount: "https://linkedin.com/in/adonisme2k",
    },
    {
      image: getImage(data.allFile.nodes[1]),
      name: "Rifka Adzanti",
      desc: "Ketua HMJ MI",
      instagramAccount: "https://www.facebook.com/adonisme2k",
      twitterAccount: "https://twitter.com/adonisme2k",
      linkedinAccount: "https://linkedin.com/in/adonisme2k",
    },
    {
      image: getImage(data.allFile.nodes[2]),
      name: "Maysha Arumya",
      desc: "Wakil Ketua HMJ MI",
      instagramAccount: "https://www.facebook.com/adonisme2k",
      twitterAccount: "https://twitter.com/adonisme2k",
      linkedinAccount: "https://linkedin.com/in/adonisme2k",
    },
  ];

  return (
    <div className="peopleWrapper">
      {peoplesContent.map((people, index) => {
        const {
          image,
          name,
          desc,
          instagramAccount,
          twitterAccount,
          linkedinAccount,
        } = people;
        return (
          <div className="people" key={index}>
            <div className="peopleImage">
              <GatsbyImage image={image} alt={name + " | " + desc} />
            </div>
            <div className="peopleInfo">
              <h4 className="peopleName">{name}</h4>
              <p className="peopleDesc">{desc}</p>
              <div className="peopleSocial">
                {linkedinAccount && (
                  <a href={linkedinAccount} id="linkedin" className="social">
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                  </a>
                )}
                {instagramAccount && (
                  <a href={instagramAccount} id="instagram" className="social">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                  </a>
                )}
                {twitterAccount && (
                  <a href={twitterAccount} id="twitter" className="social">
                    <img src={TwitterIcon} alt="Twitter Icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Peoples;
