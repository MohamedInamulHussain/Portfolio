import { useState,useEffect,useRef } from 'react'
import './App.css'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa'
import emailjs from "emailjs-com";
import hussain from './assets/hussainS.svg';
import abtHolder from './assets/aboutHolder3.webp';
import foodDontionPro from './assets/projectImg/foodDonationImg.png';
import onecal from './assets/projectImg/onecal.jpg';
import cafesite from './assets/projectImg/cafe.jpg';
import fruitsite from './assets/projectImg/fruity.jpg';
import javaCertificate from './assets/certificates/java.png';
import pythonCertificate from './assets/certificates/python.jpg';
import sqlCertificate from './assets/certificates/SQL.jpg';
import iste from './assets/achievements/iste.png';
import paper from './assets/achievements/paper.jpg';
import naanmudhalvan from './assets/achievements/naanmudhalvan.jpg';
import presentaion from './assets/achievements/presentaion.jpeg';
import footGradient from './assets/footDesign.svg';
import java from './assets/icons/java.png';
import python from './assets/icons/python.png';
import spring from './assets/icons/spring.png';
import sql from './assets/icons/sql.png';
import mongodb from './assets/icons/mongodb.png';
import react from './assets/icons/react.png';
import html from './assets/icons/html.png';
import css from './assets/icons/css.png';
import js from './assets/icons/js.png';
import nodejs from './assets/icons/nodejs.png';
import tailwind from './assets/icons/tailwind.png';
import bootstrap from './assets/icons/bootstrap.png';
import github from './assets/icons/github.png';
import figma from './assets/icons/figma.png';
import xd from './assets/icons/xd.png';
import ae from './assets/icons/ae.png';
import pr from './assets/icons/pr.png';
import ps from './assets/icons/ps.png';

