import Message from "./ui/components/Message";
import PhotoCollection from "./ui/components/PhotoCollection";

export default function Home() {
  return (
    <main className="my-16 sm:my-24 flex flex-col items-center bg-white px-4 leading-[1.5] tracking-[-0.015rem] text-neutral-900">
      <header className="w-full max-w-xl font-medium leading-[1.2] ">
        <p className="">lycke.studio</p>
      </header>
      <section className="mt-24 w-full max-w-xl font-medium ">
        <div className="flex flex-col gap-4">
          <Message
            profileUrl="/images/memoji.png"
            imageBgColor="bg-blue-600"
            name="Lovisa"
            message={[
              "Hi there! I'm Lovisa, founder at Lycke.",
              "",
              "We're a fully remote web design studio.",
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />
          <Message
            profileUrl="/images/memoji.png"
            imageBgColor="bg-blue-600"
            message={["Here is some of our work:"]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />
          <PhotoCollection
            profileUrl="/images/memoji.png"
            imageUrl="/images/gryning.png"
            imageBgColor="bg-blue-600"
            imagePosition="left"
          />
          <Message
            imageBgColor="bg-orange-400"
            profileUrl="/images/unicorn.png"
            name="You"
            message={["holy cow that looks so good!"]}
            messageBgColor="bg-zinc-100"
            imagePosition="right"
          />
          <Message
            imageBgColor="bg-orange-400"
            profileUrl="/images/unicorn.png"
            message={["i'm actually looking to redesign my website right now. could you help me?"]}
            messageBgColor="bg-zinc-100"
            imagePosition="right"
          />
          <Message
            profileUrl="/images/memoji.png"
            imageBgColor="bg-blue-600"
            name="Lovisa"
            message={["Sure! Let's schedule a call."]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />
          <Message
            profileUrl="/images/memoji.png"
            imageBgColor="bg-blue-600"
            message={["Email me at lovisa@lycke.studio 🌈"]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />

        </div>
      </section>
    </main>
  );
}
