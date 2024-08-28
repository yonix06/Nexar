import { HeaderTabs } from "../lib/YoHeaderTabs/HeaderTabs";
import { NavbarSearch } from "../lib/YoNavbarSearch/NavbarSearch";
import { countComponentsByCategory, getAllComponents } from '../data/components';


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <>
      <div className="wrapper">
        <HeaderTabs />
      </div>
      <div className="flex justify-end z-index-1">
        <NavbarSearch />
      </div>
    </>
  );
}
