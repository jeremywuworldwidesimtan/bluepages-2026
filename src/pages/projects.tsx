import projectCarousel from "@/project-carousel.json";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <div className="xl:flex xl:gap-8 w-auto bg-bp-sky-500 p-4 xl:max-w-[75vw] xl:mx-auto overflow-hidden">
      <div className="flex flex-col xl:flex-3 gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bp-ink-950">
            blue's projects
          </h1>
          <p className="text-base mt-1 md:text-xl md:mt-2">
            all projects comes with demo and source
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectCarousel.contents.map((project, index) => (
            <Card key={index}>
              <img
                src={
                  project?.imageSrc ??
                  "https://i.ytimg.com/vi/h3DIH90jaU4/sddefault.jpg"
                }
                alt={project?.imageAlt ?? "greg"}
                title={project?.imageTitle ?? "greg"}
                className="relative z-20 aspect-video w-full object-cover transition duration-200 ease-in-out hover:scale-110"
                onClick={() => {
                  window.location.href =
                    project?.link ??
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                }}
              />
              <CardHeader className="mt-auto">
                <CardTitle>{project?.title ?? "Title"}</CardTitle>
                <CardDescription>
                  {project?.description ?? "Description"}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex flex-col xl:flex-row xl:items-center gap-2 justify-between items-start">
                <div>
                  <Button
                    onClick={() =>
                      window.open(
                        project?.demo ??
                          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "_blank",
                      )
                    }
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        project?.link ??
                          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "_blank",
                      )
                    }
                  >
                    Source Code
                  </Button>
                </div>
                <div className="flex flex-row justify-end gap-2">
                  {project?.badges ? (
                    project?.badges?.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex}>{badge}</Badge>
                    ))
                  ) : (
                    <Badge key={0}>Badge</Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
