const EmbedsPage = () => {
  return (
    <iframe
      title="Weather Widget"
      src="https://doug-notion-widgets.vercel.app/weather?query=Rio%20de%20Janeiro"
      style={{ border: '0px #ffffff none;' }}
      name="Weather Widget"
      scrolling="no"
      frameBorder="1"
      marginHeight="0px"
      marginWidth="0px"
      height="400px"
      width="600px"
      allowfullScreen
    ></iframe>
  );
};

export default EmbedsPage;
