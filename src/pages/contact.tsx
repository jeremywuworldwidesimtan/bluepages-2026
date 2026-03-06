import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

export default function Contact() {
  return (
    <div className="xl:flex xl:gap-8 w-auto bg-bp-sky-500 p-4 xl:max-w-[75vw] xl:mx-auto overflow-hidden">
        <div className="xl:flex-3">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bp-ink-950">
              connect with blue
            </h1>
            <p>
              got a question, collaboration idea, or just want to chat about
              coding, ai, or pizza? feel free to reach out!
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-bp-ink-950 mt-2">
              feedback and inquiries
            </h2>
            <p>
              have suggestions for the website, a question, or just want to
              share a fun pizza anecdote? feel free to use the feedback form
              below - i read every message!
            </p>
            <form
              action="#"
              className="bg-bp-teal-700 rounded-md p-2 text-bp-frost-50 mt-4"
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">name</FieldLabel>
                  <Input id="name" placeholder="Alan" className="text-bp-frost-50 placeholder:text-bp-frost-50/50"/>
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alan@example.com"
                    className="text-bp-frost-50 placeholder:text-bp-frost-50/50"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="textarea-message">message</FieldLabel>
                  <FieldDescription className="text-bp-frost-50">
                    enter your message below. please follow guidelines and do
                    not ask for photos of my eyes.
                  </FieldDescription>
                  <Textarea
                    id="textarea-message"
                    placeholder="type your message here."
                    className="text-bp-frost-50 placeholder:text-bp-frost-50/50"
                  />
                </Field>
                <Field orientation="horizontal">
                  <Button type="reset" variant="secondary">
                    reset
                  </Button>
                  <Button type="submit">submit</Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
        <div className="xl:flex-1">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-bp-ink-950">
              open to collabs!
            </h2>
            <p>i'm always interested in:</p>
            <ul className="list-disc list-inside text-bp-ink-950 flex flex-col gap-1">
              <li>open-source development</li>
              <li>ai and machine learning discussions</li>
              <li>web development and programming collaborations</li>
              <li>tech writing and blog contributions</li>
            </ul>
            <p className="mt-1">if you have an interesting project or idea, let's connect!</p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-bp-ink-950 mt-2">
              i'm on social media too!
            </h2>
            <p>
              you can find me on various platforms where i share insights,
              projects, and updates.
            </p>
            <div className="flex gap-2 md:gap-4 mt-2">
              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/jeremywuworldwidesimtan",
                    "_blank",
                  )
                }
              >
                <SiGithub /> GitHub
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@alantan1008",
                    "_blank",
                  )
                }
              >
                <SiYoutube /> YouTube
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/fabriziorom",
                    "_blank",
                  )
                }
              >
                <SiInstagram /> Instagram
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
