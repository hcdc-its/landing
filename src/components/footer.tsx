import Image from "next/image";
import { Container } from "~/components/ui/containers";

import itslogo from "~/assets/images/New-ITS-Footer.png";

export const Footer = () => {
  return (
    <>
      <section className="mt-56 sm:mt-0">
        <div className="w-[100%] h-[1px] bg-[#2b2b2b]">
          <div className="px-2" />
        </div>
        <Container variant={"fullMobileBreakpointPadded"}>
          <footer>
            <div className="sm:flex sm:flex-wrap sm:space-x-36">
              <div className="sm:mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-questrial font-medium text-lg sm:mb-4 text-white content-start">
                  Resources
                </h1>
                <div className="font-inter text-md items-start text-[#afaeaedc] inline-block mb-[5px]">
                  <p className="mb-3">Help</p>
                  <p className="mb-3">Privacy</p>
                  <p className="mb-3">FAQ</p>

                </div>
              </div>
              <div className="sm:mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-questrial font-medium text-lg sm:mb-4 text-white content-start">
                  Socials
                </h1>

                <div className="font-inter text-md items-start text-[#afaeaedc] inline-block mb-[5px] whitespace-nowrap">
                  <a
                    href="https://www.facebook.com/hcdcits"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-3 hover:underline hover:text-white">
                      Facebook
                    </p>
                  </a>
                  <p className="mb-3">Instagram</p>
                  <a
                    href="https://github.com/hcdc-its"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-3">GitHub</p>
                  </a>
                </div>
              </div>
              <div className="sm:mx-[10px] my-[8%] align-left space-y-4">
                <h1 className="font-questrial font-medium text-lg sm:mb-4 text-white content-start">
                  Open Source
                </h1>

                <div className="font-questrial text-md items-start text-[#afaeaedc] inline-block mb-[5px] whitespace-nowrap">
                  <p className="mb-3">Contribute</p>
                  <a
                    href="https://github.com/kaizenics/hcdc-its/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-3 hover:underline hover:text-white">
                      Report a bug
                    </p>
                  </a>
                  <a
                    href="https://github.com/kaizenics/hcdc-its/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="mb-3 hover:underline hover:text-white">
                      Request a feature
                    </p>
                  </a>
                </div>
              </div>
              <div className="relative w-[300px] h-[50px] sm:w-[500px] sm:h-[100px] my-10 sm:my-24">
                <Image
                  src={itslogo}
                  alt="HCDC-ITS Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </footer>
        </Container>
      </section>

      <section>
        <Container variant={"fullMobileBreakpointPadded"}>
          <div className="font-questrial text-md items-start text-[#dfdfdfdc] inline-block mb-20">
            <p>HCDC ITS © {new Date().getFullYear()} All Rights Reserved / Designed and Developed by <a href="https://github.com/kaizenics" target="_blank" rel="noopener noreferrer">Niko Soriano</a></p>
          </div>
        </Container>
      </section>
    </>
  );
};
