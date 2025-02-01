import AlertButton from "./AlertButton";
import Icon from "./Icon";
import ScrollLink from "./ScrollLink";
import SectionContainer from "./SectionContainer";

const DemoPlaceholder = () => {
  return (
    <div className="relative w-full min-h-[256px] mt-4 mb-16 sm:mb-24">
      <SectionContainer className="mx-auto">
        <div className="py-2 w-auto flex flex-row justify-center items-center gap-2 sm:gap-4">
          <ScrollLink
            className="bg-[#036dd7] text-white w-36 py-2 rounded-md shadow-lg flex flex-row justify-center items-center hover:bg-[#036dd7]/90 cursor-pointer"
            href="#services"
          >
            开始了解
          </ScrollLink>
          <AlertButton className="w-32 py-2 rounded-md flex flex-row justify-center items-center hover:bg-[#036dd7]/10 hover:text-[#036dd7]">
            立即预定
            <Icon.ArrowRight className="w-5 h-auto ml-1" />
          </AlertButton>
        </div>
      </SectionContainer>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img className="w-full h-auto object-cover" src="/demo.png" alt="办公环境展示" />
        </div>
      </div>
    </div>
  );
};

export default DemoPlaceholder;
