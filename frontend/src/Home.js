import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <img className="logohome" src="logo5.png " alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./About">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://wallpapers.com/images/hd/indian-cricket-blue-theme-poster-3ibwilalny969mj8.jpg"
                alt=""
                width="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp4012141.jpg"
                alt=""
                width="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_3t/4994.png"
                alt=""
                width="100%"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://pbs.twimg.com/media/E7eGQHNUcAIDJxO?format=jpg&name=medium"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Your Image"
                aria-hidden="true"
              />

              <h2 className="fw-normal">Batting Skill</h2>
              <p>
                If you possess excellent batting skills along with official
                sports certifications and documented evidence, please click
                here.
              </p>
              <p>
                <a className="btn btn-secondary" href="/Bat">
                  Click Me to Complaint &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://i0.wp.com/skyblogs.in/wp-content/uploads/2021/05/E0JbFBIXoAIsZgt.jpg?resize=768%2C960&ssl=1"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Your Image"
                aria-hidden="true"
              />
              <h2 className="fw-normal">Bowling Skill</h2>
              <p>
                If you excel in bowling and hold sports certifications and
                documented proof, please click here.
              </p>
              <p>
                <a className="btn btn-secondary" href="/Bowl">
                  Click Me to Complaint &raquo;
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://images.news9live.com/h-upload/2022/03/06/250123-ravindra-jadeja.jpg?w=1200&enlarge=true"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Your Image"
                aria-hidden="true"
              />
              <h2 className="fw-normal">All Rounder</h2>
              <p>
                If you possess exceptional batting and bowling skills, backed by
                sports certifications and supporting evidence, please click
                here.
              </p>
              <p>
                <a className="btn btn-secondary" href="/Allr">
                  Click Me to Complaint &raquo;
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Rohit Sharma <span className="text-muted">Hit Man</span>
              </h2>
              <br></br>
              <h5>
                Records:
                <h6>
                  <br></br>
                  <ul>
                    <li>
                      Three double centuries in One Day Internationals (ODIs), a
                      testament to his exceptional batting prowess.
                    </li>
                    <li>
                      One of the few players to have scored a double century and
                      two centuries in ODIs, showcasing his consistency.
                    </li>
                    <li>
                      Holding the record for the fastest century in Twenty20
                      (T20) internationals, highlighting his explosive batting
                      abilities.{" "}
                    </li>
                    <li>
                      Captaining the Mumbai Indians to victory in the Indian
                      Premier League (IPL) six times, making him one of the most
                      successful IPL skippers in history.
                    </li>
                  </ul>
                </h6>
              </h5>
              <h5>
                Rising from Adversity to Cricketing Legend:
                <h6 className="lead">
                  <br></br>

                  <small>
                    {" "}
                    <b>
                      Rohit Sharma's journey to cricket stardom was filled with
                      struggles and setbacks. Hailing from a modest background,
                      he overcame financial constraints and early career
                      hurdles. His resilience and dedication propelled him to
                      become one of India's cricketing legends. Rohit's hard
                      work and determination paid off, making him an iconic
                      figure in the sport.
                    </b>{" "}
                  </small>
                </h6>
              </h5>
            </div>
            <div className="col-md-5">
              <img
                src="1869048.png"
                alt="Your Image Alt Text"
                width="500"
                height="450"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Natarajan <span className="text-muted">Nattu</span>
              </h2>
              <h5>
                Records:
                <h6>
                  <br></br>
                  <ul>
                    <li>
                      He made his Indian Premier League (IPL) debut in 2017 with
                      the Kings XI Punjab (now Punjab Kings) and later played
                      for the Sunrisers Hyderabad.
                    </li>
                    <li>
                      He made his debut for the Indian national cricket team in
                      limited-overs formats (ODIs and T20Is) against Australia
                      in 2020.
                    </li>
                    <li>
                      He gained fame during India's tour of Australia in late
                      2020 and early 2021. He was a part of the Test series and
                      impressed with his bowling, especially during the
                      limited-overs matches.
                    </li>
                    <li>
                      He is known for his ability to consistently deliver
                      yorkers at the death in T20 cricket, making him a valuable
                      asset in the shortest format.
                    </li>
                  </ul>
                </h6>
              </h5>
              <h5>
                Natarajan's Inspiring Journey
                <h6 className="lead">
                  <br></br>

                  <small>
                    {" "}
                    <b>
                      T. Natarajan's path to cricket success is a tale of
                      tenacity. Hailing from a modest background, he faced
                      financial constraints and early career struggles. His
                      fortunes changed in the IPL, where he showcased his
                      talent. Natarajan's hard work led to a national debut, and
                      he shone on India's tour of Australia. His inspiring
                      journey from adversity to international acclaim makes him
                      a role model for aspiring cricketers.
                    </b>{" "}
                  </small>
                </h6>
              </h5>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src="Natarajan.png"
                alt="Your Image Alt Text"
                width="500"
                height="450"
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <hr className="featurette-divider" />
        </div>

        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>&copy; 2023 Cric Craze. &middot;</p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
