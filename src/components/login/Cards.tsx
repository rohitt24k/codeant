import Text from "@/lib/typography/Text";
import LogoIcon from "@images/common/logo.svg";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Heading from "@/lib/typography/Heading";

interface StatsCardProps {
  label: string;
  value: string;
}

const STATS_DATA: StatsCardProps[] = [
  { label: "Language Support", value: "30+" },
  { label: "Developers", value: "10K+" },
  { label: "Hours Saved", value: "100K+" },
];

// Components
const StatCard: React.FC<StatsCardProps> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <p className="text-lg font-bold">{value}</p>
    <Text level={3}>{label}</Text>
  </div>
);

export const StatsOverview: React.FC = () => (
  <div className="max-w-[447px] w-full shadow-lg p-5 rounded-3xl">
    <div className="flex items-center">
      <LogoIcon className="text-gray-081735 h-8" />
      <p className="text-lg font-bold ml-2">AI to Detect & Autofix Bad Code</p>
    </div>
    <hr className="border-[#E6E8F0] mt-5" />
    <div className="mt-5 flex justify-between">
      {STATS_DATA.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  </div>
);

export const IssuesCard: React.FC = () => (
  <div className="bg-white px-8 py-4 rounded-3xl shadow-lg max-w-[265px] -mt-2 relative w-full z-10 ml-[115px]">
    <div className="flex justify-between items-center">
      <div className="bg-blue-9d90fa/25 p-3.5 rounded-full w-fit">
        <ChartPieIcon className="w-6 text-blue-9d90fa" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <ArrowUpIcon className="w-6 text-[#0049C6]" />
          <Text level={3} className="font-bold text-[#0049C6]">
            14%
          </Text>
        </div>
        <p className="text-[12px]">This week</p>
      </div>
    </div>
    <div className="mt-4">
      <Text level={3} className="font-bold">
        Issues Fixed
      </Text>
      <Heading level={1}>500K+</Heading>
    </div>
  </div>
);
