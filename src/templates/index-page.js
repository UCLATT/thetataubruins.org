import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import LayoutHome from "../components/LayoutHome";
import FullWidthImage from "../components/FullWidthImage";
import { StaticImage } from "gatsby-plugin-image"

import homeImage from '../../static/img/TauBanquetHomeImg.jpg';


import "../css/index-page.css";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullWidthImageSmall from "../components/FullWidthImageSmall";


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
  return (
    <div>
      <FullWidthImage img={homeImage} title={title} subheading={subheading} />
      {/*<FullWidthImageSmall title={title} subheading={subheading} />*/}
      <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Row style={{textAlign: 'center'}}>
          <Col>
            <FontAwesomeIcon icon="fa-solid fa-user-group" />
            <div><h1 className = "home-piller-text">Brotherhood</h1></div>
            <FontAwesomeIcon icon="fa-solid fa-user-group" />
            <p>
              We forge lifelong bonds of fraternal friendship, a journey that develops and delivers a network of lasting personal and professional relationships. We foster an inviting, safe, and social environment in which our members become lifelong friends.
            </p>
          </Col>
          <Col>
            <h1 className = "home-piller-text">Service</h1>
            <p>
              We develop and nurture engineers with strong communication, problem-solving, collaboration, and leadership skills that we demonstrate in our profession, our community, and in our lives.
            </p>
          </Col>
          <Col>
            <h1 className = "home-piller-text">Professionalism</h1>
            <p>
              We are known for our service to our college, university and the larger community. Our service projects create a unifying environment for learning and personal growth for our members.
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <div style={{
          position: 'relative',
          textAlign: 'center',
          color: 'white'
        }}>
          <StaticImage src='../img/home/home2.jpeg' style={{minHeight: '200px', maxHeight: '500px'}} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'left',
            fontSize: '10vw',
            marginLeft: '-50px',
            marginRight: '-50px'
          }}>
              <h5>
              Committed to fostering leadership accross multiple engineering disciplines, Theta Tau is built upon core values that aim to strengthen both professional and fraternal bonds between members.
              </h5>
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
    <LayoutHome>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </LayoutHome>
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
