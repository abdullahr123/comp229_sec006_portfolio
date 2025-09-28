import { Link } from "react-router-dom";

export default function Home() {
  return ( 
  <div className="home-container">
    <h1 className="home">My name is Abdullah Zafar.</h1>
      <p className="home">I’m excited to share who I am, what I do, and the projects I’ve worked on.</p>
      <p className="home">My mission is to continuously learn, build, and create impactful solutions.</p>
      {/*Links to the About me page*/}
      <Link to="/about">
        <button>
          Learn More About Me
        </button>
      </Link>
    </div>
  );
}