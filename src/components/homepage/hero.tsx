import SocialLinks from './hero/social-links';

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-2 md:px-0">
        <h1 className="text-4xl font-bold md:text-6xl">Hi, I&apos;m Amir 👋</h1>
        <p>Welcome to my digital home.</p>
        <p className="max-w-lg">
          I&apos;m a Kuala Lumpur-based front-end developer who specializes in
          creating applications using React and Next. Through this blog,
          I&apos;ll be sharing my thoughts, opinions, and projects.
        </p>
        <div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
