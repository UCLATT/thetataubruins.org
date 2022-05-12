import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import "./styles.css";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline grid-columns" 
  style = {{
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  }}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-3">
        <section className="section" style={{
          
        }}>
          <div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "grid",
              }}
            >
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
          </div>
          <div style = {{
            textAlign: "center",
          }}>
            <p>{item.text}</p>
            <p>{item.major}</p>
            <p>{item.year}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      major: PropTypes.string,
      year: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
