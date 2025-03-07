import SideBar from "./SideBar"
import hotel from "../assets/hotel.jpg"
import meteo from "../assets/meteo.jpg"
import house from "../assets/house.jpg"
import chatbot from "../assets/chatbot.jpg"
import startup from "../assets/startup.jpg"
const Projects = () => {
  return (
    <div className="projects">
    <SideBar />
      <div className="project_holder">
        <div className="projectBox">
            <img src={hotel} alt="Hotel" />
            <h3>Hotel Reservation Cancellation.</h3>
            <ul>
                <li>Python</li>
                <li>visualisation</li>
                <li>Data Analysis</li>
                <li>Reporting</li>
            </ul>
            <p>This project analyzes hotel reservation cancellations with Python using NumPy and Pandas for data cleaning, preprocessing and Matplotlib, Seaborn, and Plotly for visualizations 📊 📈. Through comprehensive analysis,it uncovers trends to optimize booking strategies.</p>
            <a href="https://github.com/AchrafSR24/Hotel-cancellation-reservation"><button>see more</button></a>
        </div>
        <div className="projectBox">
            <img src={meteo} alt="meteo" />
            <h3>Weather data. </h3>
            <ul>
                <li>Python</li>
                <li>Visualisation</li>
                <li>Data analysis</li>
                <li>Data processing</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus, eius voluptatum asperiores cumque nostrum.</p>
            <button>see more</button>
        </div>
        <div className="projectBox">
            <img src={house} alt="house" />
            <h3>House prices prediction.</h3>
            <ul>
                <li>Python</li>
                <li>Scikit-Learn</li>
                <li>Linear Regression</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus, eius voluptatum asperiores cumque nostrum.</p>
            <button>see more</button>
        </div>
        <div className="projectBox">
            <img src={chatbot} alt="pic" />
            <h3>Simple GUI Chatbot.</h3>
            <ul>
                <li>Python</li>
                <li>NLTK</li>
                <li>Tkinter</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus, eius voluptatum asperiores cumque nostrum.</p>
            <button>see more</button>
        </div>
        <div className="projectBox">
            <img src={startup} alt="pic" />
            <h3>Startup expansion.</h3>
            <ul>
                <li>Python</li>
                <li>Data Analysis</li>
                <li>Data processing</li>
                <li>Power BI</li> 
            </ul>
            <p>This project analyzes a dataset of startup expansions to uncover key insights into growth patterns, revenue trends, and investment returns. Using data visualization and statistical analysis, we explore factors influencing startup success and expansion strategies.</p>
            <a href="https://github.com/AchrafSR24/Startup-Expansion"><button>see more</button></a>
        </div>
        <div className="projectBox">
            <img src="https://picsum.photos/seed/picsum/400/150" alt="pic" />
            <h3>Simple Chatbot</h3>
            <ul>
                <li>Python</li>
                <li>NLTK</li>
                <li>Flask</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus, eius voluptatum asperiores cumque nostrum.</p>
            <button>see more</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
