import HeroBannerImg from "../../../assets/HomePage/HeroBanner.png";
import Button from "../../ui/Button";
import BlueLink from "../../ui/BlueLink";
import SectionWrapper from "../../ui/SectionWrapper";

function HeroBanner() {
  return (
    <SectionWrapper
      id="about"
      topMargin={false}
      sectionClassName="text-center before:block before:absolute before:-inset-1 before:bg-gradient-to-b before:from-highlight-eggshell before:to-white before:h-full before:-z-1 relative"
    >
      {/* Text */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-16 md:pt-4 ">
          {/* Section header */}
          <div className=" pb-12 md:pb-16">
            <h1 className="mb-4">
              A private co-working space for remote geeks.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8">
                Dungeon House is a home for remote working geeks to come
                together to work and play Magic the Gathering, Warhammer,
                Dungeons and Dragons, and more.
              </p>
              <Button
                size="large"
                primaryText="Join our waiting list"
                secondaryText="Get a peek into the behind the scenes."
                addClassName="justify-center"
                link="https://ix0dy8pqosu.typeform.com/to/XZLHJIV8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        className="mx-auto drop-shadow-3xl mb-10 rounded-lg"
        src={HeroBannerImg}
        alt="Logo"
      />

      {/* Link */}
      <BlueLink
        link="#features"
        primaryText="See everything we have to offer and more"
        size="large"
      />
    </SectionWrapper>
  );
}

export default HeroBanner;
