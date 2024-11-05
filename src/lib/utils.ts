import { Metadata } from "next";

export function constructMetadata({
  title = "Ayush Kumar Singh | Frontend Engineer | Developer",
  description = "Explore Ayush's portfolio showcasing expertise in frontend development,  Angular , React, web design , UI/UX design, and performance optimization. Discover innovative, responsive web applications that enhance user engagement and drive conversions.",
  image = "/assets/profile-pic.jpeg",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: "https://www.ajmalali.me/",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@softEng_ajmal",
    },
    icons,
    metadataBase: new URL("https://www.ajmalali.me/"),
  };
}
