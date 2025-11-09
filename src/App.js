import React from "react";
import "./App.css";

const resume = {
  name: "Bala Shiva Teja Kandimalla",
  title: "Sr. React/Node.js Developer",
  email: "balashivakandimalla@gmail.com",
  phone: "+1 (601) 621-2296",
  linkedin: "https://linkedin.com/in/balashivateja-kandimalla",
  summary: "Experienced MERN/MEAN developer with 10+ years in building scalable web apps.",
  experiences: [
    { company: "Charles Schwab", location: "Westlake, TX", role: "Sr. React/Node.JS Developer", from: "Feb 2024", to: "Present" },
    { company: "Centene Corporation", location: "Saint Louis, MO", role: "Sr. React/Node.JS Developer", from: "Aug 2022", to: "Jan 2024" },
    { company: "Target", location: "Minneapolis, MN", role: "MERN Stack Developer", from: "May 2019", to: "Jul 2022" }
  ],
  skills: ["React", "Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Azure", "Docker", "Kubernetes", "Redux", "JEST"]
};

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <div style={{display: "flex", alignItems: "center", gap: 12}}>
          <h2>{resume.name}</h2>
          <span className="small" style={{marginLeft:6}}>{resume.title}</span>
        </div>
        <div>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </nav>
      
      <div className="hero card" id="home">
        <div className="intro">
          <span className="badge">Sr. React/Node.js Developer</span>
          <h1>{resume.name}</h1>
          <p className="small">{resume.title}</p>
          <p className="small">{resume.summary}</p>
          <div style={{marginTop:12}}>
            <a href={`mailto:${resume.email}`} className="btn">Email</a>
            <a href="#contact" style={{marginLeft:12}} className="btn">Contact</a>
          </div>
        </div>
      </div>
      
      <div id="about" className="card">
        <div className="section-title"><h3>About</h3></div>
        <p className="small">{resume.summary} I build production-ready MERN applications, microservices, and reliable CI/CD pipelines.</p>
      </div>
      
      <div id="experience" className="card">
        <div className="section-title"><h3>Experience</h3></div>
        {resume.experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="exp-meta">
              <div><strong>{exp.role}</strong> — {exp.company}, {exp.location}</div>
              <span className="small">{exp.from} — {exp.to}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div id="skills" className="card">
        <div className="section-title"><h3>Technical Skills</h3></div>
        <div className="skills-grid">
          {resume.skills.map((s,i)=> <span className="skill" key={i}>{s}</span>)}
        </div>
      </div>
      
      <div id="contact" className="card">
        <div className="section-title"><h3>Contact</h3></div>
        <p className="small">I'm available for freelance/contract or full-time roles. You can reach me at <strong>{resume.email}</strong> or <strong>{resume.phone}</strong>.</p>
        <div className="contact-row">
          <a className="btn" href={`mailto:${resume.email}?subject=Project%20Enquiry&body=Hi%20Teja,`}>Email Me</a>
          <a className="btn" href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      
      <footer>
        <p>© {new Date().getFullYear()} Bala Shiva Teja Kandimalla — Built with React</p>
      </footer>
    </div>
  );
}

export default App;
