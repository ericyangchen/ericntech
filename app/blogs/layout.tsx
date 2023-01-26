export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="h-full pt-[64px] px-2">{children}</div>
    </div>
  );
}
