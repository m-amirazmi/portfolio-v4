import { SectionLayout } from '@/components/general/section-layout';
import Link from 'next/link';

export const Projects = () => {
  return (
    <SectionLayout>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
        <Link className="link-hover link text-sm" href="/projects">
          View All
        </Link>
      </div>
      <div className="flex w-full flex-row flex-wrap gap-4">
        <div className="h-[350px] flex-[0_0_48.2%]  md:flex-1">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/1"
          ></Link>
        </div>
        <div className="h-[350px] flex-[0_0_48.2%]  md:flex-1">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/2"
          ></Link>
        </div>
        <div className="h-[350px] flex-[0_0_48.2%]  md:flex-1">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/3"
          ></Link>
        </div>
        <div className="h-[350px] flex-[0_0_48.2%]  md:flex-1">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/4"
          ></Link>
        </div>
      </div>
    </SectionLayout>
  );
};
