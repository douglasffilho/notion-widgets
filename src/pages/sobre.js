import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const AboutMePage = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-page-content">
        <div className="section-1">
          <p>Quem somos</p>
          <p>Construindo com Excelência</p>
          <img alt="Quem somos nós" src="/images/about-page-banner.webp" />
        </div>
        <div className="section-2">
          <div>
            <p className="with-margin">
              A GCampos Contrutora e Engenharia é uma empresa formada por
              profissionais experientes e comprometidos com a excelência na
              prestação de serviços de construção e reformas. Nossa equipe é
              dedicada a superar as suas expectativas, garantindo soluções
              inovadoras e de alta qualidade em cada projeto.
            </p>
            <p>
              Aqui na GCampos Contrutora e Engenharia, acreditamos que a base de
              um bom trabalho está na transparência, na ética e no compromisso
              com a sua satisfação. Com anos de experiência e uma equipe
              qualificada, estamos preparados para enfrentar projetos
              desafiadores e entregar resultados excepcionais.
            </p>
          </div>

          <div>
            <div className="text-wrapper">
              <p className="divider">____</p>
              <p className="title">Compromisso</p>
              <p className="description">
                Compromisso Nossa empresa valoriza as parcerias e
                relacionamentos construídos ao longo dos anos. Acreditamos na
                importância de estabelecer vínculos sólidos e duradouros com
                nossos clientes, fornecedores e colaboradores, promovendo um
                ambiente de confiança e colaboração mútua.
              </p>
            </div>
            <div className="text-wrapper">
              <p className="divider">____</p>
              <p className="title">Expertise</p>
              <p className="description">
                Com uma sólida bagagem de conhecimento e habilidades técnicas, a
                GCampos Contrutora e Engenharia destaca-se pela sua expertise na
                execução de projetos complexos. Estamos sempre em busca de
                aprimoramento e inovação para oferecer as melhores soluções em
                construções e reformas.
              </p>
            </div>
            <div className="text-wrapper">
              <p className="divider">____</p>
              <p className="title">Responsabilidade Ambiental</p>
              <p className="description">
                Comprometemo-nos com a prática de uma construção sustentável,
                adotando medidas que visam reduzir o impacto ambiental de nossas
                atividades. Buscamos constantemente alternativas ecologicamente
                corretas e materiais de alta qualidade que promovam a
                preservação do meio ambiente.
              </p>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div>
            <p>Nossa visão</p>
            <span>Contruir com solidez</span>
            <p>
              Nosso maior objetivo é trazer valor ao seu empreendimento,
              atendimento e suporte diferenciado, antes, durante e,
              principalmente, após a conclusão da obra. Tudo isso com muita
              ética, transparência, superação, confiança e resiliência.
              Planejamos crescimento consciente, mantendo sempre a excelência no
              atendimento e a sua satisfação.
            </p>
          </div>
          <div>
            <img alt="Nossa Visão" src="/images/corporative.jpeg" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMePage;
