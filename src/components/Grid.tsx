import { FC, ReactElement } from 'react';

export default function Grid({
  children,
  className = '',
}: {
  children: ReactElement[];
  className?: string;
}) {
  const baseClasses = 'grid gap-8';
  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}
