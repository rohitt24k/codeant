"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDownIcon,
  CodeBracketIcon,
  ArrowRightStartOnRectangleIcon,
  CloudIcon,
  HomeIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import LogoWithNameIcon from "@images/common/logo-with-name.svg";
import BookIcon from "@images/common/bookicon.svg";
import { Button } from "@/components/Button";

// Types
interface SidebarProps {
  className?: string;
  userName: string;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Constants
const ANIMATION_DURATION = 500;

const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Repositories",
    path: "/dashboard/repositories",
    icon: HomeIcon,
  },
  {
    label: "AI Code Review",
    path: "/dashboard/ai-code-review",
    icon: CodeBracketIcon,
  },
  {
    label: "Cloud Security",
    path: "/dashboard/cloud-security",
    icon: CloudIcon,
  },
  {
    label: "How to Use",
    path: "/dashboard/how-to-use",
    icon: BookIcon,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

const FOOTER_ITEMS: NavItem[] = [
  {
    label: "Support",
    path: "#",
    icon: PhoneIcon,
  },
  {
    label: "Logout",
    path: "#",
    icon: ArrowRightStartOnRectangleIcon,
  },
];

// Components
interface UserButtonProps {
  userName: string;
  className?: string;
}

const UserButton: React.FC<UserButtonProps> = ({
  userName,
  className = "",
}) => (
  <Button
    variant="outline"
    className={`w-full flex !justify-between ${className}`}
  >
    <span className="text-ellipsis overflow-hidden">{userName}</span>
    <ChevronDownIcon className="w-6 flex-shrink-0" />
  </Button>
);

interface NavigationProps {
  items: NavItem[];
  currentRoute?: string;
  isMobile?: boolean;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  currentRoute,
  isMobile,
  className = "",
}) => (
  <nav className={className}>
    {items.map((item, index) => (
      <Link key={index} href={item.path}>
        <NavigationItem
          item={item}
          isActive={currentRoute === item.path.split("/")[2]}
          isMobile={isMobile}
        />
      </Link>
    ))}
  </nav>
);

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  isMobile?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  isMobile,
}) => {
  const Icon = item.icon;
  return (
    <Button
      variant={isActive && !isMobile ? "default" : "ghost"}
      size={isMobile ? "sm" : "default"}
      className="gap-3 w-full !justify-start"
    >
      <Icon className="w-6" />
      <p>{item.label}</p>
    </Button>
  );
};

interface MobileSidebarProps extends SidebarProps {
  isOpen: boolean;
  onClose: () => Promise<void>;
  onOpen: () => void;
  animation: "open" | "close";
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  userName,
  isOpen,
  onClose,
  onOpen,
  animation,
}) => {
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[2];

  return (
    <aside className="flex flex-col relative sm:hidden">
      <div className="relative z-50 p-4 pb-0 flex flex-col items-center justify-between bg-white">
        <div className="flex w-full justify-between">
          <LogoWithNameIcon className="h-8" />
          {isOpen ? (
            <XMarkIcon
              className="w-6 cursor-pointer"
              onClick={() => void onClose()}
            />
          ) : (
            <Bars3Icon className="w-6 cursor-pointer" onClick={onOpen} />
          )}
        </div>
      </div>
      <div
        className={`${
          animation === "open" ? `max-h-[1000px]` : "max-h-0"
        } absolute top-full z-10 overflow-hidden transition-all ease-out duration-500 w-full bg-white`}
      >
        <div className="px-4 py-6 w-full">
          <UserButton userName={userName} />
          <Navigation
            items={NAVIGATION_ITEMS}
            currentRoute={currentRoute}
            isMobile={true}
            className="mt-3.5"
          />
          <Navigation items={FOOTER_ITEMS} isMobile={true} />
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed h-screen w-full bg-black z-[1] ${
            animation === "open" ? "opacity-60" : "opacity-0"
          } transition-all duration-500`}
        />
      )}
    </aside>
  );
};

const DesktopSidebar: React.FC<SidebarProps> = ({
  className = "",
  userName,
}) => {
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[2];

  return (
    <aside
      className={`max-w-[242px] h-full hidden sm:flex flex-col ${className}`}
    >
      <div className="px-5 mt-6">
        <LogoWithNameIcon className="h-8" />
        <UserButton userName={userName} className="mt-5" />
      </div>
      <Navigation
        items={NAVIGATION_ITEMS}
        currentRoute={currentRoute}
        className="mt-4 px-4"
      />
      <div className="flex-1" />
      <Navigation items={FOOTER_ITEMS} isMobile className="px-4 mb-6" />
    </aside>
  );
};

// Main Component
const Sidebar: React.FC<SidebarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<"open" | "close">("close");

  const handleClose = useCallback(async () => {
    setAnimation("close");
    await new Promise((r) => setTimeout(r, ANIMATION_DURATION));
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setAnimation("open");
  }, []);

  return (
    <div>
      <MobileSidebar
        {...props}
        isOpen={isOpen}
        animation={animation}
        onClose={handleClose}
        onOpen={handleOpen}
      />
      <DesktopSidebar {...props} />
    </div>
  );
};

export default Sidebar;
