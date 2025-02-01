import { Metadata } from "next";
import { notFound } from "next/navigation";
import DemoPlaceholder from "@/components/DemoPlaceholder";
import FeatureMetrix, { MAIN_FEATURES } from "@/components/FeatureMetrix";
import LatestVersion from "@/components/LatestVersion";
import SectionContainer from "@/components/SectionContainer";
import { getMetadata } from "@/utils/metadata";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const feature = MAIN_FEATURES.find((item) => item.slug === resolvedParams.slug);

  if (!feature) {
    notFound();
  }

  return (
    <SectionContainer>
      <div className="mt-6 sm:mt-12 w-full flex flex-col justify-start items-center">
        <LatestVersion />
      </div>
      <div className="w-full flex flex-col justify-center items-center sm:px-16 pt-6">
        <span className="text-6xl">{feature.icon}</span>
        <h1 className="w-full text-center text-3xl sm:text-6xl font-bold mt-4 mb-4">{feature.title}</h1>
        <h2 className="w-full text-lg sm:text-xl text-gray-500 text-center mb-2">{feature.description}</h2>
      </div>
      <DemoPlaceholder />
      <FeatureMetrix />
    </SectionContainer>
  );
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const resolvedParams = await params;
  const feature = MAIN_FEATURES.find((item) => item.slug === resolvedParams.slug);

  if (!feature) {
    notFound();
  }

  return getMetadata({
    title: feature.title + " - Memos",
    description: feature.description,
    pathname: `/feature/${feature.slug}`,
  });
};

export function generateStaticParams() {
  return MAIN_FEATURES.map((feature) => ({
    slug: feature.slug,
  }));
}

export default Page;
