import city from "../../assets/images/hero/city.webp";

function HeroBackground() {
  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${city})`,
      }}
    />
  );
}

export default HeroBackground;