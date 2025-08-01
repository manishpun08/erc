import DesktopNavbar from "@/components/DesktopNavbar";
import ErrorMessage from "@/components/ErrorMessage";
import MobileNavbar from "@/components/MobileNavbar";
import { navLinks } from "@/data/navLinks";
import { getDynamicNavLinksData, getSOACategory } from "@/hooks/globalHook";
import {
  INavLinksCategory,
  INavLinksSubcategory,
} from "@/Interface/navlinks.interface";
import { ISAOResult } from "@/Interface/soa.interface";

// Process dynamic nav links
interface DynamicNavLinksCategory extends INavLinksCategory {
  id: string;
  subcategories: DynamicNavLinksSubcategory[];
}

interface DynamicNavLinksSubcategory extends INavLinksSubcategory {
  id: string;
  sub_ctg_slug: string;
}

const Navbar = async () => {
  const baseNavLinks = await navLinks();
  try {
    const [dynamicNavLinkData, soaCategoryData] = await Promise.all([
      getDynamicNavLinksData(),
      getSOACategory(),
    ]);

    const dynamicLinks: DynamicNavLinksCategory[] =
      dynamicNavLinkData?.data?.map(
        (category: INavLinksCategory, i: number): DynamicNavLinksCategory => ({
          ...category,
          id: `dynamic-${i}`,
          noTranslate: true,
          subcategories:
            category?.subcategories?.map(
              (
                sub: INavLinksSubcategory,
                j: number
              ): DynamicNavLinksSubcategory => ({
                ...sub,
                id: `dynamic-sub-${i}-${j}`,
                noTranslate: true,
                sub_ctg_slug: `/act/${sub?.sub_ctg_slug?.replace(/^\/+/, "")}`,
              })
            ) || [],
        })
      );

    // Process static nav links
    const updatedNavLinks = baseNavLinks?.map((item) => {
      if (item.name === "status_of_application") {
        return {
          ...item,
          dropdown:
            soaCategoryData?.data?.records.map((result: ISAOResult) => ({
              name: result?.title,
              url: `/${result?.slug}`,
            })) || [],
        };
      }
      return item;
    });

    const staticLinks: INavLinksCategory[] = updatedNavLinks.map(
      (data, index) => {
        const isSOA = data?.name === "status_of_application";

        return {
          id: `static-${index}`,
          name: data?.name,
          main_ctg_slug: data?.url,
          ordering: data?.ordering,
          subcategories:
            data?.dropdown?.map((item: INavLinksSubcategory, idx: number) => ({
              id: `sub-${index}-${idx}`,
              name: item?.name,
              sub_ctg_slug: isSOA
                ? `/status-of-application${item?.url}`
                : item?.url,
              ordering: idx,
              noTranslate: isSOA,
            })) || [],
        };
      }
    );
    const NewLinks = [...dynamicLinks, ...staticLinks];
    const sortedLinks = NewLinks.sort((a, b) => a.ordering - b.ordering);
    return (
      <nav className="bg-background-100">
        <MobileNavbar sortedLinks={sortedLinks} />
        <DesktopNavbar sortedLinks={sortedLinks} />
      </nav>
    );
  } catch (error) {
    console.error("Error fetching navigation links:", error);
    return <ErrorMessage errorMessage="navigation links" />;
  }
};

export default Navbar;
