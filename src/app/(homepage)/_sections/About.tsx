import ContactBtn from '@/components/contact/ContactBtn';
import TextBounce from '@/components/ui/TextBounce/TextBounce';
import ScrollDownBtn from './ScrollDownBtn/ScrollDownBtn';

export default function About() {
  return (
    <div
      id="about"
      className="flex max-w-screen flex-col justify-between md:h-[calc(100vh-88px)]"
    >
      <div className="pt-24 text-center md:ml-10 md:pt-[20vh] md:text-left">
        <div className="mx-auto w-fit text-lg font-semibold md:w-full lg:text-xl">
          <TextBounce text="Hey! My name is" />
        </div>

        <h1 className="mt-2 text-2xl font-bold md:text-4xl lg:mt-4 lg:text-5xl xl:text-6xl">
          Levan Dolidze.
        </h1>

        <p className="mt-2 text-2xl font-bold textTertiary md:text-4xl lg:mt-4 lg:text-5xl xl:text-6xl">
          I&#8217;m a Senior Frontend Engineer.
        </p>

        <p className="mx-auto mt-2 max-w-[600px] font-bold textTertiary md:mx-0 lg:mt-4 lg:max-w-[700px] lg:text-xl">
          I lead frontends end to end, from rough prototype to fast,
          production&#8209;ready product.
        </p>

        <div className="mx-auto mt-12 mb-8 block w-fit md:hidden">
          <ContactBtn />
        </div>
      </div>

      <ScrollDownBtn />
    </div>
  );
}
