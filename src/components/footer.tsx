import Image from "next/image";
import { Container } from "~/components/ui/containers";
import itslogo from "~/assets/images/New-ITS-Footer.png";
import Link from "next/link";

const footerLinks = {
  resources: [
    { label: "Help", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hcdc-its" },
    { label: "Facebook", href: "https://www.facebook.com/hcdcits" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hcdc-its" },
  ],


  openSource: [
    { label: "Contribute", href: "https://github.com/hcdc-its" },
    { label: "Report a bug", href: "https://github.com/kaizenics/hcdc-its/issues" },
    { label: "Request a feature", href: "https://github.com/kaizenics/hcdc-its/issues" },
  ],
};

const FooterSection = ({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) => (
  <div className="space-y-4">
    <h2 className="font-questrial font-medium text-lg text-white">
      {title}
    </h2>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-neutral-400 hover:text-white hover:underline transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="w-full h-px bg-neutral-800" />
      <Container variant="fullMobileBreakpointPadded">
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <FooterSection title="Resources" links={footerLinks.resources} />
            <FooterSection title="Socials" links={footerLinks.socials} />
            <FooterSection title="Open Source" links={footerLinks.openSource} />

            <div className="relative w-full aspect-[5/1] sm:aspect-[5/2]">
              <Image
                src={itslogo}
                alt="HCDC-ITS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 py-6">
          <p className="font-questrial text-sm text-neutral-400">
            HCDC ITS © {new Date().getFullYear()} All Rights Reserved / Designed and Developed by{" "}
            <a
              href="https://github.com/kaizenics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Niko Soriano
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
