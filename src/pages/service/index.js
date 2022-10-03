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
                    <Toast.Body>Sorry, this page is undergoing maintenance.</Toast.Body>
                </Toast>
            </ToastContainer>

            <FullWidthImageSmall image={heroImage} title={'Service'} subheading={''} />
            
            <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>Campus</h1>
                <h4>IDEA Hacks - January 15-17 2016</h4>
                An annual hardware-focused hackathon, put together by our brothers and UCLA's IEEE. This year's theme is: The Internet of Things!
                <StaticImage src='../../../static/img/service/ideahacks_2016/ideahacks_2016_1.jpeg' />
                <h4>IDEA Hacks - January 23-25 2015</h4>
                (IDE)A Hacks is UCLA's first, full hardware-focused hackathon, put together by our brothers and UCLA's IEEE. The theme: Wearable Technology. "Imagine. Develop. Execute. Achieve."
            </section>
            <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>Local</h1>
                <h4>Are You Smarter Than a Professor 2016</h4>
                In the Spring Quarter of 2016, Theta Tau hosted its second annual charity event called "Are You Smarter than a Professor?" in which teams of students competed against teams of engineering professors in a variety of trivia style questions, inspired by the popular game show “Are You Smarter than a 5th Grader?”. All proceeds went to Greater Minds in STEM, a program used to foster and develop young, underprivileged students’ interests in the sciences, a goal that Theta Tau strongly supports.
                <h4>Are You Smarter Than a Professor 2015</h4>
                Are You Smarter Than a Professor is a trivia competition between participating students and professors in various subject areas. All proceeds went to Great Minds in STEM, a non-profit organization based in Los Angeles that promotes STEM (science, technology, engineering, mathematics) educational awareness for underprivileged students.
                <h4>Botball Tournament</h4>
                Botball is a regional Los Angeles tournament dedicated to furthering robotics education for middle and high school-aged students. Since 2013, Theta Tau has celebrated STEM education by volunteering at the event, helping students on their robotics projects.
                <h4>Beach Cleanup</h4>
                Each quarter, our fraternity treks to Santa Monica beach for a day of action, picking up trash and beautifying our neighborhood.
            </section>
            <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>National</h1>
                <h4>Alternative Spring Break 2016</h4>
                Every spring break, the brothers of Theta Tau volunteer their time with brothers across the country to build homes for those less fortunate. The weeklong event unites over 80 brothers from 18 chapters and colonies in Ventura, CA. This year, our brothers Michelle Doelling and Lili Nguyen went to volunteer.
                <h4>Alternative Spring Break 2014</h4>
                Every spring break, Theta Tau brothers volunteer their time with brothers across the country to build homes for those less fortunate. The weeklong event unites over 80 brothers from 18 chapters and colonies in Ventura, CA.
            </section>
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
