import { Metadata } from "next";

interface LocalMetadata {
  title: string;
  description: string;
  pathname: string;
  imagePath: string;
}

export const getMetadata = (metadata: Partial<LocalMetadata>): Metadata => {
  const title = metadata.title || "假装上班.公司——让生活继续前行";
  const description =
    metadata.description || "打造专业的办公环境，助您在职业转型期保持工作节奏，轻松度过职业空窗期，为下一份工作做好完美铺垫";
  const url = metadata.pathname || "";
  const imagePath = metadata.imagePath || "/logo-rounded.png";
  const hasFeatureImage = !!metadata.imagePath;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      url: url,
      images: [
        {
          url: imagePath,
          alt: "假装上班",
        },
      ],
    },
    twitter: {
      card: hasFeatureImage ? "summary_large_image" : "summary",
    },
    icons: {
      icon: "/icon.png",
      apple: [{ url: "/icon.png" }],
    },
  };
};
