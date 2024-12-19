import Heading from "@/lib/typography/Heading";
import Text from "@/lib/typography/Text";
import { Button } from "../Button";
import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

// Components
interface HeaderProps {
  totalRepositories: number;
  onSearch: (query: string) => void;
  onRefresh: () => void;
  onAddRepository: () => void;
}

const RepositoriesHeader: React.FC<HeaderProps> = ({
  totalRepositories,
  onSearch,
  onRefresh,
  onAddRepository,
}) => (
  <div className=" px-4 sm:px-6 py-5 ">
    <div className="flex max-lg:flex-col lg:items-center lg:justify-between">
      <div>
        <Heading level={2}>Repositories</Heading>
        <Text level={3} className="mt-1">
          {totalRepositories} total repositories
        </Text>
      </div>
      <div className="flex gap-3 max-lg:mt-[45px] ">
        <Button
          variant="outline"
          className="gap-2 font-normal"
          onClick={onRefresh}
        >
          <ArrowPathIcon className="w-6 text-gray-414651" />
          <p>Refresh All</p>
        </Button>
        <Button className="gap-2 font-normal" onClick={onAddRepository}>
          <PlusIcon className="w-6 text-white" />
          <p>Add Repository</p>
        </Button>
      </div>
    </div>
    <div className="relative mt-4">
      <label className="flex items-center gap-1 px-3.5 py-2.5 border border-gray-d5d7da rounded-lg w-full max-w-md shadow">
        <MagnifyingGlassIcon className="w-6 text-gray-414651" />
        <input
          className="outline-none border-none w-full"
          placeholder="Search Repositories"
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>
    </div>
  </div>
);

export default RepositoriesHeader;
