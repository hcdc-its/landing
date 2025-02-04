"use client";

import { Container } from "~/components/ui/containers";
import Image from "next/image";

import niko from "~/assets/images/contributors/niko_soriano.jpg"
import jeo from "~/assets/images/contributors/jeo.jpeg"

const contributors = [
    {
        full_name: "Niko Soriano",
        year: "3rd Year BSIT Student",
        description:
            "Lead Developer, Aspiring Full-Stack Developer | Graphic Designer",

        image: niko,
        linkedin: "https://www.linkedin.com/in/nikosia/",
        github: "https://github.com/kaizenics",
        behance: "https://www.behance.net/kaizenics",
        portfolio_website: "https://nikodv.me/"

    },
    {
        full_name: "Jeo Carlo Lubao",
        year: "BSIT Alumni, (A.Y. 2022-2023)",
        description:
            "Contributor, Software Developer | Graphic Designer",

        image: jeo,
        linkedin: "https://www.linkedin.com/in/jeoooo/",
        github: "https://github.com/jeoooo",
        behance: "https://www.behance.net/jeolubao",
        portfolio_website: "https://jeoooo.github.io/portfolio"
    },
];

interface ContributorsProps {
    id: string;
}

export const Contributors: React.FC<ContributorsProps> = ({ id }) => {
    return (
        <>
            <main id={id}>
                <Container className="container flex flex-col xl:px-0">
                    <div
                        className="mt-20"
                        data-aos="fade-up"
                    >
                        <p className="font-montserrat font-semibold text-base sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl">
                            <span className="bg-[#960202] p-2 rounded-xl">contributors</span>
                        </p>
                        <p className="font-montserrat font-regular text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl my-6">
                            Innovating and designing the website through passion
                        </p>
                    </div>
                    <div className="flex flex-row md:block lg:flex-row justify-between items-center my-10">
                        <div
                            className="flex flex-row h-full lg:mx-5 xl:mx-5 gap-4"
                            data-aos="fade-up"
                        >

                            {contributors.map((contributor, index) => (
                                <div
                                    key={index}
                                    className="w-[100%] h-full sm:h-full md:h-full lg:h-[300px] xl:h-[525px] lg:w-[25%] box-border border-2 border-[#3a3a3a] block sm:block md:block lg:flex xl:flex flex-col justify-between items-center transition-transform duration-300 ease-in-out"
                                >
                                    <div className="relative h-[20px] lg:min-w-[300px] xl:min-w-[300px] sm:h-[450px] md:h-[600px] lg:h-full xl:h-full">
                                        <Image
                                            src={contributor.image}
                                            alt="{update.title}"

                                        />
                                    </div>
                                    <div className=" lg:p-6 sm:p-16 relative h-[200px] lg:min-w-[300px] xl:min-w-[300px] sm:h-[450px] md:h-[600px] lg:h-full xl:h-full">

                                        <div className="lg:h-[120px]">
                                            <h4 className="font-montserrat text-lg font-bold mt-[100px] lg:mt-[0px] ">{contributor.full_name}</h4>

                                            <h4 className="font-montserrat  text-sm text-[#afaeaedc] mt-2">{contributor.year}</h4>
                                            <h4 className="font-montserrat  text-xs text-[#afaeaedc] mt-6">{contributor.description}</h4>
                                        </div>



                                        <div className="flex flex-row my-6 gap-4">
                                            <a href={contributor.portfolio_website} target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    className="transition ease-in-out fill-[#afaeaedc] hover:fill-white h-6 "
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                                                </svg>
                                            </a>
                                            <a href={contributor.github} target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    className="transition ease-in-out fill-[#afaeaedc] hover:fill-white h-6 "
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                                </svg>
                                            </a>
                                            <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    className="transition ease-in-out fill-[#afaeaedc] hover:fill-white h-6 "
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                </svg>
                                            </a>
                                            <a href={contributor.behance} target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    className="transition ease-in-out fill-[#afaeaedc] hover:fill-white h-6 "
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}


 // contributors.tsx