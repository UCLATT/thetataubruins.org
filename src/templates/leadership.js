import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";

import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";

// eslint-disable-next-line
export const LeadershipPageTemplate = ({
  image,
  title,
  subheading,
  positions,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />

      <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Executive Board</p>
      <Features gridItems={positions.exec} />

      <p className = "classHeader">Chairs</p>
      <Features gridItems={positions.chairs} />
    </div>
  );
};

LeadershipPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  positions: PropTypes.shape({
    exec: PropTypes.array,
    chairs: PropTypes.array,
  }),
};

const LeadershipPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LeadershipPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        positions={frontmatter.positions}
      />
    </Layout>
  );
};

LeadershipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LeadershipPage;
export const LeadershipPageQuery = graphql`
  query LeadershipPage($id: String!) {
    markdownRemark(id: { eq: $id} frontmatter: { templateKey: { eq: "leadership" } }) {
      frontmatter {
        title
        heading
        subheading
        positions {
          exec {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
          }
          chairs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
          }
        }
      }
    }
  }
`;
