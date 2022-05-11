import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";


import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";

// eslint-disable-next-line
export const ActivesPageTemplate = ({
  title,
  content,
  image,
  heading,
  subheading,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

ActivesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ActivesPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ActivesPageTemplate
        contentComponent={HTMLContent}
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ActivesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActivesPage;

export const ActivesPageQuery = graphql`
  query ActivesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
      }
    }
  }
`;
