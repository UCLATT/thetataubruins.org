import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import { StaticImage } from "gatsby-plugin-image"


import "../css/index-page.css";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="columns piller-section">
          <div className="column">
            <StaticImage src="../img/home/PisBeach.png" alt="Brotherhood"/>
          </div>
          <div className="column is-2">
            <p>Brotherhood</p>
            <p>We are UCLA’s only co-ed professional engineering fraternity, composed of leaders who stand 
              for professionalism, service, and brotherhood. Our vision is to establish lifelong connections 
              as we work towards gearing each member up for success!
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="columns piller-section">
          <div className="column">
            <p>Service</p>
            <p>We are UCLA’s only co-ed professional engineering fraternity, composed of leaders who stand 
              for professionalism, service, and brotherhood. Our vision is to establish lifelong connections 
              as we work towards gearing each member up for success!
            </p>
            <button>Learn More</button>
          </div>
          <div className="column">
            <StaticImage src="../img/home/TTTahoe.png" alt="Service"/>
          </div>
        </div>
        <div className="columns piller-section">
          <div className="column">
            <StaticImage src="../img/home/ttseattle.jpeg" alt="Professionalism" />
          </div>
          <div className="column">
            <p>Professionalism</p>
            <p>We are UCLA’s only co-ed professional engineering fraternity, composed of leaders who stand 
              for professionalism, service, and brotherhood. Our vision is to establish lifelong connections 
              as we work towards gearing each member up for success!
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
        }
      }
    }
  }
`;
