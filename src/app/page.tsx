import Head from "next/head";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>ConciseCoin - Empowering Software Engineers</title>
        <meta
          name="description"
          content="Join the startup revolution with ConciseCoin. Collaborate, earn rewards, and accelerate your career."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="py-20 text-center bg-gradient-to-r from-purple-800 to-indigo-900">
        <h1 className="text-5xl font-bold mb-4">Code. Collaborate. Create.</h1>
        <p className="text-xl mb-8">
          Join the Startup Revolution with ConciseCoin.
        </p>
        <div className="space-x-4">
          <a
            href="/join"
            className="bg-white text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Join the Community
          </a>
          <a
            href="/learn"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-800"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Why ConciseCoin Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why ConciseCoin?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Collaborate on Innovative Projects"
              description="Work with startups solving real-world problems."
            />
            <FeatureCard
              title="Earn Rewards"
              description="Get paid in ConciseCoin for your contributions."
            />
            <FeatureCard
              title="Build Your Network"
              description="Connect with founders, investors, and fellow developers."
            />
            <FeatureCard
              title="Accelerate Your Career"
              description="Gain experience and visibility in the startup world."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <StepCard
              step="1"
              title="Sign Up"
              description="Create your profile and showcase your skills."
            />
            <StepCard
              step="2"
              title="Explore Projects"
              description="Browse startups looking for talent."
            />
            <StepCard
              step="3"
              title="Contribute"
              description="Join teams, write code, and solve challenges."
            />
            <StepCard
              step="4"
              title="Earn ConciseCoin"
              description="Get rewarded for your contributions."
            />
            <StepCard
              step="5"
              title="Grow"
              description="Build your reputation and unlock new opportunities."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits for Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <FeatureCard
              title="Flexible Work"
              description="Contribute on your own terms."
            />
            <FeatureCard
              title="Monetize Your Skills"
              description="Earn ConciseCoin for your expertise."
            />
            <FeatureCard
              title="Portfolio Building"
              description="Add real-world projects to your resume."
            />
            <FeatureCard
              title="Community Support"
              description="Access mentorship and resources."
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="ConciseCoin helped me land my dream job at a startup while earning rewards along the way!"
              author="John Doe"
            />
            <TestimonialCard
              quote="I love the flexibility and the chance to work on cutting-edge projects."
              author="Jane Smith"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-center">
        <p className="text-gray-400">
          &copy; 2023 ConciseCoin. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/about" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="/faq" className="text-gray-400 hover:text-white">
            FAQ
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

// Reusable Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Reusable Step Card Component
const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
      <div className="text-2xl font-bold mb-4 text-purple-400">Step {step}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Reusable Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
      <p className="text-gray-400 italic">&quot;{quote}&quot;</p>
      <p className="mt-4 text-gray-300 font-semibold">- {author}</p>
    </div>
  );
};
