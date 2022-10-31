import React from "react";
import profileImage from "./assets/profile__img.png";
import slack from "./assets/slack.png";
import github from "./assets/github.png";
import zuri from "./assets/zuri.png";
import I4G from "./assets/I4G.png";
import "./App.css";

function App() {
  const links = [
    {
      id: "twitter",
      name: "Twitter Link",
      url: "https://twitter.com/th_ejouRney",
    },
    {
      id: "btn__zuri",
      name: "Zuri Team",
      url: "https://training.zuri.team",
    },
    {
      id: "books",
      name: "Zuri Books",
      url: "https://books.zuri.team",
    },
    {
      id: "book__python",
      name: "Python Books",
      url: "https://books.zuri.team/python-for-beginners?ref_id=the_jouRney",
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      url: "https://background.zuri.team",
    },
    {
      id: "book__design",
      name: "Design Books",
      url: "https://books.zuri.team/design-rules",
    },
  ];

  const socials = [
    {
      image: slack,
      url: "",
    },
    {
      image: github,
      url: "",
    },
  ];

  const link = links.map((link) => {
    return (
      <a href={link.url} className="link" id={link.id} key={link.id}>
        {link.name}
      </a>
    );
  });

  const socialLinks = socials.map((link) => {
    return (
      <a href={link.url} className="social">
        <img src={link.image} alt={link.url} />
      </a>
    );
  });
  return (
    <>
      <div className="container">
        <div className="avatar">
          <div className="image">
            <img src={profileImage} alt="" className="img" />
          </div>
          <div className="name">
            <h2>Annette Black</h2>
          </div>
        </div>
        {/* links */}
        <div className="links">{link}</div>
        {/* socials */}
        <div className="socials">{socialLinks}</div>
        {/* footer */}
        <footer>
          <div className="zuri_logo">
            <img src={zuri} alt="" />
          </div>
          <div className="copyright_text">
            <p>
              HNG Internship 9 Frontend Task
            </p>
          </div>
          <div className="I4G_logo">
            <img src={I4G} alt="" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
