import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import FullWidthImage from "../components/FullWidthImage";
import FullWidthImageSmall from "../components/FullWidthImageSmall";

// eslint-disable-next-line
export const DefaultPageTemplate = ({ title, content, contentComponent, image, subheading }) => {
    const heroImage = getImage(image) || image;

    const PageContent = contentComponent || Content;

    return (
        <div>
            <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />
            <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="section">
                    <PageContent className="content" content={content} />
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    );
};

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DefaultPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
