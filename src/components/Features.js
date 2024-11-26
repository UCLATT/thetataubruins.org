import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import "./styles.css";

const FeatureGrid = ({ gridItems }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Function to check screen width and set `isMobile` accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on component mount
    handleResize();

    // Add event listener to update on resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="columns is-multiline grid-columns"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {gridItems.map((item) => (
        <div key={item.text} className="column is-3">
          <section
            className="section"
            style={{
              minHeight: isMobile ? "200px" : "280px",
            }}
          >
            <div
              style={{
                minHeight: isMobile ? "200px" : "280px",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "grid",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "5px",
                  fontSize: "1.2rem",
                }}
              >
                {item.text}
              </p>
              <p>{item.major}</p>
              <p>{item.year}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

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
