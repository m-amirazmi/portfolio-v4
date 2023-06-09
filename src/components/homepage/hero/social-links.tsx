import Link from 'next/link';
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="mt-4 flex gap-4 text-xl">
      <Link
        href="https://www.linkedin.com/in/m-amirazmi/"
        target="_blank"
        className="btn-outline btn-sm btn text-sm md:btn-md md:text-lg"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://github.com/m-amirazmi"
        target="_blank"
        className="btn-outline btn-sm btn text-sm md:btn-md md:text-lg"
      >
        <FaGithubAlt />
      </Link>
      <Link
        href="https://wa.me/601119821105"
        target="_blank"
        className="btn-outline btn-sm btn text-sm md:btn-md md:text-lg"
      >
        <FaWhatsapp />
      </Link>
      <Link
        href="mailto:m.amirazmi@hotmail.com"
        target="_blank"
        className="btn-outline btn-sm btn text-sm md:btn-md md:text-lg"
      >
        <FaEnvelope />
      </Link>
    </div>
  );
}
