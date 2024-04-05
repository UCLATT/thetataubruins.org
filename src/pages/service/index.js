import React, { useState } from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import FullWidthImageSmall from '../../components/FullWidthImageSmall';
import FullWidthImage from '../../components/FullWidthImage';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Toast, ToastContainer } from 'react-bootstrap';

const ServicePage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
    const [showToast, setShowToast] = useState(true);
    const heroImage = getImage('/img/home.png');
    // const prefix = ''
    return (
        <Layout>
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
                    <Toast.Body>This page is under construction.</Toast.Body>
                </Toast>
            </ToastContainer>

            <FullWidthImageSmall image={heroImage} title={'Service'} subheading={''} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Layout>
    );
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
