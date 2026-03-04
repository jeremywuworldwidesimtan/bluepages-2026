export default function LandingHero() {
  return (
    <div className="relative w-auto bg-bp-sky-500 p-4 xl:max-w-[60vw] xl:mx-auto overflow-hidden">
      <picture className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/public/blue.png"
          alt="Photo of Blue"
          className="p-6 lg:max-h-[70vh]"
        />
      </picture>
      <div className="relative flex min-h-40 md:min-h-120 xl:min-h-[80vh] flex-col justify-between">
        <div className="flex justify-between text-5xl md:text-[7rem] xl:text-[200px] font-bold text-bp-frost-50">
          <h1>hello</h1>
          <h1>world</h1>
        </div>
        <div className="flex justify-between text-7xl md:text-[10rem] xl:text-[240px] font-bold text-bp-frost-50">
          <h1>i'm</h1>
          <h1>blue</h1>
        </div>
      </div>
    </div>
  );
}
