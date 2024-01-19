export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full mt-24">
        {children}
      </div>
    );
  };