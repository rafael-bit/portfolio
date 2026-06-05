import { AuraCursor } from './aura-cursor';
import { Background } from './background';

type ShellProps = {
  children: React.ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <>
      <Background />
      <AuraCursor />
      <div className="shell-main relative z-main min-h-screen">
        {children}
      </div>
    </>
  );
}
