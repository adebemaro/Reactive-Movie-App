const Hero = ({ text, backdrop }) => {
  return (
    <header className="bg-dark p-5 text-white text-center hero-container">
      <h2 className="hero-text ">{text}</h2>
      <div
        className="hero-drop"
        style={{ backgroundImage: `url(${backdrop})` }}
      ></div>
    </header>
  );
};
export default Hero;
