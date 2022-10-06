import React from "react";
import { Link } from 'gatsby';
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import "./styles.css";
import "./buttonStyle.css";

export default function FullWidthImage(props) {
  const {
    height = "100vh",
    img,
    title,
    subheading,
    imgPosition = "center",
  } = props;

  console.log(img);

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          backgroundColor: "#40140f",
          zIndex: -1,
          flexShrink: 0,
          minWidth: '100%',
          minHeight: '100%'
          // backgroundColor: "black",
        }}
      >
        {!img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // minHeight: '100%',
              minHeight: '25vh',
              opacity: 0.5,
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              minHeight: "100vh",
              opacity: 0.5,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              paddingTop: "5vmax",
              // paddingBottom: "10vmax",
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold homefont"
                style={{
                  // boxShadow:
                    // "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  // backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  borderColor: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  // fontSize: "3.5rem",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  // boxShadow:
                  //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                  // backgroundColor: "rgb(255, 68, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                {subheading}
              </h3>
            )}
            {/*(<Link to='/rush'>
                <button
                class="button-27"
                role="button"
                style= {{
                    backgroundColor: "#A3A3A3",
                    color: "#000",
                    borderColor: "#fff",
                    marginTop: "-0.5rem",
                    borderRadius: '10px',
                    marginBottom: '-1.5rem',
                    borderColor: '#A3A3A3',
                    
                }}
                >
                  
                    <h5
                      className="is-size-5-mobile is-size-5-tablet is-size-5-widescreen"
                      style={{
                        color: 'white',
                      lineHeight: "1",
                      padding: "1rem",
                      // marginTop: "0.5rem",  
                    }}>
                      Fall Rush 2022
                    </h5>
                  
              </button>
              </Link>)*/}
          </div>          
        )}
        
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
