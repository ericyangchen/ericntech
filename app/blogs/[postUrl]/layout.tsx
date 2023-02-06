import TagSidebar from "../components/TagSidebar";
import TableOfContent from "./components/TableOfContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full mt-2">
      {/* Right Sidebar */}
      <div className="order-2 hidden lg:block">
        <div className="flex flex-col gap-2">
          <TableOfContent />
          <TagSidebar />
        </div>
      </div>

      {/* TODO: below lg: make a sidebar floating button  */}

      {/* Page */}
      <div className="flex-1 order-1 h-full">{children}</div>
    </div>
  );
}
