import { cn } from "@/lib/utils";

const RATIO = {
  video: "aspect-video",
  photo: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[2/1]",
  card: "aspect-[5/3]",
} as const;

export function Photo({
  src,
  alt = "",
  ratio = "photo",
  className,
  imgClass,
  position = "center",
}: {
  src: string;
  alt?: string;
  ratio?: keyof typeof RATIO;
  className?: string;
  imgClass?: string;
  position?: string;
}) {
  return (
    <div className={cn("overflow-hidden", RATIO[ratio], className)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClass)}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
