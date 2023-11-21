import HeroSection from "../components/HeroSection";
import featuredImg from "../assets/images/featuredImgs/featureA.svg";
import discoveryImg from "../assets/images/discovery.png";
import GlobalButton from "../components/GlobalButton";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import { authorsList1 } from "../assets/data/data";
import Authors from "../components/Authors";
import FeaturedLogos from "../components/FeaturedLogos";
import Testimonials from "../components/Testimonials";
import JoinOurTeam from "../components/JoinOurTeam";

function HomePage() {
  return (
    <>
      <HeroSection />

      {/* featured post section */}
      <section className="max-w-[120rem] mx-auto lg:px-4 lg:flex lg:gap-6">
        <div className="my-[2.5rem] lg:mb-[0] lg:mt-[5rem] px-2">
          <h4 className="mb-[.5rem] font-bold text-[#232536] text-[2rem] lg:text-[3rem] lg:leading-[4rem] lg:tracking-[-.1rem]">
            Featured Post
          </h4>
          <div className="border border-[#6D6E76] p-4">
            <img src={featuredImg} alt="featured image" className="w-full" />
            <div className="mt-[1rem] pb-[1rem]">
              <p className="text-[#4C4C4C] text=[1.4rem] font-medium leading-[2rem]">
                By <span className="text-[#592EA9]">John Doe</span> l May 23,
                2022
              </p>
              <p className="mb-[1rem] text-[#232536] text-[1.6rem] leading-8 font-medium lg:text-[2.5rem] lg:font-semibold lg:leading-[3.5rem] tracking-[-.05rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p className="mb-[1.2rem] text-[#6D6E76] text-[13px] lg:text-[1.3rem] lg:leading-[2rem]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <GlobalButton text="Read More >" className={"bg-[#FFD050]"} />
            </div>
          </div>
        </div>
        {/* All post */}
        <div className="">
          <div className="flex items-center justify-between px-2 lg:mt-[5rem]">
            <h2 className="font-bold text-[#232536] text-[2rem] lg:text-[2.9rem] lg:leading-[4rem] lg:tracking-[-.1rem]">
              All Posts
            </h2>
            <p className="text-[#592EA9] lg:text-[1.3rem] lg:leading-[2rem] cursor-pointer">
              View All
            </p>
          </div>
          <div>
            <Link>
              <div className="p-4 transition-all hover:bg-[#FBF6EA]">
                <p className="text-[#4C4C4C] text=[1.4rem] font-medium leading-[2rem]">
                  By <span className="text-[#592EA9]">John Doe</span> l Aug 23,
                  2021
                </p>
                <p className="text-[#232536] font-medium text-[1.6rem] lg:text-[2.4rem] lg:leading-[3.2rem]">
                  8 Figma design systems that you can download for free today.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* about us and mission section */}
      <section className="pt-[10rem] max-w-[120rem] mx-auto">
        <div className="h-4 grid grid-cols-[1fr_3fr_1fr]">
          <div className="h-4 bg-[#fff]"></div>
          <div className="h-4 bg-[#FFD050]"></div>
          <div className="h-4 bg-[#592EA9]"></div>
        </div>
        {/* about */}
        <div className="bg-[#F4F0F8] p-[5rem] lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-[8rem] lg:mb-0">
            <p className="text-[#232536] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase">
              ABOUT US
            </p>
            <h2 className="mt-[2.4rem] mb-[1.6rem] max-w-[49.4rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              We are a community of content writers who share their learnings
            </h2>
            <p className="max-w-[51.5rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem] mb-[1.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link>
              <span className="text-[#592EA9] font-Sen text-[1.8rem] font-bold leading-[3.2rem]">{`Read More >`}</span>
            </Link>
          </div>
          {/* mission */}
          <div>
            <p className="text-[#232536] text-[1.6rem] font-semibold leading-8 tracking-[.3rem] uppercase">
              Our mision
            </p>
            <h2 className="mt-[2.4rem] mb-[1.6rem] max-w-[49.4rem] text-[#232536] font-Sen text-[3.6rem] font-bold leading-[4.8rem] tracking-[-.2rem]">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="max-w-[51.5rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* category section */}
      <section className="max-w-[120rem] mx-auto">
        <Categories />
      </section>

      {/* discover/about section */}
      <section className="max-w-[120rem] mx-auto mt-[8rem] lg:relative">
        <div>
          <img
            src={discoveryImg}
            alt="discoverImg"
            className="block lg:w-[60%]"
          />
          <div className="pt-4 p-1 bg-[#fff] lg:absolute lg:bottom-0 lg:right-0 lg:p-[4rem] xlg:p-[8rem]">
            <h5 className="text-[#232536] text-[1.6rem] font-semibold leading-[2rem] tracking-[.3rem] uppercase">
              Why we started
            </h5>
            <h4 className="max-w-[54.6rem] text-[#232536] font-Sen text-[4.8rem] font-bold mt-[2.4rem] mb-[1.6rem] leading-[6.4rem] tracking-[-.2rem] lg:text-[2.4rem] lg:leading-[3.2rem] lg:tracking-[-.05rem]">
              It started out as a simple idea and evolved into our passion
            </h4>
            <p className="max-w-[54.6rem] text-[#6D6E76] text-[1.6rem] leading-[2.8rem] mb-[3.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <GlobalButton
              text="Discover our story >"
              className={"bg-[#FFD050]"}
            />
          </div>
        </div>
      </section>

      {/* list of Authors section */}
      <div className="mt-[10rem] max-w-[120rem] mx-auto">
        <Authors authorsData={authorsList1} />
      </div>

      {/* list of features section */}
      <div className="mt-[10rem] max-w-[128rem] mx-auto">
        <FeaturedLogos />
      </div>

      {/* testimonial section */}
      <div className="mt-[10rem] max-w-[120rem] mx-auto">
        <Testimonials />
      </div>

      {/* joinOurTeam section */}
      <div className="my-[10rem]">
        <JoinOurTeam />
      </div>
    </>
  );
}

export default HomePage;
