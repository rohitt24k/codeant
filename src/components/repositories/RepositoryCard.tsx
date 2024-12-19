import Text from "@/lib/typography/Text";
import { Repository } from "@/types/repository";
import PillButton from "../PillButton";
import { CircleStackIcon } from "@heroicons/react/24/outline";

// Language color mapping
const LANGUAGE_COLORS = {
  React: "bg-blue-1570ef",
  TypeScript: "bg-blue-3178c6",
  JavaScript: "bg-yellow-f7df1e",
  Python: "bg-green-3776ab",
  Go: "bg-cyan-00add8",
} as const;

interface RepositoryCardProps extends Repository {
  className?: string;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  className = "",
  name,
  isPublic,
  language,
  size,
  lastUpdatedDateInDay,
  description,
}) => (
  <div
    className={`p-4 sm:p-6 border-t border-gray-d5d7da hover:bg-system-white cursor-pointer ${className}`}
  >
    <div className="flex items-center">
      <Text className="font-medium">{name}</Text>
      <PillButton className="ml-2">
        {isPublic ? "Public" : "Private"}
      </PillButton>
    </div>
    {description && (
      <Text level={2} className="mt-2 text-gray-600">
        {description}
      </Text>
    )}
    <div className="flex mt-3 gap-10">
      <div className="flex items-center">
        <Text level={2}>{language}</Text>
        <div
          className={`w-2 h-2 rounded-full ${
            LANGUAGE_COLORS[language as keyof typeof LANGUAGE_COLORS]
              ? LANGUAGE_COLORS[language as keyof typeof LANGUAGE_COLORS]
              : LANGUAGE_COLORS["React"]
          } ml-2`}
        />
      </div>
      <div className="flex items-center">
        <CircleStackIcon className="w-6 text-system-black" />
        <Text level={2} className="ml-1.5">
          {size} KB
        </Text>
      </div>
      <Text level={2}>
        Updated {lastUpdatedDateInDay} day
        {lastUpdatedDateInDay !== 1 ? "s" : ""} ago
      </Text>
    </div>
  </div>
);

export default RepositoryCard;
