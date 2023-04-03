import { SectionLayout } from '@/components/general/section-layout';
import SocialLinks from '@/components/homepage/hero/social-links';

export const Hero = () => {
  return (
    <SectionLayout>
      <h1 className="mt-16 text-4xl font-bold md:text-6xl">
        Hi, I&apos;m Amir 👋
      </h1>
      <p>Welcome to my digital home.</p>
      <p className="max-w-lg">
        I&apos;m a Kuala Lumpur-based front-end developer who specializes in
        creating applications using React and Next. Through this blog, I&apos;ll
        be sharing my thoughts, opinions, and projects.
      </p>
      <SocialLinks />
    </SectionLayout>
  );
};
