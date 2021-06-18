import "./App.css";
import Profile from "./profile/profile";
import Navb from "./profile/header";
import Footer from "./profile/footer";
import Projects from "./profile/projects";
import Contact from "./profile/contact";

function App() {
  const user = { name: "John Doe" };
  return (
    <div>
      <div>
        <Navb />
        <Profile
          name="John Doe"
          img="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/John-Doe.jpg?raw=true"
        />
      </div>
      <div>
        <h2> Projects </h2>
        <Projects />
      </div>
      <div>
        <h2> Contact Me </h2>
        <Contact />
      </div>
      <div className="footer">
        {" "}
        <Footer footer="Copyritghts © GOMYCODE 2020" />{" "}
      </div>
    </div>
  );
}

export default App;
