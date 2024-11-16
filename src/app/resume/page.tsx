export default function ResumePage() {
    return (
      <div className="min-h-[calc(100vh-4rem)] max-w-3xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-12 flex justify-between items-center">
          <div className="text-4xl font-bold mb-6">Resume</div>
          <a
            href="/resources/resume.pdf"
            download="AliAlfredjiResume.pdf"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Download as PDF
          </a>
        </header>
  
        {/* Summary */}
        <section className="mb-12">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A tech enthusiast with close to a decade of experience in software development, cloud architecture, and data engineering. 
            I thrive on turning big ideas into scalable, impactful solutions. Whether by driving innovation with my team or 
            building something from the ground up. My entrepreneurial mindset allows me to see the big picture while my 
            engineering skills focus on creating practical, high-performance systems.
          </p>
        </section>
  
        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          
          {/* Moodagent */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Senior Data & Cloud Engineer</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3">
              <a 
                href="https://moodagent.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white"
              >
                Moodagent
              </a> | Copenhagen, Denmark
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Built and optimized data pipelines and cloud infrastructure for a white-label music streaming service</li>
              <li>Collaborated with cross-functional teams to optimize cloud-based solutions</li>
              <li>Encouraged knowledge sharing through pair programming</li>
            </ul>
          </div>
  
          {/* Mysocial */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Engineering Lead</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">2015 - 2023</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3">
              <a 
                href="https://mysocial.io" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white"
              >
                Mysocial
              </a> | Malmö, Sweden
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Co-founded Mysocial, an &quot;influencer manager in your pocket&quot; platform, now trusted by 100k+ users</li>
              <li>Architected the entire platform, from front to backend to cloud infrastructure</li>
              <li>Led a talented team to build microservices, APIs, and a recommendation engine</li>
            </ul>
          </div>
  
          {/* Passenger One */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">2019 - 2021</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-3">
              Passenger One AB | Malmö, Sweden
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Developed a real-time car-sharing platform serving 20k+ riders</li>
              <li>Lead the backend development and DevOps processes</li>
              <li>Coordinated the engineering team and maintained cloud infrastructure</li>
            </ul>
          </div>
        </section>
  
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages & Frameworks</h3>
              <p className="text-gray-600 dark:text-gray-300">
                JavaScript, TypeScript, Node.js, Python, React.js, GraphQL, FastAPI
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                PostgreSQL, MongoDB, Redis, Snowflake, ElasticSearch, Neo4j, Kafka
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                AWS, GCP, Docker, Kubernetes, Terraform, CI/CD
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }