import React from "react";
import { PageHero } from "../components";
import aboutImg from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <div className=" bg-slate-50 py-20">
      <PageHero title="about" />
      <main className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto py-20 px-20">
        <img src={aboutImg} alt="" className="rounded-md" />
        <article className="space-y-10">
          <div>
            <h2 className="text-5xl text-black font-semibold">Our Story</h2>
            <div></div>
          </div>
          <p className="leading-9 text-base">
            At Arsheyr Tech, we're not just a retailer; we're your tech
            partners. Our team of knowledgeable experts is here to guide you
            through your tech journey, offering advice, troubleshooting, and
            unmatched customer support. We're committed to providing top-tier
            products, secure shopping, and swift deliveries, ensuring your tech
            experience is seamless and satisfying. Join us in embracing the
            future of technology.
          </p>
        </article>
      </main>
    </div>
  );
};

export default AboutPage;
