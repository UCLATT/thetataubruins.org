import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImageSmall from "../components/FullWidthImageSmall";

import "../css/family-tree.css";


// eslint-disable-next-line
export const FamilyTreeTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                  </div>
                  



                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!--///////////////////////////////////
            // family
            ///////////////////////////////////--> */}
    <p className="category-title text-xs-center">Veritas</p>
    <div className="container family">
      <div className="tree" style={{width: "2200px"}}>
        <ul>
          <li>
            <a className="alumni">Alan Bui</a>
            <ul>
              <li>
                <a className="alumni">Gordon Yoon</a>
                <ul>
                  <li>
                    <a className="alumni">John Ingrao</a>
                    <ul>
                      <li>
                        <a className="alumni">Christopher Wang</a>
                        <ul>
                          <li>
                            <a className="alumni">Claire Ko</a>
                            <ul>
                              <li>
                                <a>Christy Yee</a>
                                <ul>
                                  <li>
                                    <a>Daniel Zhou</a>
                                  </li>
                                  <li>
                                    <a>Pranav Pata</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Karan Phadnis</a>
                <ul>
                  <li>
                    <a className="alumni">JJ Estacio</a>
                    <ul>
                      <li>
                        <a className="alumni">Ben Huang</a>
                        <ul>
                          <li>
                            <a className="alumni">Darren Ait Kaci Azzou</a>
                            <ul>
                              <li>
                                <a>Vivianne Dinh</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="alumni">Mabel Chen</a>
                        <ul>
                          <li>
                            <a className="alumni">Dai An Jiang</a>
                            <ul>
                              <li>
                                <a>Emily Yu</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Kyle Nguyen</a>
            <ul>
              <li>
                <a className="alumni">Constant Chi</a>
              </li>
              <li>
                <a className="alumni">Ryan Cheng</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Raymond Liu</a>
            <ul>
              <li>
                <a className="alumni">Alana Bianes</a>
                <ul>
                  <li>
                    <a className="alumni">Sunny Tang</a>
                    <ul>
                      <li>
                        <a className="alumni">Zachary Prong</a>
                        <ul>
                          <li>
                            <a className="alumni">Subhodh Madala</a>
                            <ul>
                              <li>
                                <a className="alumni">Ryan Dai</a>
                                <ul>
                                  <li>
                                    <a>Dorian Humbert</a>
                                    <ul>
                                    <li>
                                      <a>Karl Goeltner</a>
                                    </li>
                                  </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Casey Le</a>
            <ul>
              <li>
                <a className="alumni">Kevin Wu</a>
                <ul>
                  <li>
                    <a className="alumni">Michelle Wang</a>
                    <ul>
                      <li>
                        <a className="alumni">Ramu Bedekar</a>
                        <ul>
                          <li>
                            <a className="alumni">Alex Yu</a>
                            <ul>
                              <li>
                                <a className="alumni">Sonny Huynh</a>
                                <ul>
                                  <li>
                                    <a>Kimi Kodama</a>
                                    <ul>
                                      <li>
                                        <a>Kate Hsieh</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Lauren Reed</a>
                    <ul>
                      <li>
                        <a className="alumni">Samuel Chen</a>
                        <ul>
                          <li>
                            <a className="alumni">Matthew Allen</a>
                            <ul>
                              <li>
                                <a className="alumni">Stella Huang</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Eric Chen</a>
                                    <ul>
                                      <li>
                                        <a>Christine Jung</a>
                                        <ul>
                                          <li>
                                            <a>Anthony Chung</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Sokchu Hwang</a>
            <ul>
              <li>
                <a className="alumni">Ryan Shin</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    {/* <!--///////////////////////////////////
            // family
            ///////////////////////////////////--> */}
    <p className="category-title text-xs-center">Vulcan</p>
    <div className="container family text-center">
      <div className="tree family-top" style={{width: "2200px"}}>
        <ul>
          <li>
            <a className="alumni">Christopher Lim</a>
            <ul>
              <li>
                <a className="alumni">Danzel David</a>
                <ul>
                  <li>
                    <a className="alumni">Albert Tao</a>
                    <ul>
                      <li>
                        <a className="alumni">Lili Nguyen</a>
                        <ul>
                          <li>
                            <a className="alumni">Max Zhu</a>
                            <ul>
                              <li>
                                <a className="alumni">Jasmine Trinh</a>
                                <ul>
                                  <li>
                                    <a>Dan Nguyen</a>
                                    <ul>
                                      <li>
                                        <a>Kritin Garg</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Hilarry Hoang</a>
                <ul>
                  <li>
                    <a className="alumni">Andrew Nguyen</a>
                    <ul>
                      <li>
                        <a className="alumni">Leon Zhang</a>
                        <ul>
                          <li>
                            <a className="alumni">Patrick Shih</a>
                            <ul>
                              <li>
                                <a className="alumni">Silviu Andronescu</a>
                                <ul>
                                  <li>
                                    <a>Jacob Rajacich</a>
                                    <ul>
                                      <li>
                                        <a>Wyatt Babcock</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Calvin Eusebio</a>
            <ul>
              <li>
                <a className="alumni">Richard Sun</a>
                <ul>
                  <li>
                    <a className="alumni">Guillaume Lam</a>
                  </li>
                  <li>
                    <a className="alumni">Cassie Pong</a>
                    <ul>
                      <li>
                        <a className="alumni">Brandon Vu</a>
                        <ul>
                          <li>
                            <a className="alumni">Jon Chon</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Ling Chang</a>
            <ul>
              <li>
                <a className="alumni">Jonathan Tang</a>
                <ul>
                  <li>
                    <a className="alumni">Shawn Wong</a>
                    <ul>
                      <li>
                        <a className="alumni">Andrew Hsu</a>
                        <ul>
                          <li>
                            <a className="alumni">Derrick Benson</a>
                            <ul>
                              <li>
                                <a className="alumni">Chris Ewy</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Jason Kim</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Saman Hashemipour</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Kevin Chen</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Nate Atkinson</a>
                                                <ul>
                                                  <li>
                                                    <a>Daniel Smith</a>
                                                    <ul>
                                                      <li>
                                                        <a>Duncan Di Mauro</a>
                                                      </li>
                                                      <li>
                                                        <a>Shashvat Patel</a>
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Eric Kao</a>
          </li>
          <li>
            <a className="alumni">Ken Araki</a>
          </li>
        </ul>
      </div>
    </div>

    {/* <!--///////////////////////////////////
            // family
            ///////////////////////////////////--> */}
    <p className="category-title text-xs-center">Atlas</p>
    <div className="container family text-center">
      <div className="tree family-top" style={{width: "2200px"}}>
        <ul>
          <li>
            <a className="alumni">David Yang</a>
            <ul>
              <li>
                <a className="alumni">Grace Lin</a>
                <ul>
                  <li>
                    <a className="alumni">Anny Lin</a>
                    <ul>
                      <li>
                        <a className="alumni">Chris Cheng</a>
                        <ul>
                          <li>
                            <a className="alumni">Jacob Ng</a>
                            <ul>
                              <li>
                                <a className="alumni">Raj Intwala</a>
                                <ul>
                                  <li>
                                    <a>Zachary Wong</a>
                                    <ul>
                                      <li>
                                        <a>Alex Chen</a>
                                        <ul>
                                          <li>
                                            <a>Eric Zhang</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Elaine Truong</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Byron Pang</a>
            <ul>
              <li>
                <a className="alumni">Sean Oh</a>
                <ul>
                  <li>
                    <a className="alumni">Damian Gutierrez</a>
                    <ul>
                      <li>
                        <a className="alumni">Sean Kim</a>
                        <ul>
                          <li>
                            <a className="alumni">Joseph Kim</a>
                            <ul>
                              <li>
                                <a className="alumni">Angela Shiu</a>
                                <ul>
                                  <li>
                                    <a>Ryan Lin</a>
                                    <ul>
                                      <li>
                                        <a>Mengan Wang</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Walter Chi</a>
            <ul>
              <li>
                <a className="alumni">Patrick Yang</a>
                <ul>
                  <li>
                    <a className="alumni">Jonathan Lee</a>
                    <ul>
                      <li>
                        <a className="alumni">Nathan Tsai</a>
                        <ul>
                          <li>
                            <a className="alumni">Evelyn Gao</a>
                            <ul>
                              <li>
                                <a className="alumni">Vince Wu</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Michelle Yang</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Shirley Ho</a>
            <ul>
              <li>
                <a className="alumni">Victor Hsiang</a>
                <ul>
                  <li>
                    <a className="alumni">Jonathan Cheung</a>
                    <ul>
                      <li>
                        <a className="alumni">Melanie Wong</a>
                        <ul>
                          <li>
                            <a className="alumni">Audrey Tu</a>
                            <ul>
                              <li>
                                <a className="alumni">Julia Wang</a>
                                <ul>
                                  <li>
                                    <a>Anh Mac</a>
                                    <ul>
                                      <li>
                                        <a>Adelpha Chan</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Don Pham</a>
                    <ul>
                      <li>
                        <a className="alumni">Talia Saravi</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Prithvi Rajasekaran</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Jason Kitchener</a>
            <ul>
              <li>
                <a className="alumni">Brad Schwandt</a>
                <ul>
                  <li>
                    <a className="alumni">Frederick Kennedy</a>
                    <ul>
                      <a className="alumni">Anderson Ju</a>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Michelle Lee</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Amy Thelen</a>
                <ul>
                  <li>
                    <a className="alumni">Shushanik Stepanyan</a>
                    <ul>
                      <li>
                        <a className="alumni">Christian Yu</a>
                        <ul>
                          <li>
                            <a>Sei Chang</a>
                            <ul>
                              <li>
                                <a>Junho Choi</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    {/* <!--///////////////////////////////////
            // family
            ///////////////////////////////////--> */}
    <p className="category-title text-xs-center">Phoenix</p>
    <div className="container family text-center">
      <div className="tree family-top" style={{width: "2200px"}}>
        <ul>
          <li>
            <a className="alumni">Trong Nguyen</a>
            <ul>
              <li>
                <a className="alumni">Jacqueline Yang</a>
                <ul>
                  <li>
                    <a className="alumni">Jasmine Mok</a>
                    <ul>
                      <li>
                        <a className="alumni">Justin Duong</a>
                        <ul>
                          <li>
                            <a>Billy Chen</a>
                            <ul>
                                <li>
                                  <a>Melissa Chang</a>
                                </li>
                              </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Maggie Gunawan</a>
                <ul>
                  <li>
                    <a className="alumni">Brian Shih</a>
                    <ul>
                      <li>
                        <a className="alumni">Joyce Li</a>
                        <ul>
                          <li>
                            <a>Bianca Villamor</a>
                            <ul>
                              <li>
                                <a>Michelle Zhuang</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Gary Bui</a>
                    <ul>
                      <li>
                        <a className="alumni">Wenlong Xiong</a>
                        <ul>
                          <li>
                            <a className="alumni">Cassandra Bautista</a>
                            <ul>
                              <li>
                                <a className="alumni">Audrey Pham</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Kevin Yi</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="alumni">Jonathan Song</a>
                        <ul>
                          <li>
                            <a className="alumni">Michael Gee</a>
                            <ul>
                              <li>
                                <a>Bryan Pham</a>
                                <ul>
                                  <li>
                                    <a>Anish Dulla</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="alumni">David Cho</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Kevin Kim</a>
            <ul>
              <li>
                <a className="alumni">Alex Guo</a>
                <ul>
                  <li>
                    <a className="alumni">Michelle Doelling</a>
                    <ul>
                      <li>
                        <a className="alumni">David Bruce</a>
                        <ul>
                          <li>
                            <a className="alumni">Alex Caballero</a>
                            <ul>
                              <li>
                                <a className="alumni">Kyle Okazaki</a>
                                <ul>
                                  <li>
                                    <a>Sarah Jade Hakim</a>
                                    <ul>
                                      <li>
                                        <a>Cody Do</a>
                                        <ul>
                                          <li>
                                            <a>Angela Zhang</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="alumni">Rebecca Chen</a>
                <ul>
                  <li>
                    <a className="alumni">Abhijoy Saha</a>
                    <ul>
                      <li>
                        <a className="alumni">Ingrid Spielbauer</a>
                        <ul>
                          <li>
                            <a className="alumni">Daniel Lin</a>
                            <ul>
                              <li>
                                <a>Kenneth Tjhan</a>
                                <ul>
                                  <li>
                                    <a>June Chang</a>
                                    <ul>
                                      <li>
                                        <a>Aaron Park</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="alumni">Pascal Duong</a>
                        <ul>
                          <li>
                            <a className="alumni">Nick Mak</a>
                            <ul>
                              <li>
                                <a className="alumni">Khoi Nguyen</a>
                                <ul>
                                  <li>
                                    <a>Paul Vu</a>
                                    <ul>
                                      <li>
                                        <a>Clark Decastro</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="alumni">Patrick Lai</a>
                    <ul>
                      <li>
                        <a className="alumni">Andrew Arifin</a>
                        <ul>
                          <li>
                            <a className="alumni">Brittany Hsu</a>
                            <ul>
                              <li>
                                <a className="alumni">Konnor Rainville</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Bradley Mont</a>
                                    <ul>
                                      <li>
                                        <a>Dory Veksler</a>
                                        <ul>
                                          <li>
                                            <a>Amanda Ung</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Jeannie Nguyen</a>
            <ul>
              <li>
                <a className="alumni">Ben Gau</a>
                <ul>
                  <li>
                    <a className="alumni">YY Wan</a>
                    <ul>
                      <li>
                        <a className="alumni">Amlan Bose</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="alumni">Joseph Shire</a>
            <ul>
              <li>
                <a className="alumni">Nick Yee</a>
                <ul>
                  <li>
                    <a className="alumni">Jerry Chen</a>
                    <ul>
                      <li>
                        <a className="alumni">Jane Lee</a>
                        <ul>
                          <li>
                            <a className="alumni">Brittany Ham</a>
                            <ul>
                              <li>
                                <a>Stephen Kim</a>
                                <ul>
                                  <li>
                                    <a>Kevin Tang</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="alumni">Joe Burton</a>
                        <ul>
                          <li>
                            <a className="alumni">Anna Zhong</a>
                            <ul>
                              <li>
                                <a className="alumni">Eric Zhang</a>
                                <ul>
                                  <li>
                                    <a>Thy Tran</a>
                                    <ul>
                                      <li>
                                        <a>Megan Pham</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Tao Lu</a>
                        <ul>
                          <li>
                            <a>Melody Tang</a>
                            <ul>
                              <li>
                                <a>Charlotte Schmitt</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>Ashley Kuwahara</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div className="row legend">
      <p className="text-muted" style={{fontSize: "14px"}}>
        *Brothers that are in red nodes are alumni.
      </p>
    </div>
    </div>
  );
};

FamilyTreeTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const FamilyTree = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FamilyTreeTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

FamilyTree.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FamilyTree;

export const pageQuery = graphql`
  query FamilyTreeTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "family-tree" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
