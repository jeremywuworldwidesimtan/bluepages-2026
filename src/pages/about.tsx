import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import {
    SiD3,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactrouter,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { TbBrandCSharp, TbBrandOpenai } from "react-icons/tb";

const iconSize = 32;

const skills = [
  { name: "javascript", value: 90, icon: <SiJavascript size={iconSize} /> },
  { name: "typescript", value: 85, icon: <SiTypescript size={iconSize} /> },
  { name: "react", value: 83, icon: <SiReact size={iconSize} /> },
  { name: "python", value: 80, icon: <SiPython size={iconSize} /> },
  { name: "react router", value: 77, icon: <SiReactrouter size={iconSize} /> },
  { name: "tailwind css", value: 75, icon: <SiTailwindcss size={iconSize} /> },
  { name: "shadcn ui", value: 70, icon: <SiShadcnui size={iconSize} /> },
  { name: "node.js", value: 67, icon: <SiNodedotjs size={iconSize} /> },
  { name: "vite", value: 65, icon: <SiVite size={iconSize} /> },
  { name: "d3", value: 63, icon: <SiD3 size={iconSize} /> },
  { name: "sql", value: 60, icon: <SiPostgresql size={iconSize} /> },
  { name: "c#", value: 55, icon: <TbBrandCSharp size={iconSize} /> },
  { name: "ai", value: 53, icon: <TbBrandOpenai size={iconSize} /> },
  { name: "next.js", value: 50, icon: <SiNextdotjs size={iconSize} /> },
];

export default function About() {
  const [alanMessageOpen, setAlanMessageOpen] = useState(false);
  return (
    <div className="xl:flex xl:gap-8 w-auto bg-bp-sky-500 p-4 xl:max-w-[75vw] xl:mx-auto overflow-hidden">
      <div className="flex flex-col xl:flex-3 gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bp-ink-950">
            about me!
          </h1>
        </div>
        <div>
          <img
            src={`${import.meta.env.BASE_URL}blue.png`}
            alt="Photo of Blue"
            className="xl:w-[50%]"
          />
        </div>
        <div className="flex flex-col gap-4 text-bp-ink-950 text-sm md:text-base text-justify">
          <p>
            i'm <strong>emily</strong> (though I like to be called blue) - a
            front-end freelancer who builds cozy, modern web stuff for people
            who want their sites to feel alive (without feeling like a pop-up ad
            attacked them) ☕💙 most days i'm stitching together clean layouts,
            friendly buttons, and little interactions that make users go, “oh…
            that's nice.” and yes, i'm the kind of person who gets emotionally
            invested in padding.
          </p>
          <p>
            lately, i've been freelancing full-time and shipping work for local
            smes: static + dynamic landing pages, dashboards that make numbers
            look less intimidating, and internal tool screens that help teams do
            the thing faster (instead of doing the thing and fighting the ui)
            🧩✨ i like projects that are practical and quiet-confident - the
            kind that don't scream, but still get compliments.
          </p>
          <p>
            off-work, i'm a simple creature: music, late-night ideas, pizza, and
            the occasional “i should go outside” moment 🌙🎧🍕 i also share bits
            of that life on bluepages: what i'm building, what i'm learning,
            small lessons from real projects, and little behind-the-scenes
            thoughts that might help someone else. quick note about photos: if
            you see me on bluepages, my eyes are usually obscured on purpose
            👀🚫 - not for mystery points, but because i want the focus to stay
            on the content, not my face. (also: pineapple on pizza is a strong
            “no” from me. i support freedom, but not that kind. 😄🍍🚫)
          </p>
          <p>
            bluepages is basically my comfy corner of the internet - a place for
            code, curiosity, and gentle chaos (the fun kind) 🛋️✨ you can expect
            practical web-building notes, small workflows that actually help,
            occasional “life happened” posts, and a calm, optimistic vibe that
            somehow survives deadlines and weird bugs. i'm here to share things
            honestly, but with boundaries - like any good internet citizen who
            enjoys privacy and having a personality.
          </p>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-bp-ink-950">
            life philosophies (the “why” behind the blue 💙)
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-2 text-bp-ink-950 text-sm md:text-base mt-4 text-justify">
            <li>
              empowerment: tech shouldn't be a locked door. i want it to feel
              like a key - especially for people who come from backgrounds like
              mine (women, rural origins, underestimated folks) who deserve more
              access, confidence, and opportunities through tech. 🔑🌱
            </li>
            <li>
              freedom: i'm building a life that doesn't have to fit the
              traditional “one-size-fits-all” work template. i like choosing my
              projects, shaping my time, and working in a way that feels human -
              not like i'm speedrunning burnout. 🕊️🧠
            </li>
            <li>
              anonymity: i want to share interesting things without sharing
              compromising information. keeping it low-profile helps protect my
              life while keeping the spotlight where it belongs: on ideas,
              craft, and content - not looks. 🫥🛡️
            </li>
            <li>
              expression: bluepages is my space to share thoughts, life moments,
              code, and creativity openly - while still respecting privacy
              boundaries. freedom to speak, plus the wisdom to keep some doors
              closed. 🎨📝🔒
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 xl:mt-0 xl:flex-1 h-auto">
        <div>
          <h2 className="text-xl font-bold text-bp-ink-950">skills</h2>
          <div className="flex flex-col gap-4 mt-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2">
                {skill.icon && <span>{skill.icon}</span>}
                <Field className="w-full max-w-sm" key={skill.name}>
                  <FieldLabel htmlFor={skill.name.toLowerCase()}>
                    <span>{skill.name}</span>
                    <span className="ml-auto">{skill.value}/100</span>
                  </FieldLabel>
                  <Progress
                    value={skill.value}
                    id={skill.name.toLowerCase()}
                    className="bg-bp-horizon-200"
                  />
                </Field>
              </div>
            ))}
            <Collapsible>
              <CollapsibleTrigger
                className="font-xs flex items-center gap-1 text-bp-ink-950"
                onClick={() => {
                  setAlanMessageOpen(!alanMessageOpen);
                }}
              >
                A message from Alan{" "}
                {!alanMessageOpen ? (
                  <ChevronDown size={16} className="ml-1" />
                ) : (
                  <ChevronUp size={16} className="ml-1" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2 text-xs text-bp-ink-950 mt-1">
                  <p>
                    no f**king way{" "}
                    <a
                      href="https://github.com/simple-icons/simple-icons/issues/11236"
                      className="underline"
                    >
                      microsoft sued
                    </a>{" "}
                    to get simple icons to remove popular microsoft icons
                    including linkedin and xbox (though github is still here).
                  </p>
                  <p>
                    to be fair simple icons also removed the logos of
                    world-renowned litigious companies like disney and nintendo,
                  </p>
                  <p>but microsoft?</p>
                  <p>
                    a company not known for being litigious (except when they
                    sued a canadian teenage software dev in the 90s)?
                  </p>
                  <p>
                    the company that professionals and devs take for granted?
                  </p>
                  <p>
                    the company that loudly embrace open source after spending
                    most of the 90s and 2000s trying to shut them down?
                  </p>
                  <p>
                    microsoft legal department gotta chill before i switch to
                    mac book <span className="line-through">pro</span>{" "}
                    <a
                      href="https://www.apple.com/newsroom/2026/03/say-hello-to-macbook-neo/"
                      className="underline"
                    >
                      neo
                    </a>{" "}
                    (sorry i don't have money because emily refuse to pay me for
                    my work and hosting) even then i still cannot get away from
                    microsoft because of office 365, vs, github, linkedin etc.
                  </p>
                  <p>
                    anyways, i got the csharp logo from another icon library,
                    dont f**k with me anymore microsoft.
                  </p>
                  <p>sincerely, alan</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
}
