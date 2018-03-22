import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";
import styles from "./about.module.css";

const User = props => {
  return (
    <div className={styles.user}>
      <img src="{props.avatar}" className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  );
};

export default () => (
  <Container>
    <h1>About Page</h1>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Madhusudhan"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Madhusudhan, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <Link to="/">Home</Link>
  </Container>
);
