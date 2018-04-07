import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Coding Titan" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
