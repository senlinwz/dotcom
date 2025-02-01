import DemoPlaceholder from "@/components/DemoPlaceholder";
import FeatureMetrix from "@/components/FeatureMetrix";
import SectionContainer from "@/components/SectionContainer";

const Page = () => {
  return (
    <>
      <div className="w-full bg-linear-to-b from-white to-[#036dd7]/10">
        <h1 className="sr-only">假装上班.公司——让生活继续前行</h1>
        <div className="mt-4 sm:mt-6 w-full flex flex-col justify-start items-center">{/* <LatestVersion /> */}</div>
        <div className="w-full flex flex-col justify-center items-center px-4 sm:px-16">
          <div className="w-full max-w-3xl flex justify-center mt-4 mb-4">
            <img src="/selogan.png" alt="让生活继续前行" className="h-auto w-[600px] max-w-full" />
          </div>
          <h3 className="w-full text-lg sm:text-2xl text-gray-600 text-center font-serif">
            打造专业的办公环境，助您在职业转型期保持工作节奏，轻松度过职业空窗期，为下一份工作做好完美铺垫
          </h3>
        </div>
        <DemoPlaceholder />
      </div>
      <SectionContainer>
        <FeatureMetrix />
      </SectionContainer>
    </>
  );
};

export default Page;
