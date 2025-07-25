import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";

import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";
//test


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
      }}>Pi Class</p>
      <Features gridItems={classes.pi} />

      <p className = "classHeader">Rho Class</p>
      <Features gridItems={classes.rho} />

      <p className = "classHeader">Sigma Class</p>
      <Features gridItems={classes.sigma} />

      <p className = "classHeader">Tau Class</p>
      <Features gridItems={classes.tau} />

      <p className = "classHeader">Upsilon Class</p>
      <Features gridItems={classes.upsilon} />

      <p className = "classHeader">Phi Class</p>
      <Features gridItems={classes.phi} />

      <p className = "classHeader">Chi Class</p>
      <Features gridItems={classes.chi} />

      <p className = "classHeader">Psi Class</p>
      <Features gridItems={classes.psi} />
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
    nu: PropTypes.array,
    xi: PropTypes.array,
    omicron: PropTypes.array,
    pi: PropTypes.array,
    rho: PropTypes.array,
    sigma: PropTypes.array,
    tau: PropTypes.array,
    upsilon: PropTypes.array,
    phi: PropTypes.array,
    chi: PropTypes.array,
    psi: PropTypes.array,
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
          nu {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          xi {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          omicron {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          pi {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          rho {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          sigma {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          tau {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          upsilon {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          phi {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          chi {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
              }
            }
            text
            major
            year
          }
          psi {
            image {
              childImageSharp {
                gatsbyImageData(width: 360, quality: 100, layout: CONSTRAINED)
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