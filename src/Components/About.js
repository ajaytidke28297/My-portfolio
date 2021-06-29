import React from "react";

const About = ({ data }) => {
  if (data) {
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="heading">
          <h1>Nice to meet you</h1>
          <h1>Nice to meet you</h1>
        </div>
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="columns download">
            <p>
              <a
                href={resumeDownload}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
