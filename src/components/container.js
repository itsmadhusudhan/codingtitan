import React from "react";

export const Links=({ children })=>(
  <a href="" style={{color:"#ccc"}}>{children}</a>
)

export default ({ children }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600, color:"#345432", fontWeight:900,fontFamily:"monospace" }}>{children}</div>
);