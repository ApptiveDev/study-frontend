import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import List from "./list_Section/listSection";
import Banner from "./banner_Section/banner";
import PopularVideos from "./video_section/videoSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="phone">
        <Header />
        <div className="main-content">
          <List />
          <Banner />
          <PopularVideos />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
