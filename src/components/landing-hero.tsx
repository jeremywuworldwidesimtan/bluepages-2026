export default function LandingHero() {
  renderStars(100);
  return (
    <div id="stars">
      <div
        className="relative w-auto p-4 xl:max-w-[60vw] xl:mx-auto overflow-hidden"
      >
        <picture className="z-1 pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}blue.png`}
            alt="Photo of Blue"
            className="p-6 lg:max-h-[70vh]"
          />
        </picture>
        <div className="z-2 relative flex min-h-40 md:min-h-120 xl:min-h-[80vh] flex-col justify-between">
          <div className="flex justify-between text-5xl md:text-[7rem] xl:text-[200px] font-bold text-bp-frost-50">
            <h1 className="hero-animation-top">hello</h1>
            <h1 className="hero-animation-top-75 pt-2 md:pt-4 xl:pt-8">world</h1>
          </div>
          <div className="flex justify-between text-7xl md:text-[10rem] xl:text-[240px] font-bold text-bp-frost-50">
            <h1 className="hero-animation-bottom-75">i'm</h1>
            <h1 className="hero-animation-bottom">blue</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderStars(starCount: number, starDivId: string = "stars") {
  const starsContainer = document.getElementById(starDivId);
  if (!starsContainer) return;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 5 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 1.5}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}
