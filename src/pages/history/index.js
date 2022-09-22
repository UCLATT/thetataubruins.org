import * as React from "react";
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

const HistoryPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
    const heroImage = getImage('/img/home.png');

    return (
        <Layout>
            <FullWidthImageSmall image={heroImage} title={'History'} subheading={''} />
            
            <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
                <Container sm='1'>
                    <Row>
                        <Col>
                            <h1>History of Theta Tau at UCLA</h1>

                            The idea of starting a Theta Tau at UCLA has always been existent, but came to reality in October of 2012, when brothers Alan Bui and Byron Pang shared interests in starting a chapter at UCLA. The two gathered a few interested students for an orientation from Theta Tau's executive director, Michael Abraham.
                            <br /><br />
                            On January 14th, 2013, Michael Abraham formally established the Theta Tau Interest Group at UCLA. In three months time, the founding class began to take shape, forging bonds of fraternal fellowship and building a solid foundation that may last for generations to come. The UCLA interest group was officially installed to become a colony of Theta Tau on April 14th, 2013 consisting of 19 charter members.
                            <br /><br />
                            Two years later, on April 25th, 2015, the UCLA Colony was installed as the Upsilon Delta Chapter.
                        </Col>
                        <Col><StaticImage src="../../img/history/history1.jpg" alt="" style={{ borderRadius: '30px' }} /></Col>
                    </Row>
                    <Row style={{ marginTop: "25px"}}>
                        <Col style={{ maxWidth: '200px' }}><StaticImage src="../../img/history/history2.png" alt="" style={{ borderRadius: '30px' }} /></Col>
                        <Col>
                            <h1>Origins of Theta Tau</h1>

                            Theta Tau was founded as the "Society of Hammer and Tongs," on October 15, 1904, by Erich Julius Schrader, Elwin Leroy Vinal, William Murray Lewis, and Isaac Baker Hanks, mining engineering students at the University of Minnesota. In 1911, at the Fraternity's first national convention, the name was changed to Theta Tau, and it was decided that Theta Tau would include all branches of engineering. Since then, approximately 30,000 engineering students have been initiated to become part of Theta Tau, altogether united by a strong bond of fraternal fellowship.
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "25px"}}>
                        <Col>
                            <h1>Faculty Advisor</h1>

                            Dr. William Goodin is a senior manager with more than 30 years of experience in alumni and corporate networking. He is currently serving as an advisor and mentor to numerous student groups and individual students and alumni. Since 2011, Dr. Goodin is the Associate Director of Alumni Relations of the Henry Samueli School of Engineering and Applied Science. He is responsible for building and maintaining relationships with alumni to increase their participation and involvement within the School. Dr. Goodinis more focused in the Electrical Engineering department. Being the Industry Relations Coordinator, he builds and nurtures relationships between the UCLA Electrical Engineering Department, allied departments, and the industry. Dr. Goodin is a Mathematics B.A. graduate of SJSU, a Computer Science M.S. graduate, a Ph.D graduate in Computational Fluid Dynamics, and a M.Eng graduate in Engineering Management all at UCLA.
                        </Col>
                        <Col style={{ maxWidth: '300px' }}><StaticImage src="../../img/history/history3.jpg" alt="" style={{ borderRadius: '30px' }} /></Col>
                    </Row>
                    <Row style={{ marginTop: "25px"}}>
                        <Col fluid style={{ textAlign: 'center' }}><StaticImage src="../../img/history/history4.jpg" alt="" style={{ borderRadius: '30px' }} /></Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export default HistoryPage;

export const historyPageQuery = graphql`
  query HistoryQuery {
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
