import React from "react";
import { Container } from "~/components/ui/containers";
import Image from "next/image";

import ourStory from "~/assets/images/our-story.png";

export default function Story() {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <Image src={ourStory} alt="" />
      </div>
      <div className="my-16 xl:mx-0 mx-5">
        <div className="space-y-6">
          <p className="font-montserrat font-bold md md:text-5xl text-3xl">Since 2008</p>
          <p className="font-montserrat font-regular md:text-2xl text-lg text-balance">
            The Holy Cross of Davao College Information Technology Society,
            established in 2008, has been a beacon of growth and excellence
            within the institution. Since its founding, the society has embarked
            on an ambitious journey, continually evolving to meet the needs of
            students passionate about Information Technology. The organization
            is dedicated to cultivating a vibrant and supportive community where
            aspiring IT professionals can thrive.
          </p>
          <p className="font-montserrat font-regular md:text-2xl text-lg text-balance">
            Over the years, the society has played a pivotal role in providing
            its members with invaluable opportunities to develop and hone their
            technical skills. Through workshops, seminars, and hands-on
            projects, members have gained practical experience that complements
            their academic learning. Additionally, the society has facilitated
            connections with industry professionals, enabling students to build
            networks that extend beyond the classroom.
          </p>
        </div>
        <div className="mt-28 space-y-6">
          <p className="font-montserrat font-bold md md:text-5xl text-3xl text-right">
            ITS Officers
          </p>
          <p className="font-montserrat font-regular md:text-2xl text-lg text-balance text-right">
            The HCDC Information Technology Society is led by a committed team
            of officers who work together to organize events, facilitate
            workshops, and support members. Their leadership fosters a vibrant,
            inclusive environment where students can enhance their IT skills and
            connect with industry professionals. Through their dedication, the
            officers ensure the society remains a vital part of the Holy Cross
            of Davao College community.
          </p>
        </div>

        <div className="mt-28 space-y-6">
          <p className="font-montserrat font-bold md md:text-5xl text-3xl">
            ITS Creatives
          </p>
          <p className="font-montserrat font-regular md:text-2xl text-lg text-balance">
            The HCDC Information Technology Society Creatives are a talented
            group dedicated to bringing innovative ideas to life through design
            and media. They play a key role in crafting visually engaging
            content, including promotional materials, social media graphics, and
            event branding, that enhances the society&rsquo;s presence and impact.
            With a keen eye for detail and creativity, the Creatives ensure that
            all communications and materials effectively convey the society&rsquo;s
            mission and activities, contributing to a dynamic and professional
            image for the Holy Cross of Davao College IT community.
          </p>
        </div>
      </div>
    </Container>
  );
}
