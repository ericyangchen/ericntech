import TagSidebar from "../components/TagSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full gap-2 mt-2">
      <div className="order-2 hidden lg:block">
        <TagSidebar />
      </div>
      <div className="flex-1 order-1 h-full">{children}</div>
    </div>
  );
}