function App() {
  const [isDark, setIsDark] = useState(true);
  const handleDownload = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=1r26WkVM-c29Ql-dgUeM98UZIJvN048Wn";
  };
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json") // Assuming `skills.json` is in the public folder
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wj096u9",
      "template_g2chocx",
      form.current,
      "-BanOVnKvYkTFJHmU"
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
  };

  // achievement section counter
  const Counter = ({ label, endValue, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const counterRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% visible
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (!hasStarted) return;
  
      let start = 0;
      const increment = Math.ceil(endValue / (duration / 95)); // Adjust speed
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, [hasStarted, endValue, duration]);
  
    return (
      <div className="counter-box" ref={counterRef}>
        <h2>{count}+</h2>
        <p>{label}</p>
      </div>
    );
  };
  const achievements = [
    { title: "ISTE Best Student Award 2024", date: "", description: "", image: iste },
    { title: "Received Seed Grant Rs.10,000 Niral Thiruvizha - Hackathon", date: "", description: "", image: naanmudhalvan },
    { title: "Entrepreneurship Cell Leader", date:"", description: "", image: presentaion },
    { title: "Machine Learning Based Project Paper Published in IEEE", date: "", description: "", image: paper },
    // { title: "Best UI/UX Design", date: "May 2024", description: "Received an award for best UI/UX design in a competition.", image: presentaion },
    // { title: "Startup Incubator", date: "June 2024", description: "Selected for a startup incubation program.", image: "startup.jpg" },
    // { title: "Community Mentor", date: "July 2024", description: "Mentored students in coding bootcamps.", image: "mentor.jpg" },
    // { title: "Certified Cloud Engineer", date: "August 2024", description: "Achieved cloud engineering certification.", image: "cloud.jpg" }
  ];
 const skillsSet = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "SpringBoot", icon: spring },
  { name: "SQL", icon: sql },
  { name: "MongoDb", icon: mongodb },
  { name: "React.js", icon: react },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "Node.js", icon: nodejs },
  { name: "Tailwind", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "GitHub", icon: github },
  { name: "Figma", icon: figma },
  { name: "AdobeXD", icon: xd },
  { name: "AfterEffects", icon: ae },
  { name: "PremierPro", icon: pr },
  { name: "Photoshop", icon: ps },
];

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
       <div className="glossy"></div>
       <div className="roundColor1"></div>
        <div className="roundColor2"></div>
      <nav style={{zIndex:"100"}}>
        <div className="logo">Mohamed Inamul Hussain</div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" >Contact</a>         
          <button className="contact-btn"><a href="+919597702487">Contact me</a></button>
        </div>
      </nav>
     
      <main>    
        <section className="hero" id="hero">
          <div className="hero-content">
            <h2>FULL-STACK WEB DEVELOPER</h2>
            <h1>Mohamed Inamul<br />Hussain</h1>
            <p>I'm a full-stack web developer and I work remotely from South India.</p>          
          </div>
          <div className="hero-image">
            <img src={hussain} alt="Developer" />      
            <div className='cv-img' onClick={handleDownload} 
                        style={{ cursor: "pointer"}}></div>    
          </div>
          <div className="social-links" style={{position:"fixed",zIndex:"10",marginRight:"-30px"}}>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTelegram /></a>
          </div>         
        </section>
         {/* this is for glosyy backgrounds */}
      <div className="glossyFull"></div>
      <div className="round3"></div>
      <div className="round4"></div>
      <div className="round5"></div>
      <div className="round6"></div>
      <div className="round7"></div>
      <div className="round8"></div>
      <div className="round9"></div>
      <div className="round10"></div>
      <div className="round11"></div>
      <div className="round12"></div>
      <div className="round13"></div>
      
        <section className="about">       
          <div className="about-image">
            <img src={abtHolder} alt="About" />
          </div>
          <div className="about-content">
            <h2>About<br /> me</h2>
            <p>I am a passionate software developer and a recent B.E. CSE graduate with a strong foundation in programming. Skilled in full-stack development, I build scalable and efficient applications. Eager to contribute and grow in a dynamic tech environment.</p>
            <a href="+919597702487"><button className="contact-btn2">Contact me</button></a>
          </div>
          <br/>
          <br/>
        </section>

        <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
            {skillsSet.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <p>{skill.name}</p>
        </div>
           ))}
    </div>
    </section>

        <section className="projects" id="projects">
          <h2>My projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src={onecal} alt="Project 2" />
              <div className="project-info">
                <h3>OneCal - Meet Scheduler</h3>
                <span>JAN 2025</span>
                <br></br>
                <a href='https://onecal-scheduler-deploy-1.onrender.com/' style={{color:"#E91E63"}}>Click here..</a>
              </div>
            </div>
            <div className="project-card">
              <img src={cafesite} alt="Project 3" />
              <div className="project-info">
                <h3>Wildbean Cafe Website</h3>
                <span>Feb 2025</span>
                 <br></br>
                <a href='https://mohamedinamulhussain.github.io/Wild_bean_Cafe-Website/' style={{color:"#E91E63"}}>Click here..</a>
              </div>
            </div>
            <div className="project-card">
              <img src={fruitsite} alt="Project 4" />
              <div className="project-info">
                <h3>Fruity Web UI Design</h3>
                <span>Mar 2025</span>
                 <br></br>
                <a href='https://mohamedinamulhussain.github.io/Fruity-React-Project/' style={{color:"#E91E63"}}>Click here..</a>
              </div>
            </div>
            <div className="project-card">
              <img src={foodDontionPro} alt="Project 1" />
              <div className="project-info">
                <h3>Food Donation Application</h3>
                <span>June 2024</span>
                 <br></br>
                <a href='' style={{color:"#E91E63"}}>Under Deployment..</a>
              </div>
            </div>
            <a href="#" className="see-more">See more projects →</a>
          </div>
        </section>

        <section className="blog">
          <h2>Certification</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <img src={javaCertificate} alt="java certificate" />
              <div className="blog-content">
                <h3>Java Full stack Certification</h3>
                <p style={{marginBottom:"1rem"}}>Wipro pvt Ltd</p>
                
                <a href="https://drive.google.com/file/d/1quKVlHR4raSVMLp--h5FxIU3-vL4Dzhr/view?usp=drive_link" className="read-more">Click Here →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src={pythonCertificate} alt="python certificate" />
              <div className="blog-content">
                <h3>Pyhton Certification</h3>
                <p>Cognitive Clases powered by IBM Developer skill network</p>
                <a href="https://drive.google.com/file/d/1xdefxAtiUqO1G9o_jc8_tb2A27Avn4tY/view?usp=drive_link" className="read-more">Click Here →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src={sqlCertificate} alt="SQL certificate" />
              <div className="blog-content">
                <h3>SQL and Relational Database</h3>
                <p>Cognitive Clases powered by IBM Developer skill network</p>
                <a href="https://drive.google.com/file/d/1WkwXK3LbDjqEqmY-ZEid6KK9WnX2E6VN/view?usp=drive_link" className="read-more">Click Here →</a>
              </div>
            </div>
          </div>
        </section>
        <section className='achievement'>
        <h2 className='achTitle'>Achievement</h2>
          <div className="stats-row">
          
            <Counter label="Problems Solved" endValue={300} />
            <Counter label="Hackathons Participated" endValue={10} />
            <Counter label="Project Contributions" endValue={8} />
          </div>
          <div className="achievements-container">
     
      <div className="cards-wrapper">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <img src={achievement.image} alt={achievement.title} className="achievement-image" />
            <h3>{achievement.title}</h3>
            <p><strong>{achievement.date}</strong></p>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
      <a href="#" className="see-more">See more projects →</a>
    </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact me</h2>
          <div className='footGradient'><img src={footGradient} className='footDesign'/></div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <input type="text" name="name" placeholder="Full name*" required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Email*" required />
      </div>
      <div className="form-group">
        <input type="text" name="subject" placeholder="Subject" />
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Message*" required></textarea>
      </div>
      <button type="submit" className="send-btn">Send</button>
    </form>

        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">Mohamed Inamul Hussain</div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-social">
            <h3>Follow me</h3>
            <div className="social-icons">
              <a href="#"><FaDiscord /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTelegram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Mohamed Inamul Hussain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App