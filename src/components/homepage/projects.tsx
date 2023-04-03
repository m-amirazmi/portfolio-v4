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
      <div className="flex w-full flex-row flex-wrap md:gap-4">
        <div className="h-[320px] flex-[0_0_50%] pb-2 pr-2 md:h-[350px] md:flex-1 md:p-0">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/1"
          ></Link>
        </div>
        <div className="h-[320px] flex-[0_0_50%] pb-2 pl-2 md:h-[350px] md:flex-1 md:p-0">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/2"
          ></Link>
        </div>
        <div className="h-[320px] flex-[0_0_50%] pr-2 pt-2 md:h-[350px] md:flex-1 md:p-0">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/3"
          ></Link>
        </div>
        <div className="h-[320px] flex-[0_0_50%] pl-2 pt-2 md:h-[350px] md:flex-1 md:p-0">
          <Link
            className="btn-outline btn h-full w-full hover:bg-opacity-20"
            href="/projects/4"
          ></Link>
        </div>
      </div>
    </SectionLayout>
  );
};
