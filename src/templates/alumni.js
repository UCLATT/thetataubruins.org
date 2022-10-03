import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";

import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";

import { Toast, ToastContainer, Row, Col } from 'react-bootstrap';

// eslint-disable-next-line
export const AlumniPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  classes,
}) => {
    const [showToast, setShowToast] = useState(true);
    const heroImage = getImage(image) || image;

    return (
        <div>
            <ToastContainer
                className="p-3"
                position={'middle-center'}
                style={{marginBottom:'60px'}}
            >
                <Toast show={showToast} onClose={() => setShowToast(false)} bg='warning'>
                    <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Warning</strong>
                    <small></small>
                    </Toast.Header>
                    <Toast.Body>Sorry, this page is undergoing maintenance.</Toast.Body>
                </Toast>
            </ToastContainer>
                    


            <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />



        <p className = "classHeader" style={{
            marginTop: "40px",
        }}>Founding Class</p>
        <Features gridItems={classes.founding} />

        <p className = "classHeader">Alpha Class</p>
        <Features gridItems={classes.alpha} />

        <p className = "classHeader">Beta Class</p>
        <Features gridItems={classes.beta} />

        <p className = "classHeader">Gamma Class</p>
        <Features gridItems={classes.gamma} />

        <p className = "classHeader">Delta Class</p>
        <Features gridItems={classes.delta} />

        <p className = "classHeader">Epsilon Class</p>
        <Features gridItems={classes.epsilon} />

        <p className = "classHeader">Zeta Class</p>
        <Features gridItems={classes.zeta} />

        <p className = "classHeader">Eta Class</p>
        <Features gridItems={classes.eta} />

        <p className = "classHeader">Theta Class</p>
        <Features gridItems={classes.theta} />

        <p className = "classHeader">Iota Class</p>
        <Features gridItems={classes.iota} />

        <p className = "classHeader">Kappa Class</p>
        <Features gridItems={classes.kappa} />

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

AlumniPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  classes: PropTypes.shape({
    founding: PropTypes.array,
    alpha: PropTypes.array,
    beta: PropTypes.array,
    gamma: PropTypes.array,
    delta: PropTypes.array,
    epsilon: PropTypes.array,
    zeta: PropTypes.array,
    eta: PropTypes.array,
    theta: PropTypes.array,
    iota: PropTypes.array,
    kappa: PropTypes.array,
    lambda: PropTypes.array,
    mu: PropTypes.array,
    nu: PropTypes.array,
    xi: PropTypes.array,
    omicron: PropTypes.array,
    pi: PropTypes.array,
  }),
};

const AlumniPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AlumniPageTemplate
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

AlumniPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AlumniPage;
export const AlumniPageQuery = graphql`
  query AlumniPage($id: String!) {
    markdownRemark(id: { eq: $id} frontmatter: { templateKey: { eq: "alumni" } }) {
        frontmatter {
            title
            heading
            subheading
            classes {
                founding {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                alpha {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                beta {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                gamma {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                delta {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                epsilon {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                zeta {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
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
                theta {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                iota {
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 240, quality: 100, layout: CONSTRAINED)
                    }
                    }
                    text
                    major
                    year
                }
                kappa {
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
