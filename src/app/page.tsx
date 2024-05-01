import Message from "./ui/components/Message";

export default function Home() {
  return (
    <main className="my-24 flex flex-col items-center bg-white px-4 leading-[1.5] tracking-[-0.015rem] text-neutral-900">
      <header className="w-full max-w-xl font-medium leading-[1.2] ">
        <p className="">
          lycke.studio
        </p>
      </header>
      <section className="mt-24 w-full max-w-xl font-medium ">
        <div className="flex flex-col gap-6">
          <Message
            imageUrl="/images/darwin-profile.png"
            imageBgColor="bg-blue-600"
            name="Lovisa"
            date="2 minutes ago"
            message={[
              "Hi there! I'm Lovisa, founder at Lycke. ",
              "",
              "I heard you're looking for a new website?"
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />
          <Message
            imageUrl="/images/darwin-profile.png"
            imageBgColor="bg-orange-400"
            name="You"
            date="1 minute ago"
            message={[
              "yes i need a new website ASAP!!",
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="right"
          />
          <Message
            imageUrl="/images/darwin-profile.png"
            imageBgColor="bg-orange-400"
            name="You"
            date="1 minute ago"
            message={[
              "you do websites right?"
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="right"
          />
          <Message
            imageUrl="/images/darwin-profile.png"
            imageBgColor="bg-blue-600"
            name="Lovisa"
            date="Just now"
            message={[
              "Yes! We're a web design agency. Rebranding is always included in our projects too!",
              "",
              ""
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="left"
          />
          <Message
            imageUrl="/images/darwin-profile.png"
            imageBgColor="bg-orange-400"
            name="You"
            date="Just now"
            message={[
              "omg ur a lifesaver!!! thanks!",
              "",
              ""
            ]}
            messageBgColor="bg-zinc-100"
            imagePosition="right"
          />
        </div>

      </section>

    </main>
  );
}
