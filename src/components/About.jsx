import SideBar from "./SideBar";
import PicProfil from "../assets/achraf1.jpg";
import CV from '../assets/CV DS.pdf'
const About = () => {

  return (
    <div className="about_container">
      <SideBar />
    <div className="about">
      <div className="content">
        <h2>About</h2>
        <h4>
          I'm Achraf, <br /> A Data Scientist. <br/>
        </h4>
        <p>
        I am a student in data science and artificial intelligence, passionate about data analysis and problem-solving.
        I am developing expertise in the fields of machine learning, statistical analysis, and predictive modeling.<br /> <br /> <br />
        Curious and motivated, I actively engage in academic and personal projects aimed at exploring innovative solutions to transform data into actionable insights.  
        </p>
        <h4>
          “The best way to predict the future is to create it.”
        </h4>
        <span>experience</span>
        <p>
        <h3>Personal and academic projects</h3>
        <h5>Data Analist</h5>
        Analysis of Booking Cancellations and Startup Expansions.
        Exploratory Data Analysis (EDA) and data cleaning (handling missing and outlier values, removing irrelevant columns, encoding variables, normalization).
        Creation of dashboards for reporting, decision support, and advanced visualization using Matplotlib, Seaborn, and Plotly.
        Development of predictive models to anticipate cancellations and optimize reservation management.
        Writing a detailed report with recommendations to reduce the cancellation rate. <br /><br /><br />
        <h3>Technical internship</h3>
        <h5>Web Developer</h5>
        Development of a full-stack application using React, Node.js, Express, and PostgreSQL.
        Design and implementation of an intuitive interface for inventory management and stock level tracking.
        Implementation of features to optimize warehouse operations, categories, and products.
        Efficient data management with a PostgreSQL database and integration of REST APIs for smooth communication between the front-end and back-end.
        </p>
        <span>skills</span>
        <p>
          Programming languages :<br />
          Python | SQL | NoSQL | Java <br />
          Frameworks and Librabies : <br />
          TensorFlow | Scikit-learn | Pandas | Numpy <br />
          Programming languages :<br />
          Python | SQL | NoSQL | Java <br />
          Databases and Big Data :<br />
          MySQL | MongoDB | PostgreSQL | SQLite3 | Hadoop <br />
          Visualization :<br />
          PowerBI | Seaborn | Matplotlib <br />
          Versioning and DevOps :<br />
          Git | Github | Docker <br />
          Agile Methodology :<br />
          SCRUM <br />

        </p>
        <a href={CV} target="_blank" rel="noopener noreferrer">
      Open CV
    </a>
      </div>
      <div className="image">
        <img src={PicProfil} alt="Achraf" />
      </div>
    </div>
    </div>
  );
};

export default About;
