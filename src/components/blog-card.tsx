import { renderDate } from "@/utils/daterender";
import { Link } from "react-router";
import { Badge } from "./ui/badge";

type BlogCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageTitle: string;
  title: string;
  description: string;
  badges: string[];
  link: string;
  author: string;
  publishedDate: string;
};

export default function BlogCard({
  imageSrc,
  imageAlt,
  imageTitle,
  title,
  description,
  badges,
  link,
  author,
  publishedDate,
}: BlogCardProps) {
  return (
    <div className="rounded-xl bg-card p-4 text-card-foreground ring-1 ring-foreground/10">
      <Link to={link}>
        <div className="flex flex-row gap-4 w-full">
          {/* hide overflow properly */}
          <picture className="relative z-20 overflow-hidden rounded-lg">
            <img src={imageSrc} alt={imageAlt} title={imageTitle} className="h-32 w-48 xl:h-64 xl:w-96 object-cover transition duration-200 ease-in-out hover:scale-110"/>
          </picture>
          <div className="w-auto flex-1">
            <div className="flex justify-between items-center gap-4">
              <h2 className="font-bold text-base lg:text-xl xl:text-2xl max-w-[75%]">{title}</h2>
              <p>{renderDate(publishedDate)}</p>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div>
                <p>By {author}</p>
                <p>{description}</p>
              </div>
              <div className="flex flex-row gap-2">
                {badges ? (
                  badges?.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex}>{badge}</Badge>
                  ))
                ) : (
                  <Badge key={0}>Badge</Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
