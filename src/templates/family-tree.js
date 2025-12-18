import React from "react";
import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Features from "../components/Features";
import "../css/family-tree.css";

import { getImage } from "gatsby-plugin-image";

import FullWidthImageSmall from "../components/FullWidthImageSmall";

// eslint-disable-next-line
export const FamilyTreeTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  classes,
}) => {
  const heroImage = getImage(image) || image;

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
    }
  }, []);

  return (
    <div>
      <FullWidthImageSmall img={heroImage} title={title} subheading={subheading} />
      
      {/*///////////////////////////////////
            // family
            ///////////////////////////////////*/}
     <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Veritas</p>
    <div ref={containerRef} className="container family text-center">
      <div className="tree" style={{width:'2000px'}}>
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
                                <a className="alumni">Christy Yee</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Daniel Zhou</a>
                                    <ul>
                                      <li>
                                      <a className="alumni">Annie Wang</a>
                                        <ul>
                                          <li>
                                            <a>Erika Tran</a>
                                              <ul>
                                                <li>
                                                  <a>Erica Lam</a>
                                                </li>
                                              </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a className="alumni">Neil Angsanto</a>
                                        <ul>
                                          <li>
                                            <a>Danny Dang</a>
                                              <ul>
                                                <li>
                                                  <a>Gautam Nair</a>
                                                </li>
                                              </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a className="alumni">Pranav Pata</a>
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
                                <a className="alumni">Vivianne Dinh</a>
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
                                <a className="alumni">Emily Yu</a>
                                <ul>
                                  <a className="alumni">Mansi Dutta</a>
                                  <ul>
                                    <li>
                                      <a className="alumni">Kelly Yu</a>
                                      <ul>
                                        <li>
                                          <a>Chloe Yoon</a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
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
                                    <a className="alumni">Dorian Humbert</a>
                                    <ul>
                                    <li>
                                      <a className="alumni">Karl Goeltner</a>
                                      <ul>
                                        <li>
                                          <a className="alumni">Emma Buxton</a>
                                          <ul>
                                            <li>
                                              <a>Thomas McConnell</a>
                                              <ul>
                                                <li>
                                                  <a>Ella Park</a>
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
                                    <a className="alumni">Kimi Kodama</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Kate Hsieh</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Kenny Wan</a>
                                            <ul>
                                              <a className="alumni">Justin Nguyen</a>
                                              <ul>
                                                <li>
                                                  <a>Arjun Mittha</a>
                                                </li>
                                                <li>
                                                  <a>Ryan Vu</a>
                                                </li>
                                              </ul>
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
                                        <a className="alumni">Christine Jung</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Anthony Chung</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Sally Min</a>
                                                <ul>
                                                  <li>
                                                    <a>Rachel Shim</a>
                                                    <ul>
                                                      <li>
                                                        <a>Rohan Jadhav</a>
                                                        <ul>
                                                          <li>
                                                            <a>Shaun Gao</a>
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

    {/*///////////////////////////////////
            // family
            ///////////////////////////////////*/}
    <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Vulcan</p>
    <div ref={containerRef} className="container family text-center">
      <div className="tree family-top" style={{width:"1200px"}}>
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
                                    <a className="alumni">Dan Nguyen</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Kritin Garg</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Krish Shah</a>
                                            <ul>
                                              <li>
                                                <a>Farrel Gormargana</a>
                                                <ul>
                                                  <li>
                                                    <a>Helene Gao</a>
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
                                    <a className="alumni">Jacob Rajacich</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Wyatt Babcock</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Annie Cen</a>
                                            <ul>
                                              <li>
                                                <a>Derek Wu</a>
                                                <ul>
                                                  <li>
                                                    <a>Felicia Chen</a>
                                                    <ul>
                                                      <li>
                                                        <a>Keani Finney</a>
                                                      </li>
                                                    </ul>
                                                    <ul>
                                                      <li>
                                                        <a>Tejas Ravi</a>
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li>
                                                <a>Tom Oh</a>
                                                <ul>
                                                  <li>
                                                    <a>Alex Yoon</a>
                                                    <ul>
                                                      <li>
                                                        <a>Bradley Morgan</a>
                                                      </li>
                                                      <li>
                                                        <a>Dahlia Navarro</a>
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
                                                    <a className="alumni">Duncan Di Mauro</a>
                                                    <ul>
                                                      <li>
                                                        <a className="alumni">Shashvat Patel</a>
                                                        <ul>
                                                          <li>
                                                            <a className="alumni">Akshay Gupta</a>
                                                            <ul>
                                                              <li>
                                                                <a>Jordan Yen</a>
                                                                <ul>
                                                                  <li>
                                                                    <a>Brian Chang</a>
                                                                  </li>
                                                                  <li>
                                                                    <a>Raphael Figueroa</a>
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

    {/*///////////////////////////////////
            // family
            ///////////////////////////////////*/}
     <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Atlas</p>
    <div ref={containerRef} className="container family text-center">
      <div className="tree family-top" style={{width:'2200px'}}>
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
                                    <a className="alumni">Zachary Wong</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Alex Chen</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Eric Zhang</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Ryan Ung</a>
                                                <ul>
                                                  <li>
                                                    <a>Shirley Xiang</a>
                                                    <ul>
                                                      <li>
                                                        <a>Chloe Li</a>
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li>
                                                <a className="alumni">Vikram Puliyadi</a>
                                                <ul>
                                                  <li>
                                                    <a className="alumni">Aaron Huynh</a>
                                                    <ul>
                                                      <li>
                                                        <a>Alyssa Halvorsen</a>
                                                      </li>
                                                      <li>
                                                        <a>Charline Chen</a>
                                                      </li>
                                                      <li>
                                                        <a>Lam Luong</a>
                                                        <ul>
                                                          <li>
                                                            <a>Katie Lew</a>
                                                            <ul>
                                                              <li>
                                                                <a>Bradley Co</a>
                                                              </li>
                                                            </ul>
                                                          </li>
                                                        </ul>
                                                      </li>
                                                      <li>
                                                        <a>Song Chen</a>
                                                          <ul>
                                                            <li>
                                                              <a>Shannon Chau</a>
                                                              <ul>
                                                                <li>
                                                                  <a>Reid Mendoza</a>
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
                                    <a className="alumni">Ryan Lin</a>
                                    <ul>
                                      <li>
                                      <a className="alumni">Mengan Wang</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Kok Chen Tzen</a>
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
                                    <a className="alumni">Anh Mac</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Adelpha Chan</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Christina Pham</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Teresa Bui</a>
                                                <ul>
                                                  <li>
                                                    <a>Joseph Lee</a>
                                                    <ul>
                                                      <li>
                                                        <a>Aadarsh Menon</a>
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
                            <a className="alumni">Sei Chang</a>
                            <ul>
                              <li>
                                <a className="alumni">Junho Choi</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Sam Chan</a>
                                      <ul>
                                        <li>
                                          <a>Alan Luupham</a>
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
      </div>
    </div>

    {/*///////////////////////////////////
            // family
            ///////////////////////////////////*/}
     <p className = "classHeader" style={{
        marginTop: "40px",
      }}>Phoenix</p>
    <div ref={containerRef} className="container family text-center" style={{
      marginBottom: "100px",
    }}>
      <div className="tree family-top" style={{width:"3400px"}}>
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
                            <a className="alumni">Billy Chen</a>
                            <ul>
                                <li>
                                  <a className="alumni">Melissa Chang</a>
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
                            <a className="alumni">Bianca Villamor</a>
                            <ul>
                              <li>
                                <a className="alumni">Michelle Zhuang</a>
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
                                <a className="alumni">Bryan Pham</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Anish Dulla</a>
                                      {/* <ul>
                                        <li>
                                          <a>June Park</a>
                                        </li>
                                      </ul> */}
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
                                    <a className="alumni">Sarah Jade Hakim</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Cody Do</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Angela Zhang</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Alan Vuong</a>
                                                <ul>
                                                  <li>
                                                    <a>Ryan Korb</a>
                                                      <ul>
                                                        <li>
                                                          <a>Vanessa Tran</a>
                                                        </li>
                                                      </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li>
                                                <a className="alumni">Tracy Nguyen</a>
                                                <ul>
                                                  <li>
                                                    <a>Benjamin Xie</a>
                                                      <ul>
                                                        <li>
                                                          <a>Emily Zhang</a>
                                                          <ul>
                                                            <li>
                                                              <a>Don Do</a>
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
                                <a className="alumni">Kenneth Tjhan</a>
                                <ul>
                                  <li>
                                    <a className="alumni">June Chang</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Aaron Park</a>
                                        <ul>
                                          <li>
                                            <a>Sophia Lee</a>
                                            <ul>
                                              <li>
                                                <a>Irvin Qi</a>
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
                        <a className="alumni">Pascal Duong</a>
                        <ul>
                          <li>
                            <a className="alumni">Nick Mak</a>
                            <ul>
                              <li>
                                <a className="alumni">Khoi Nguyen</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Paul Vu</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Clark Decastro</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Rudy Orre</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Kelly Tran</a>
                                                <ul>
                                                  <li>
                                                    <a>Andy Ren</a>
                                                    <ul>
                                                      <li>
                                                        <a>Amber Yeung</a>
                                                        <ul>
                                                          <li>
                                                            <a>Jeremy De Leon</a>
                                                          </li>
                                                        </ul>
                                                      </li>
                                                      <li>
                                                        <a>Michael Syavong</a>
                                                        <ul>
                                                          <li>
                                                            <a>Claire Kim</a>
                                                          </li>
                                                        </ul>
                                                        <ul>
                                                          <li>
                                                            <a>Jimmy Yang</a>
                                                          </li>
                                                        </ul>
                                                      </li>
                                                    </ul>
                                                  </li>

                                                  <li>
                                                    <a>Justin Sheehan</a>
                                                    <ul>
                                                      <li>
                                                        <a>Kennedy Hayashi</a>
                                                        <ul>
                                                          <li>
                                                            <a>Parth Goel</a>
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
                                        <a className="alumni">Dory Veksler</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Amanda Ung</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Cheryl Lim</a>
                                                <ul>
                                                  <li>
                                                    <a>Ryan Vu</a>
                                                      <ul>
                                                        <li>
                                                          <a>Esther Lee</a>
                                                          <ul>
                                                            <li>
                                                              <a>Alex Yousefi</a>
                                                              <ul>
                                                                <li>
                                                                  <a>Ellia Kim</a>
                                                                </li>
                                                              </ul>
                                                              <ul>
                                                                <li>
                                                                  <a>Haruto Cong</a>
                                                                </li>
                                                              </ul>
                                                            </li>
                                                            <li>
                                                              <a>Glen Troy San Diego</a>
                                                            </li>
                                                          </ul>
                                                        </li>
                                                      </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                              <li>
                                                <a>Kevin Yuan</a>
                                                  <ul>
                                                    <li>
                                                      <a>Kabeer Minocha</a>
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
                                <a className="alumni">Stephen Kim</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Kevin Tang</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Angela Liu</a>
                                        <ul>
                                          <li>
                                            <a>Lana Dang</a>
                                            <ul>
                                              <li>
                                                <a>Ashley Wu</a>
                                                <ul>
                                                  <li>
                                                    <a>Angela Magtoto</a>
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
                        <a className="alumni">Joe Burton</a>
                        <ul>
                          <li>
                            <a className="alumni">Anna Zhong</a>
                            <ul>
                              <li>
                                <a className="alumni">Eric Zhang</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Thy Tran</a>
                                    <ul>
                                      <li>
                                        <a className="alumni">Megan Pham</a>
                                        <ul>
                                          <li>
                                            <a className="alumni">Darren Huai</a>
                                            <ul>
                                              <li>
                                                <a className="alumni">Chiemeka Kalu</a>
                                                  <ul>
                                                    <li>
                                                      <a>Daniel Li</a>
                                                    </li>
                                                  </ul>
                                              </li>
                                              <li>
                                                <a>Theanh Nguyen</a>
                                                  <ul>
                                                    <li>
                                                      <a>Linh Pham</a>
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
                        <a className="alumni">Tao Lu</a>
                        <ul>
                          <li>
                            <a className="alumni">Melody Tang</a>
                            <ul>
                              <li>
                                <a className="alumni">Charlotte Schmitt</a>
                                <ul>
                                  <li>
                                    <a>Athan Seltzer</a>
                                  </li>
                                  <li>
                                    <a>Elizabeth Libertor</a>
                                      <ul>
                                        <li>
                                          <a>Soha Baig</a>
                                          <ul>
                                            <li>
                                              <a>Charlton Shih</a>
                                            </li>
                                            <li>
                                              <a>Shawn Nguyen</a>
                                            </li>
                                          </ul>
                                        </li>
                                      </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a className="alumni">Annie Chen</a>
                                <ul>
                                  <li>
                                    <a>Jason Co</a>
                                    <ul>
                                      <li>
                                        <a>Ethan Lee</a>
                                      </li>
                                    </ul> 
                                  </li>
                                </ul>
                              </li>
                              <li>
                              <a className="alumni">Victoria Ignacio</a>
                                <ul>
                                  <li>
                                    <a className="alumni">Jack Lin</a>
                                      <ul>
                                        <li>
                                          <a>Yena Lee</a>
                                          <ul>
                                            <li>
                                              <a>Niccolo Duina</a>
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
                            <a className="alumni">Ashley Kuwahara</a>
                            <ul>
                              <li>
                                <a className="alumni">Kai Alcayde</a>
                                <ul>
                                  <li>
                                    <a>Clara Lee</a>
                                      <ul>
                                        <li>
                                          <a>Austin Yamamoto</a>
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
      </div>
    </div>

    <div className="row legend" style={{marginBottom: '10px'}}>
      <p className="text-muted">
        *Brothers that are in red nodes are alumni.
      </p>
    </div>

    </div>
  );
};

FamilyTreeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
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
        classes={frontmatter.classes}
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

export const FamilyTreeQuery = graphql`
query FamilyTree($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
    }
  }
}
`;
