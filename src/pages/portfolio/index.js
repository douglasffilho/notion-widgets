import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

import projects from '../../projects.json';

const portfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Navbar />

      <div className="presentation">
        <p>Experiência e qualidade em reformas</p>
        <p>
          A GCampos Contrutora e Engenharia é uma empresa especializada em
          realizar reformas duradouras e de alta qualidade. Nossa equipe
          experiente e qualificada está pronta para transformar o seu espaço.
          Compartilhe conosco a sua visão e deixe-nos torná-la realidade.
        </p>
      </div>

      <div className="projects-list-wrapper">
        {Object.values(projects).map((project) => (
          <a
            className="project"
            key={project.id}
            href={`/portfolio/${project.id}`}
          >
            <div className="project-img-wrapper">
              <img
                alt={project.name}
                src={`/images/${project.id}/presentation.jpeg`}
              />
            </div>
            <p>{project.description}</p>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default portfolioPage;
