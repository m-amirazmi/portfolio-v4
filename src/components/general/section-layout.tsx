import { TLayout } from '@/utils/types';
import React from 'react';

export const SectionLayout: React.FC<TLayout> = ({ children }) => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-3">
        {children}
      </div>
    </section>
  );
};
