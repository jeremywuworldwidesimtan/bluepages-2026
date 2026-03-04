import { Button } from "./ui/button";
import { Input } from "./ui/input";

const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() <= birth.getDate())) {
    age--;
  }
  return age;
};

export default function LandingIntro() {
  return (
    <>
      <div className="p-4 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center lg:gap-6 lg:max-w-5xl lg:mx-auto">
        <div className="text-bp-ink-950 flex flex-col gap-4 lg:text-xl">
          <p>
            junior freelance frontend dev, blogger, dreamer, friend, daughter
            and pizza connoisseur.
          </p>
          <p>and this is my digital home, where i share my stories and code.</p>
          <p>sign up to receive updates from me! (it's free)</p>
          <form
            onClick={() => {
              console.log("Form clicked");
            }}
            className="flex gap-2"
          >
            <Input id="update-email" placeholder="Email" required />
            <Button type="submit">sign up</Button>
          </form>
        </div>
        <div className="bg-bp-inkwell-950 text-bp-frost-50 rounded-md p-6 text-xs lg:text-lg">
          <div className="font-mono">
            <p>const me = {"{"}</p>
            <p>&nbsp;&nbsp;“name”: “emily”, </p>
            <p>&nbsp;&nbsp;“nickname”: “blue”,</p>
            <p>&nbsp;&nbsp;“fav_color”: “#0000FF”, </p>
            <p>&nbsp;&nbsp;“age”: {calculateAge("2002-11-28")}, </p>
            <p>&nbsp;&nbsp;“job”: [“freelance dev”, “blog writer”], </p>
            <p>&nbsp;&nbsp;“role”: [“friend”, “daughter”], </p>
            <p>
              &nbsp;&nbsp;“hobby”: [“writing”, “dreaming”, “enjoying pizza”,
              “just having fun”]{" "}
            </p>
            <p>{"}"};</p>
          </div>
        </div>
      </div>
    </>
  );
}
