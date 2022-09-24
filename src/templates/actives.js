import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";

import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";

// eslint-disable-next-line
export const ActivesPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  classes,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />

      <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Eta Class</p>
      <Features gridItems={classes.eta} />

      <p className = "classHeader">Lambda Class</p>
      <Features gridItems={classes.lambda} />

      <p className = "classHeader">Mu Class</p>
      <Features gridItems={classes.mu} />
      
      <p className = "classHeader">Nu Class</p>
      <Features gridItems={classes.nu} />

      <p className = "classHeader">Xi Class</p>
      <Features gridItems={classes.xi} />

      <p className = "classHeader">Omicron Class</p>
      <Features gridItems={classes.omicron} />

      <p className = "classHeader">Pi Class</p>
      <Features gridItems={classes.pi} />
    </div>
  );
};

ActivesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  classes: PropTypes.shape({
    eta: PropTypes.array,
    lambda: PropTypes.array,
    mu: PropTypes.array,
    nu: PropTypes.array,
    xi: PropTypes.array,
    omicron: PropTypes.array,
    pi: PropTypes.array,
  }),
};

const ActivesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ActivesPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        classes={frontmatter.classes}
      />
    </Layout>
  );
};

ActivesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ActivesPage;
export const ActivesPageQuery = graphql`
  query ActivesPage($id: String!) {
    markdownRemark(id: { eq: $id} frontmatter: { templateKey: { eq: "actives" } }) {
      frontmatter {
        title
        heading
        subheading
        classes {
          eta {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          lambda {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          mu {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          nu {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          xi {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          omicron {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          pi {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }

        }
      }
    }
  }
`;
