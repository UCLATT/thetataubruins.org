import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline" 
  style = {{
    maxWidth: "1200px",
    margin: "0 auto",

  }}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-3">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "120px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
              <p>Hello</p>
            </div>
          </div>
          <p>{item.text}</p>
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
    })
  ),
};

export default FeatureGrid;
