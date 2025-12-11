import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
  const artists = [
    {
      name: "Taylor Swift",
      description: "American pop and country singer",
      img: "https://m.media-amazon.com/images/M/MV5BYWYwYzYzMjUtNWE0MS00NmJlLTljNGMtNzliYjg5NzQ1OWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
	},
	{
      name: "Shawn Mendes",
      description: "Canadian singer and songwriter",
      img: "https://www.nme.com/wp-content/uploads/2024/11/Shawn-Mendes-Frank-Hoensch.jpg"
    },
    {
      name: "Aitana",
      description: "Spanish pop artist",
      img: "https://hips.hearstapps.com/hmg-prod/images/aitana-6874f97f0dff3.jpg?resize=640:*"
    },
    {
      name: "Manuel Carrasco",
      description: "Spanish singer-songwriter",
      img: "https://hips.hearstapps.com/hmg-prod/images/manuel-carrasco-attends-the-golden-medal-of-fine-arts-news-photo-1748937349.pjpeg?crop=0.612xw:0.917xh;0.228xw,0&resize=640:*"
    }
  ];

  return (
    <div style={{ backgroundColor: "#ffe6ec", minHeight: "100vh" }}>
      <Navbar />
      <Jumbotron />
      <div className="container py-5">
        <div className="row g-4">
          {artists.map((artist, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <Card 
                name={artist.name}
                description={artist.description}
                img={artist.img}
              />
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center py-3 bg-danger text-white">
       Copyright © Música 2025
      </footer>
    </div>
  );
};
export default Home;
