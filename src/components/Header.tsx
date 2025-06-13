import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent font-bold font-poppins text-xl">
          MyProBuddy
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/service-partners"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium font-inter transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  Service Partners
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="/affiliate-partners"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium font-inter transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  Affiliate Partners
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a href="#partner-form">
            <Button 
              variant="outline" 
              className="border-2 border-[#ef3e25] text-[#ef3e25] font-inter font-semibold px-6 hover:bg-[#ef3e25] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu size={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent font-bold font-poppins text-xl">
                    MyProBuddy
                  </span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X size={24} />
                    </Button>
                  </DrawerClose>
                </DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-8">
                <nav className="flex flex-col space-y-4">
                  <DrawerClose asChild>
                    <a 
                      href="/service-partners"
                      className="block py-3 px-4 text-lg font-medium font-inter text-gray-700 hover:text-[#5d248f] hover:bg-gray-50 rounded-md transition-colors"
                    >
                      Service Partners
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a 
                      href="/affiliate-partners"
                      className="block py-3 px-4 text-lg font-medium font-inter text-gray-700 hover:text-[#5d248f] hover:bg-gray-50 rounded-md transition-colors"
                    >
                      Affiliate Partners
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a href="#partner-form" className="block mt-4">
                      <Button 
                        className="w-full border-2 border-[#ef3e25] text-[#ef3e25] font-inter font-semibold py-3 hover:bg-[#ef3e25] hover:text-white transition-all duration-300"
                        variant="outline"
                      >
                        Contact Us
                      </Button>
                    </a>
                  </DrawerClose>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
