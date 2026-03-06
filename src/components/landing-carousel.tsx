import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

export type CarouselItemData = {
  imageSrc: string;
  imageAlt: string;
  imageTitle: string;
  title: string;
  description: string;
  badges: string[];
  link: string | null;
};

export type LandingCarouselProps = {
  title?: string;
  subtitle?: string;
  carouselContent?: CarouselItemData[];
};

export default function LandingCarousel({
  title,
  subtitle,
  carouselContent,
}: LandingCarouselProps) {
  return (
    <div className="w-64 md:w-md lg:w-2xl xl:w-3/4 mx-auto">
      <div className="flex flex-col gap-2 my-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-bp-ink-950">
          {title ?? "title"}
        </h2>
        {subtitle && <p className="text-bp-ink-950">{subtitle}</p>}
      </div>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {carouselContent
            ? carouselContent.slice(0, 5).map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <img
                        src={
                          item?.imageSrc ??
                          "https://i.ytimg.com/vi/h3DIH90jaU4/sddefault.jpg"
                        }
                        alt={item?.imageAlt ?? "greg"}
                        title={item?.imageTitle ?? "greg"}
                        className="relative z-20 aspect-video w-full object-cover xl:brightness-60 xl:grayscale-50 xl:transition xl:duration-200 xl:ease-in-out xl:hover:brightness-100 xl:hover:grayscale-0"
                        onClick={() => {
                          window.location.href =
                            item?.link ?? "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                        }}
                      />
                      <CardHeader>
                        <CardTitle>
                          {item?.title ?? "Title"}
                        </CardTitle>
                        <CardDescription>
                          {item?.description ??
                            "Description"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex flex-col items-end xl:flex-row xl:justify-end gap-2">
                        {item?.badges ? (
                          item?.badges?.map((badge, badgeIndex) => (
                            <Badge key={badgeIndex}>{badge}</Badge>
                          ))
                        ) : (
                          <Badge key={0}>Badge</Badge>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            : Array(5)
                .fill(null)
                .map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <img
                          src="https://i.ytimg.com/vi/h3DIH90jaU4/sddefault.jpg"
                          alt="greg"
                          title="greg"
                          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale transition duration-200 ease-in-out hover:brightness-100 hover:grayscale-0"
                          onClick={() => {
                            window.location.href =
                              "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                          }}
                        />
                        <CardHeader>
                          <CardTitle>lorem ipsum motherf**ker</CardTitle>
                          <CardDescription>
                            f**k lorem ipsum i am advocating for all lorem
                            ipsum to be replaced by mercedes clg amg copypasta
                            or the fact that you can get mogged by the asu frat
                            leader
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col items-end xl:flex-row xl:justify-end gap-2">
                          <Badge key={0}>greg</Badge>
                          <Badge key={1}>yippy</Badge>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
        </CarouselContent>
        <CarouselPrevious className="ml-4"/>
        <CarouselNext className="mr-4"/>
      </Carousel>
    </div>
  );
}
