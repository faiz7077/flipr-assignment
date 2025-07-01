"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function AdminNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Projects", href: "/admin/projects" },
    { name: "Clients", href: "/admin/clients" },
    { name: "Contacts", href: "/admin/contacts" },
    { name: "Subscriptions", href: "/admin/subscriptions" },
    
  ];

  return (
    <div className="w-full flex items-center justify-evenly py-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === item.href
                      ? "bg-white text-blue-600 shadow-md"
                      : "hover:bg-gray-100"
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
