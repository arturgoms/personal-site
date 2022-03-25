import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "@/ui/RainbowHighlight";

import { RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { useTheme } from "next-themes";

export default function Home() {
  const [colors, setColors] = useState([]);
  // const [tempInterval, setTempInterval] = useState(null);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Artur Gomes"
      description="Backend developer, JavaScript enthusiast, Pixelart Artist, Tech Blogger and a Learner."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex md:w-3/4 flex-col">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hey, I’m{" "}
                <RainbowHighlight color={colors[0]}>
                  <span className="dark:text-black">Artur Gomes</span>
                </RainbowHighlight>{" "}
              </h1>

              <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
                 I’m a backend-developer. <br />
                 I work at
                <span className="dark:text-white font-bold">
                {" "}Globant{" "}
                </span>{" "}
                as a{" "}
                <span className="dark:text-white font-bold">
                  Python Developer.{" "}
                </span>{" "}
                <br />
                {/* 🤗 You've discovered my piece on the internet.
                <br />  */}
              </h2>
            </RoughNotationGroup>
          </div>

          <div className="md:flex hidden md:w-1/4 flex-col">
            <img
              src="avatar-new.png"
              className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular Posts
        </h3>
        <BlogPost
          title="Posts coming soon.."
          summary="They are really coming, i promise."
          slug=""
        />
        {/* <BlogPost
          title="How I built a blogging platform like Medium with Next.js"
          summary="Insights and structure of devmedium, A blogging platform built with Next.js with features like custom usernames, create blogs and various optimization techniques"
          slug="blogging-platform-nextjs"
        /> */}

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="iOS APT Repo"
          description="APT Like tool to query cydia repositories using the default repository from debian sources."
          href="https://github.com/arturgoms/python-apt-ios-repo"
          icon="aptiosrepo"
          tags={["Python", "Debian", "Jailbreak"]}
        />
        <ProjectCard
          title="PyInARM"
          description="Web app that can upload, build and be a editor to code to be send to Teensy boards."
          href="https://github.com/arturgoms/py-in-arm"
          icon="pyinarm"
          tags={["Python", "Teensy", "Micropython"]}
        />
        <ProjectCard
          title="IA Organisms"
          description="A pygame environment that have living cells that learn how to eat and walk around using NEAT algorithm."
          href="https://github.com/arturgoms/neat-pygame-organisms"
          icon="neatpygame"
          tags={["IA", "Neat", "python", "pygame"]}
        />
        <ProjectCard
          title="KairOS"
          description="Real Time Operation System opensource and openhardware to be used in smartwatches."
          href="https://github.com/arturgoms/rtos-kairos"
          icon="kairos"
          tags={["rtos", "c", "smartwatch"]}
        />
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        />
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
