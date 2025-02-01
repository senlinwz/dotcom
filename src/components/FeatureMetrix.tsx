export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  slug?: string;
}

export const MAIN_FEATURES: FeatureItem[] = [
  {
    icon: "🖥️",
    slug: "模拟办公环境",
    title: "模拟办公环境",
    description: "为您打造一个真实的办公场景，配备必要的办公设备和网络资源，让您身临其境。",
  },
  {
    icon: "📅",
    slug: "个性化工作方案",
    title: "个性化工作方案",
    description: "根据您的需求，设计独特的工作内容和时间安排，满足您的个性化需求。",
  },
  {
    icon: "🔒",
    slug: "隐私保护",
    title: "隐私保护",
    description: "我们承诺您的所有信息将得到严格保密，确保您的隐私安全无虞。",
  },
  {
    icon: "🎨",
    slug: "多样化选择",
    title: "多样化选择",
    description: "我们提供多种模拟工作场景，满足您的不同需求，让您有更多选择。",
  },
  {
    icon: "⚡",
    slug: "快速响应",
    title: "快速响应",
    description: "我们理解您的时间宝贵，提供快速响应和及时的服务，随叫随到。",
  },
  {
    icon: "🤝",
    slug: "全天候支持",
    title: "全天候支持",
    description: "我们的专业团队24小时在线，为您提供全面的支持和服务，确保无缝体验。",
  },
];

const SUB_FEATURES = [
  "工位出租",
  "免费咖啡",
  "高速网络",
  "办公氛围",
  "共享创业区",
  "填补空窗期",
  "避免家人担心",
  "维持工作状态",
  "社交需求",
  "职场交流",
  "失业压力",
  "社保断缴",
  "经济困境",
  "家庭责任",
  "转行困难",
  "精神慰藉",
  "同理心",
  "情感支持",
  "职场归属感",
  "自我价值",
];

const PRICE_PLANS = [
  {
    name: "日租方案",
    price: "敬请期待",
    features: ["独立工位", "高速WiFi", "免费咖啡"],
    highlight: false,
  },
  {
    name: "月付方案",
    price: "敬请期待",
    features: ["固定工位", "高速WiFi", "免费咖啡", "储物柜"],
    highlight: true,
  },
  {
    name: "季付方案",
    price: "敬请期待",
    features: ["固定工位", "高速WiFi", "免费咖啡", "储物柜", "会议室使用"],
    highlight: false,
  },
];

const FeatureMetrix = () => {
  return (
    <>
      <p id="services" className="w-full text-start mt-20 mb-4 sm:px-12 text-3xl sm:text-5xl font-serif font-medium text-gray-500">
        我们的服务
      </p>
      <div className="w-full mb-8 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 sm:px-12">
        {MAIN_FEATURES.map((featureItem) => (
          <div key={featureItem.title} className="w-full flex flex-col justify-start items-start rounded-2xl">
            <div className="flex flex-row items-center gap-2 sm:gap-4 sm:flex-col sm:items-start">
              <span className="text-3xl sm:text-5xl">{featureItem.icon}</span>
              <span className="text-base sm:text-xl">{featureItem.title}</span>
            </div>
            <p className="mt-1 text-sm sm:text-base text-gray-500">{featureItem.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full mt-12 sm:px-12">
        <div className="w-full bg-gradient-to-br from-[#036dd7]/5 to-[#036dd7]/10 backdrop-blur-sm border border-[#036dd7]/20 shadow-lg rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-medium text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#036dd7] to-[#036dd7]/80">
            我们懂你的需求
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {SUB_FEATURES.map((text, index) => (
              <span
                key={text}
                className={`
                  inline-block px-4 py-2 rounded-xl text-sm sm:text-base
                  transition-all duration-300 hover:scale-105
                  ${index % 4 === 0 ? "bg-gradient-to-r from-[#036dd7]/20 to-[#036dd7]/10 hover:from-[#036dd7]/30 hover:to-[#036dd7]/20" : ""}
                  ${index % 4 === 1 ? "bg-gradient-to-br from-[#036dd7]/15 to-[#036dd7]/5 hover:from-[#036dd7]/25 hover:to-[#036dd7]/15" : ""}
                  ${index % 4 === 2 ? "bg-gradient-to-bl from-[#036dd7]/10 to-[#036dd7]/5 hover:from-[#036dd7]/20 hover:to-[#036dd7]/15" : ""}
                  ${index % 4 === 3 ? "bg-gradient-to-tr from-[#036dd7]/15 to-[#036dd7]/10 hover:from-[#036dd7]/25 hover:to-[#036dd7]/20" : ""}
                  shadow-sm hover:shadow-md cursor-pointer
                `}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-24 sm:mt-32 sm:px-12">
        <h3 className="text-2xl sm:text-3xl font-medium text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#036dd7] to-[#036dd7]/80">
          价格方案
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {PRICE_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl p-6 sm:p-8 h-full flex flex-col
                transition-all duration-300 hover:scale-[1.02]
                ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[#036dd7] to-[#036dd7]/90 text-white shadow-xl"
                    : "bg-gradient-to-br from-[#036dd7]/5 to-[#036dd7]/10 border border-[#036dd7]/20 shadow-lg"
                }
              `}
            >
              <div className="text-xl sm:text-2xl font-medium mb-4">{plan.name}</div>
              <div className={`text-2xl sm:text-3xl font-bold mb-8 ${!plan.highlight && "text-[#036dd7]"}`}>{plan.price}</div>
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-3 ${plan.highlight ? "text-white" : "text-[#036dd7]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureMetrix;
