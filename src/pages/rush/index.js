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

import '../../components/buttonStyle.css';

import {
    Timeline,
    Container as Container2,
    YearContent,
    BodyContent,
    Section,
    Description,
    Content,
} from 'vertical-timeline-component-react';

const RushPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
    const heroImage = getImage('/img/home.png');
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#405b73',
        subtitleColor: '#bf9765',
        textColor: '#262626',
    };

    return (
        <Layout>
            <FullWidthImageSmall image={heroImage} title={'Spring Recruitment 2025'} subheading={''} />
            <section className='section' style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>Letter from the Recruitment Chairs</h1>
                <br />
                Hey there Spring Rush 2025!
                <br /><br />
                We are thrilled to welcome you to our upcoming recruitment week for Theta Tau's Upsilon Delta Chapter. Although we are known as a professional fraternity, our chapter prides ourselves on our heavy emphasis on the brotherhood and family that we've formed over past few the years. As the recruitment chairs, we wanted to take a moment to express our excitement for the upcoming recruitment week and the opportunity to meet you!
                <br /><br />
                We were both in your exact position, uncertain about our career paths and struggling to find our place within the uncharted territory that is UCLA Engineering. We came to recruitment with the hope of finding a group of lifelong friends and mentors to guide and support us. The strangers that we met at the beginning of recruitment week eventually became the people we now call our family. It wasn't until after we joined that we realized we had found exactly what we were looking for.
                <br /><br />
                Whether it be frantically trying to figure out a trivial bug before a midnight deadline or going on a spontaneous snowboarding trip only to be deserted in the mountains, our brothers are always only a call away. While we all come from different walks of life, we were able to find common ground in our path of self-discovery. There is no one specific type of personality that belongs to Theta Tau. We strive to learn from each other and to be proud of all our achievements.
                <br /><br />
                This spring, we hope you will look past your fears and hesitations to find your place within this genuine group of individuals who we call home.
                <br /><br />
                Your Recruitment Chairs,
                <br /><br />
                - Austin Yamamoto, Kabeer Minocha, and Shannon Chau
            </section>
            <section className='section' style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>Recruitment Schedule</h1>
                <br />
                
                <Timeline lang="en" theme={customTheme} dateFormat="with-weekday" collapse>
                    <Container2 title="Meet the Brothers" startDate="2025/04/07">
                        <Content
                            title="Get to know the brothers of Theta Tau!"
                            description={[
                                '5-7 PM',
                                'Engineering IV Patio',
                                'Casual Attire',
                            ]}
                        />
                    </Container2>
                    <Container2 title="Engineering Night" startDate="2025/04/08">
                        <Content
                            title="Put your innovation skills to the test in a fun engineering challenge!"
                            description={[
                                '5-7 PM',
                                'Engineering IV Patio',
                                'Casual Attire',
                            ]}
                        />
                    </Container2>
                    <Container2 title="Information Night" startDate="2025/04/09">
                        <Content
                            title="Discover what our organization has to offer as you hear the unique stories of our brothers and alumni!"
                            description={[
                                '5-7 PM',
                                'Engineering IV Patio',
                                'Business Casual',
                            ]}
                        />
                    </Container2>
                    <Container2 title="Beach Night" startDate="2025/04/10">
                        <Content
                            title="Enjoy an evening at the beach and get to know the brothers better!"
                            description={[
                                'INVITE ONLY',
                                'Santa Monica Beach',
                                'Warm/Casual Attire',
                            ]}
                        />
                    </Container2>
                    <Container2 title="Interviews" startDate="2025/04/11">
                        <Content
                            title="TBD"
                            description={[
                                'INVITE ONLY',
                                'Location TBD',
                                'Business Professional',
                            ]}
                        />
                    </Container2>
                </Timeline>
                <div style={{textAlign: 'center'}}>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfZ4FK-_KSoK28SNBLon_eNd23DU7ZJau9EX2U15S-lmpUDsg/viewform">
                        <button
                            style={{
                                width: '200px',
                                backgroundColor: "rgb(64, 20, 15)"
                            }}
                            class="button-27"
                            role="button"
                        >
                            INTEREST FORM
                        </button>
                    </a>
                </div>

                {/*
                <br />
                <CardGroup>
                    <Card>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Monday 9/26</Card.Subtitle>
                        <Card.Title>Meet the Chapter</Card.Title>
                        <Card.Text>
                            Get to know the brothers of Theta Tau
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                6-8 PM <br />
                                Engineering VI Patio <br />
                                Casual Attire <br />
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Tuesday 9/27</Card.Subtitle>
                        <Card.Title>Engineering Night</Card.Title>
                        <Card.Text>
                            Put your innovation skills to the test in a fun engineering challenge!
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                6-8 PM <br />
                                Engineering VI Patio <br />
                                Casual Attire <br />
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Wednesday 9/28</Card.Subtitle>
                        <Card.Title>Information Night</Card.Title>
                        <Card.Text>
                            Discover what our organization has to offer as you hear the unique stories of our brothers and alumni
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                6-8 PM <br />
                                Location TBD <br />
                                Business Casual <br />
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Thursday 9/29</Card.Subtitle>
                        <Card.Title>Beach Night</Card.Title>
                        <Card.Text>
                            Enjoy an evening at the beach and get to know the bros better!
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                INVITE ONLY <br />
                                Santa Monica Beach <br />
                                Warm/Casual Attire <br />
                            </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Friday 9/30</Card.Subtitle>
                        <Card.Title>Interviews</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>
                                INVITE ONLY <br />
                                Location TBD <br />
                                Business Formal <br />
                            </small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
                */}
            </section>
            <section className="section section--gradient" style={{ marginLeft: "10%", marginRight: "10%" }}>
            <Container>
                <Row>
                    <Col><StaticImage src="../../img/rush/tauRush2023.jpg" alt="" style={{ borderRadius: '30px' }} /></Col>
                    <Col><StaticImage src="../../img/rush/rush2.jpg" alt="" style={{ borderRadius: '30px' }} /></Col>
                </Row>
                <Row style={{ marginTop: "25px"}}>
                    <Col>
                        <Card style={{ borderRadius: '30px' }}>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    "I went into rush looking for food. I came out finding friends, family, and unforgettable memories. There really is no words to describe this amazing experience."{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Leon Zhang, <cite title="Source Title">Delta Class</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div className="ratio ratio-16x9" style={{ borderRadius: '30px' }}>
                            {/*<iframe width="1248" height="702" src="https://www.youtube.com/embed/5OiHiDYd2KQ" title="Theta Tau at UCLA | Spring Recruitment '21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
                            <iframe src="https://www.youtube.com/embed/5OiHiDYd2KQ" title="YouTube video" allowfullscreen />
                        </div>
                    </Col>
                    <Col>
                    <Card style={{ borderRadius: '30px' }}>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                "I came into rush like most people - confused, shy, and alone. I never thought that it would give me some of my most valuable memories, countless laughs and lifelong friends that I can't, and don't want to, imagine my life without.."{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Shushanik Stepanyan, <cite title="Source Title">Epsilon Class</cite>
                            </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </section>
            <section className='section' style={{ marginLeft: "10%", marginRight: "10%" }}>
                <h1>FAQ</h1>
                <br />
                
                <h4>What is Theta Tau?</h4>
                Theta Tau is a professional engineering fraternity founded on the following three pillars: Brotherhood, Professionalism and Service. We are also a group of like-minded individuals who seek to improve each other personally and professionally.
                <br /><br />

                <h4>What is Fall/Spring rush?</h4>
                Rush is a week-long set of events where potential pledges have the opportunity to learn more about Theta Tau and get a taste of what the fraternity provides. Come out and introduce yourself to the active members and see how you can contribute to a community of some of UCLA's top engineering students.
                <br /><br />

                <h4>Do I have to attend all rush events?</h4>
                Although there is no formal requirement, rushees are strongly encouraged to attend as many rush events as possible. Often, a large number of students attend and a memorable rushee will likely increase the chance of receiving a bid.
                <br /><br />

                <h4>What does Theta Tau look for in its applicants?</h4>
                Admission into Theta Tau is a competitive process. We handpick each candidate and we are devoted to excellence and leadership. Being an active member is an honor and an opportunity where you can develop yourself professionally and socially in a community of inspiring peers. Thus, we seek passionate individuals and motivated leaders.
                <br /><br />

                <h4>What is pledging?</h4>
                Pledging is a quarter-long process in which we determine whether you are a good fit to become a permanent member of our fraternity. During this period, you are expected to participate in the pledge program, which is designed to bring you and your pledge class closer together. The pledging process is your chance to prove to us that you and your pledge brothers belong in Theta Tau.
                <br /><br />

                <h4>Does Theta Tau haze?</h4>
                No, hazing violates California laws and Theta Tau does not participate in hazing.
                <br /><br />

                <h4>Wait, I still have more questions!</h4>
                Shoot us an email at <a href = "mailto: rush.thetatau.ucla@gmail.com">rush.thetatau.ucla@gmail.com</a>!
                <br /><br />
            </section>
        </Layout>
    );
};

export default RushPage;

export const rushPageQuery = graphql`
  query RushQuery {
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
