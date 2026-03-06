import LandingCarousel, { type LandingCarouselProps, type CarouselItemData } from "@/components/landing-carousel";
import LandingHero from "@/components/landing-hero";
import LandingIntro from "@/components/landing-intro";
import blogCarousel from "@/blog-carousel.json";
import projectCarousel from "@/project-carousel.json";

type CarouselData = {
  title?: string;
  subtitle?: string;
  carouselContent: CarouselItemData[];
}

function parseCarouselData(data: CarouselData): LandingCarouselProps {
  return {
    title: data.title || "title",
    subtitle: data.subtitle || undefined,
    carouselContent: Array.isArray(data.carouselContent) ? data.carouselContent : []
  }
}

export default function Landing() {
  return (
    <div>
      <LandingHero />
      <LandingIntro />
      <LandingCarousel {...parseCarouselData({title: blogCarousel.title, carouselContent: blogCarousel.contents})} />
      <LandingCarousel {...parseCarouselData({title: projectCarousel.title, subtitle: projectCarousel.subtitle, carouselContent: projectCarousel.contents})} />
    </div>
  );
}
