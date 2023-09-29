import robot from "../assets/Robot.png";
const About = () => {
  return (
    <div className="w-full bg-brand py-6 px-6 sm:px-20 flex sm:flex-row flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-7 basis-1/2">
        <p className="text-yellow-400 text-2xl font-bold">
          About Smart Deployer
        </p>
        <p className="text-white text-xl font-normal w-full">
          Tokenfy launcher is a customizable platform where tokens can be
          created and made easily customizable for token creators to launch
          their tokens. With our core features lies the possibility for our
          users (businesses, communities, organizations and companies) to manage
          their tokens directly through our platform, import tokens, and
          customize tokens as preferable.
        </p>
        <button
          className={`rounded-md p-2 w-fit active:scale-95 transition-all duration-300 font-medium bg-white color px-3`}
        >
          Create Tokens
        </button>
      </div>
      <div className="w-full h-full flex grow pb-[1.5rem] basis-1/2">
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default About;
