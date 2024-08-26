import { HeaderTabs } from "../lib/YoHeaderTabs/HeaderTabs";
import { NavbarSearch } from "../lib/YoNavbarSearch/NavbarSearch";
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <HeaderTabs />
        <NavbarSearch />
      </div>
    </div>
  );
}
