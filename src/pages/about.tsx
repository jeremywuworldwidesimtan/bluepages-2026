export default function About() {
  return (
    <div className="relative w-auto bg-bp-sky-500 p-4 xl:max-w-[70vw] xl:mx-auto overflow-hidden">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bp-ink-950">
          about me!
        </h1>
      </div>
      <div>
        <img src={`${import.meta.env.BASE_URL}blue.png`} alt="Photo of Blue" className="w-[50%]" />
      </div>
      <div>
        
      </div>
    </div>
  );
}
