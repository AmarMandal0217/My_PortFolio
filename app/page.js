const profile = {
  name: "Amar Kumar Mandal",
  headline: "Aspiring DevOps Engineer",
  degree: "BSc Computer Science",
  graduation: "July 2027",
  institute: "Vellore Institute of Technology, Vellore",
  email: "amarkumarm298@gmail.com",
  phones: ["+91 6381928405", "+91 7050055944"],
  github: "https://github.com/AmarMandal0217",
  linkedin: "https://www.linkedin.com/in/amarkumarmandal/"
};

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Next.js / React"]
  },
  {
    title: "Backend",
    skills: ["Python", "Java", "Kotlin", "C", "C++", "MySQL", "Solidity", "Blockchain", "IoT", "OOP", "DSA"]
  },
  {
    title: "DevOps / Cloud",
    skills: [
      "AWS Cloud",
      "DevOps Fundamentals",
      "Strong Linux Administration",
      "Shell Scripting",
      "GitHub Actions",
      "Git / GitHub",
      "Problem Solving"
    ]
  }
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio using Next.js with a clean layout and responsive sections.",
    tags: ["Next.js", "React", "CSS"],
    repo: ""
  },
  {
    title: "PharmaChain",
    description:
      "Blockchain-based project focused on improving trust and transparency in pharmaceutical workflows by tracking records securely.",
    tags: ["Blockchain", "Supply Chain", "Security"],
    repo: "https://github.com/AmarMandal0217/PharmaChain"
  },
  {
    title: "CutMyHair",
    description:
      "Hair service web application project focused on user-friendly booking flow and clean interface design.",
    tags: ["Web App", "Booking", "UI/UX"],
    repo: "https://github.com/AmarMandal0217/CutMyHair"
  }
];

const education = [
  {
    period: "Expected Graduation: July 2027",
    title: "BSc Computer Science",
    detail: "Vellore Institute of Technology, Vellore"
  }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            {profile.name}
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section-space">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Portfolio</p>
              <h1 className="hero-name">{profile.name}</h1>
              <p className="hero-role">{profile.headline}</p>
              <p className="lead">
                I am pursuing {profile.degree} at {profile.institute}, with expected graduation in{" "}
                {profile.graduation}. I am focused on DevOps, Cloud, and Cybersecurity learning
                through practical projects.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="metric">
                <p className="metric-value">{profile.degree}</p>
                <p className="metric-label">Degree</p>
              </div>
              <div className="metric">
                <p className="metric-value">{profile.graduation}</p>
                <p className="metric-label">Expected Graduation</p>
              </div>
              <div className="metric">
                <p className="metric-value">VIT Vellore</p>
                <p className="metric-label">University</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="section-space">
          <div className="container split-grid">
            <article className="about-card">
              <p className="eyebrow">About Me</p>
              <h2>{profile.name}</h2>
              <p>
                I am currently pursuing {profile.degree} at {profile.institute}, with expected
                graduation in {profile.graduation}. I am building my career toward DevOps, Cloud,
                and Cybersecurity roles.
              </p>
              <p>
                My focus is automation mindset, system reliability, and secure-by-design practices,
                while continuing to strengthen full-stack development fundamentals.
              </p>
            </article>

            <article className="skills-card">
              <h3>Skills & Interests</h3>
              <div className="skills-groups">
                {skillGroups.map((group) => (
                  <section className="skill-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <div className="tag-list">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section-space">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Selected Work</p>
              <h2>Featured Projects</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
                      View Project Repository
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-space">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Education</p>
              <h2>Academic Profile</h2>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <p className="timeline-meta">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-space">
          <div className="container contact-wrap">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s Connect.</h2>
              <p>
                I am available for internships, freelance, and collaborative projects. Share your
                details and I will respond as soon as possible.
              </p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href="tel:+916381928405">{profile.phones[0]}</a>
                <a href="tel:+917050055944">{profile.phones[1]}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <form className="contact-form">
              <label htmlFor="name">
                Full Name
                <input id="name" name="name" type="text" placeholder="Your Name" />
              </label>
              <label htmlFor="email">
                Email
                <input id="email" name="email" type="email" placeholder="you@example.com" />
              </label>
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project"
                />
              </label>
              <button className="btn btn-primary" type="button">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
