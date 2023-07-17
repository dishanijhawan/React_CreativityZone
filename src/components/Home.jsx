import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Disha Nijhawan!!</h1>
          <p>
            This is my home page and first page I made. Here, you can find my
            paintings!
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="vector graphics" />

        <p>
          Hi, How are you all doing? There are lot of things to explore on my
          website, I've developed it using React.Js. I'm into my learning phase
          right now.
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who am I?</h1>
          <p>
            I am very much interested in creative activities. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Corporis ullam tempore culpa
            obcaecati impedit. Veritatis aspernatur, nostrum, tempora
            perspiciatis illum necessitatibus, pariatur officiis omnis dolor
            numquam impedit. Optio, reiciendis quas. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima modi iste laborum maiores,
            libero veritatis exercitationem, est delectus, aut eaque voluptatum
            eveniet quas? Reprehenderit illo perspiciatis voluptas praesentium
            dolores! Pariatur.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
