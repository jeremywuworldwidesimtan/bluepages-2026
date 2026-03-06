import blogCarousel from "@/blog-carousel.json";
import BlogCard from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { renderDate } from "@/utils/daterender";

export default function Blog() {
  return (
    <div className="xl:flex xl:gap-8 w-auto bg-bp-sky-500 p-4 xl:max-w-[75vw] xl:mx-auto overflow-hidden">
      <div className="flex flex-col xl:flex-3 gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bp-ink-950">
            the blue blog
          </h1>
          <p className="text-base mt-1 md:text-xl md:mt-2">
            personal writing and ramblings by emily :)
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {blogCarousel.contents.map((blog) => (
            <>
              <div className="hidden md:block">
                <BlogCard
                  imageSrc={blog.imageSrc}
                  imageAlt={blog.imageAlt}
                  imageTitle={blog.imageTitle}
                  title={blog.title}
                  description={blog.description}
                  badges={blog.badges}
                  link={blog.link}
                  author={blog.author}
                  publishedDate={blog.publishedDate}
                />
              </div>
              <div className="md:hidden">
                <Card>
                  <img
                    src={
                      blog?.imageSrc ??
                      "https://i.ytimg.com/vi/h3DIH90jaU4/sddefault.jpg"
                    }
                    alt={blog?.imageAlt ?? "greg"}
                    title={blog?.imageTitle ?? "greg"}
                    className="relative z-20 aspect-video w-full object-cover"
                    onClick={() => {
                      window.location.href =
                        blog?.link ??
                        "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                    }}
                  />
                  <CardHeader>
                    <CardTitle>{blog?.title ?? "Title"}</CardTitle>
                    <CardDescription>
                      {blog?.description ?? "Description"}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex gap-2 justify-between items-start">
                    <div>
                      <p>By {blog?.author}</p>
                      <p>{renderDate(blog?.publishedDate)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {blog?.badges ? (
                        blog?.badges?.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex}>{badge}</Badge>
                        ))
                      ) : (
                        <Badge key={0}>Badge</Badge>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
