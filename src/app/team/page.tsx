import React from "react";
import { Container } from "~/components/ui/containers";

export default function Team() {
  return (
    <>
      <Container>
        <div className="flex flex-col px-5 xl:px-0">
          <div className="mt-20 mb-5" data-aos="fade-up">
            <p className="font-montserrat font-semibold text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              <span className="bg-[#960202] p-2 rounded-xl">
                meet the team
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
