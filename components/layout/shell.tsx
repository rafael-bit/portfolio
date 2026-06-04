import { Background } from './background';

type ShellProps = {
  children: React.ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <>
      <Background />
      <div className="shell-main relative z-main min-h-screen">
        {children}
      </div>
    </>
  );
}
