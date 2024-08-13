import Footer from 'components/Footer';
import Link from 'components/Link';
import Navbar from 'components/Navbar';
import Parallax from 'components/Parallax';
import ParallaxImg from 'components/ParallaxImg';
import ParallaxVideo from 'components/ParallaxVideo';
import ParallaxWrapper from 'components/ParallaxWrapper';
import ServiceContainer from 'components/ServiceContainer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      <ParallaxWrapper>
        <Parallax translucid={true}>
          <ParallaxVideo src="homebg.mp4" />

          <div className="big-name">
            <h1>Construindo sonhos em cada projeto</h1>
            <h3>Inovando e transformando desde 2018</h3>
            <div className="links">
              <Link href="/portfolio">
                <p>Veja nossos projetos</p>
              </Link>
              <Link href="/contato" active={true}>
                <p>Entre em contato</p>
              </Link>
            </div>
          </div>
        </Parallax>

        <ServiceContainer
          title="Reformar é a nossa paixão"
          description="A GCampos Construtora e Engenharia realiza reformas com qualidade e excelência"
          img="about-page-banner.webp"
        />

        <Parallax translucid={true}>
          <ParallaxImg src="business.webp" />

          <ServiceContainer
            dataId={'servicos-comerciais'}
            title="Reformas Comerciais"
            description="Nossa empresa é especializada em reformas comerciais, oferecendo soluções personalizadas para cada cliente. Contamos com uma equipe experiente e comprometida com a qualidade."
            translucid={true}
          />
        </Parallax>

        <ServiceContainer
          dataId={'servicos-residenciais'}
          title="Reformas Residenciais"
          description="Contamos com equipe treinada para construir ou reformar o seu imóvel, prezando pela qualidade, compromisso e transparência com o cliente, buscando sobretudo sua satisfação ao final do processo."
          img="home.avif"
          inverted={true}
        />

        <Parallax translucid={true}>
          <ParallaxImg src="corporative.jpeg" />

          <ServiceContainer
            dataId={'servicos-corporativos'}
            title="Reformas Corporativas"
            description="A construção de um novo espaço comercial faz parte do processo de reforma corporativa, seja para criação de uma loja, um escritório ou um galpão, seja para pequenos ajustes que sejam necessários na estrutura da empresa."
            translucid={true}
          />
        </Parallax>

        <ServiceContainer
          dataId={'servicos-industriais'}
          title="Reformas Industriais"
          description="Realizamos serviços para indústrias, tais como: construção de galpão, estruturas pré-moldadas ou metálicas, reforma de coberta, ampliação, pisos diversos, dentre outros."
          img="industry.jpeg"
          inverted={true}
        />

        <Parallax translucid={true}>
          <ParallaxImg src="about_us.webp" />

          <div className="about-banner">
            <p>Quem somos</p>
            <p className="has-span">
              <span>Conheça a GCampos Construtora e Engenharia</span>
            </p>
            <p>
              A GCampos Construtora e Engenharia atua no mercado de reformas
              desde 2018, trazendo inovação e excelência em cada projeto. Nossa
              missão é superar as expectativas dos clientes, entregando
              resultados superiores.
            </p>
            <div className="bignumbers">
              <div className="bignumber-wrapper">
                <div className="bignumber">
                  <p>50+</p>
                  <p>Projetos de sucesso</p>
                </div>
              </div>

              <div className="bignumber-wrapper">
                <div className="bignumber">
                  <p>100+</p>
                  <p>Profissionais qualificados</p>
                </div>
              </div>

              <div className="bignumber-wrapper">
                <div className="bignumber">
                  <p>30</p>
                  <p>Parcerias de sucesso</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <div className="our-clients">
          <p>Nossos parceiros</p>
          <p>Cada parceria que firmamos é especial para nós</p>
          <div>
            <img alt="clientes" src="/images/clientes_no_bg.png" />
          </div>
        </div>
        <Footer />
      </ParallaxWrapper>
    </div>
  );
};

export default Home;
