import Link from './Link';

const ServiceContainer = ({
  description,
  dataId,
  img,
  inverted,
  title,
  translucid,
  redirect,
}) => {
  if (img || translucid) {
    return (
      <section id={dataId ?? `servicos-${parseInt(Math.random() * 100)}`}>
        <div
          className={`home-services-container${inverted ? ' inverted' : ''}`}
        >
          <div className="text-wrapper">
            <p className="divider">____</p>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
          </div>

          {translucid ? (
            <div className="tranlucid"></div>
          ) : (
            <img alt="Serviço" src={`/images/${img}`} />
          )}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="home-services-container no-img">
        <div className="text-wrapper">
          <p>{title}</p>
          <p>{description}</p>
        </div>

        <Link href={redirect.href}>
          <p>{redirect.label}</p>
        </Link>
      </div>
    </section>
  );
};

export default ServiceContainer;
