const ParallaxVideo = ({ src }) => {
  return (
    <video autoPlay loop muted playsInline className="background">
      <source src={`/images/${src}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ParallaxVideo;
