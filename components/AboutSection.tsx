//@ts-nocheck
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
//import myImage from '../public/my_image.jpg';
import TabButton from "./TabButton";
import { color } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: HTML/CSS, C/C++, JavaScript, Python, SQL.</li>
        <li>
          Technologies/Frameworks: NodeJS, ExpressJS, ReactJS, Redux, MongoDB,
          Mongoose.
        </li>
        <li>Developer Tools: VS Code, Figma, Postman, Git/GitHub.</li>
        <li>
          Others:Data Structures and Algorithm , DBMS, Operating System,
          Computer Networks.
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>JSS Academy of Technical Education, Noida (Uttar Pradesh)</li>
        Bachelor of Technology — Computer Science(AIML) [2021-2025]
      </ul>
    ),
  },
  {
    title: "Certifications/Recognitions",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          {" "}
          Accenture Nordics - Developer Job Simulation (Forage)
        </li>
        <li>
          {" "}
          API Fundamentals Student Expert : Certified in API fundamentals and proficient with Postman tools. <a href="https://badgr.com/public/assertions/ar6txYOyRyOd_vtgSacdDA" style={{color:"yellow"}}>(view BADGE)</a>
        </li>
        <li>
          {" "}
          Career Essentials in Generative AI : Specialized course on Generative
          AI, offered by Microsoft and LinkedIn. <a href="https://www.linkedin.com/learning/certificates/587cd1967cb843baa6530cdeeacbc74da184305243ab07eb782f0d86592c5293" style={{color:"yellow"}}>(view CERTIFICATE)</a>
        </li>
        <li>
          {" "}
          React Mastery: Achieved mastery in React.js through the
          CodProg program. <a href="https://www.codprog.com/certificate/4HST438vRwCkv_UsM_ooAw" style={{color:"yellow"}}>(view CERTIFICATE)</a>
        </li>
        <li> Open Source Contributor and Campus Ambassador at GSSoC’24.</li>
        <li>
          {" "}
          GLB Hackathon 3.0 Finalist (Top 21 out of 306 teams), shortlisted
          participant in SIH’23, KAVACH’23, HACKHAZARDS’24, HackWithIndia.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative w-full min-h-[200px] flex justify-center items-center overflow-hidden">
          <Image
            src="/my.jpg"
            alt="My Image"
            layout="responsive"
            width={500}
            height={500}
            className="w-full h-auto object-cover object-top rounded-lg" // Added object-top
            priority
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with the MERN stack and possess deep knowledge of
            JavaScript, React, Redux, Next.js, Node.js, Express, MongoDB, HTML,
            CSS, and many other frameworks. I am a quick learner and always
            eager to expand my knowledge and skill set. As a team player, I am
            excited to collaborate with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
