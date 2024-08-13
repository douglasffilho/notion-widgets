const ParallaxImg = ({ src }) => {
  return (
    <img
      alt="Paralax background"
      src={`/images/${src}`}
      className="background"
    />
  );
};

export default ParallaxImg;
