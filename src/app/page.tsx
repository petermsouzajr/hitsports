import React from 'react';
import Image from 'next/image'; // If you plan to use optimized images

// Consider using react-icons if you want icons for features/benefits
// import { FaCheckCircle, FaDollarSign, FaLock } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200">
      {/* --- Hero Section --- */}
      <section className="w-full h-[70vh] sm:h-[80vh] md:h-screen relative flex items-center justify-center text-center overflow-hidden px-4">
        {/* Background Image/Video Placeholder - Replace with actual asset */}
        {/* Example using a dark, abstract football field image */}
        <div className="absolute inset-0 z-0 opacity-80">
          <Image
            src="/images/football-background.jpg" // ** Replace with your image path **
            alt="Dark football field background"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority // Load hero image faster
          />
          {/* Add a dark overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 drop-shadow-md">
            I Hit It Sports
          </h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light text-gray-300">
            Stop Guessing. Start Winning. Get Exclusive NFL & College Football
            Picks From The Undisclosed Pro.
          </p>
          <a
            href="#signup" // Link to your sign-up section
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Today's Pick
          </a>
        </div>
      </section>

      {/* --- What It Is Section --- */}
      <section
        id="what-it-is"
        className="py-16 sm:py-24 px-4 w-full max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-500">
          Dominate Football Season
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Tired of losing bets and bragging rights? We deliver **daily winning
          picks** for NFL and College Football straight to your phone or email,
          crafted by the most successful (and secret) handicapper in the game.
          No filler, just actionable insights designed to make you win.
        </p>
        {/* Static Image Placeholder (Replaced Video) */}
        <div className="aspect-video bg-gray-800 rounded-lg shadow-xl mx-auto max-w-2xl border border-gray-700 overflow-hidden relative">
          <Image
            src="/images/promo-placeholder.jpg" // ** Replace with your image path **
            alt="Promotional visual for I Hit It Sports picks"
            layout="fill"
            objectFit="cover"
            className="opacity-90" // Adjust opacity as needed
          />
        </div>
      </section>

      {/* --- Why It's Good Section --- */}
      <section
        id="why-its-good"
        className="py-16 sm:py-24 px-4 w-full bg-gray-900/50 border-y border-gray-700"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-500">
            The Insider Advantage
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our picks come from a legend – a handicapper who&apos;s made
            millions betting on sports but values his anonymity. He can&apos;t
            show his face, but he can show you how to win. This isn&apos;t luck;
            it&apos;s decades of expertise translated into your daily edge.
            It&apos;s time to **HIT IT**.
          </p>
          {/* Feature Icons/Bullets (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md">
              {/* <FaLock size={30} className="mx-auto mb-4 text-yellow-500" /> */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                Exclusive Access
              </h3>
              <p className="text-gray-400">
                Picks unavailable anywhere else, from a source the public
                can&apos;t reach.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md">
              {/* <FaCheckCircle size={30} className="mx-auto mb-4 text-yellow-500" /> */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                Proven Track Record
              </h3>
              <p className="text-gray-400">
                Built on a history of consistent, significant wins (millions
                made).
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-md">
              {/* <FaDollarSign size={30} className="mx-auto mb-4 text-yellow-500" /> */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                Win More Bets
              </h3>
              <p className="text-gray-400">
                Stop guessing, start collecting. Impress your friends, build
                your bankroll.
              </p>
            </div>
          </div>
          {/* Static Image Placeholder 2 (Replaced Video) */}
          <div className="mt-12 aspect-video bg-gray-800 rounded-lg shadow-xl mx-auto max-w-2xl border border-gray-700 overflow-hidden relative">
            <Image
              src="/images/feature-placeholder.jpg" // ** Replace with your image path **
              alt="Visual representing winning or insider advantage"
              layout="fill"
              objectFit="cover"
              className="opacity-90" // Adjust opacity as needed
            />
          </div>
        </div>
      </section>

      {/* --- Sign Up Section --- */}
      <section
        id="signup"
        className="py-16 sm:py-24 px-4 w-full max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
          Ready to Hit It?
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Get Full Season Access to every pick. Join the Winners&apos; Circle.
        </p>

        {/* Pricing Option Placeholder - Keep it simple for splash */}
        <div className="bg-gray-800 border border-yellow-500/50 rounded-lg shadow-xl p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-white uppercase">
            Full Season Pass
          </h3>
          <p className="text-4xl font-bold mb-6 text-yellow-500">$XXX</p>{' '}
          {/* ** Replace XXX with your price ** */}
          <ul className="text-left space-y-2 mb-8 text-gray-300 list-disc list-inside">
            <li>Daily NFL & College Picks</li>
            <li>Delivered via Email/Text</li>
            <li>Exclusive Member Contests</li>
            <li>Access to the &quot;Secret Weapon&quot;</li>
          </ul>
          <a
            href="/#signup" // ** Link to your actual payment page **
            className="inline-block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join The Club Now
          </a>
        </div>
      </section>

      {/* --- Contests Section (Optional) --- */}
      <section
        id="contests"
        className="py-12 sm:py-16 px-4 w-full max-w-4xl text-center bg-gray-900/30"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-500">
          Member Perks
        </h3>
        <p className="text-md text-gray-400 mb-6">
          Subscribers get exclusive entry into prize giveaways – signed gear,
          cash prizes, and more!
        </p>
        {/* Graphic for prizes */}
        <div className="mt-6">
          <Image
            src="/images/contest-prizes.jpg" // ** Replace with your image path **
            alt="Examples of member contest prizes like signed gear or cash"
            width={320} // Example width, adjust as needed
            height={180} // Example height, adjust as needed
            className="mx-auto rounded-lg shadow-md border border-gray-700"
          />
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full py-6 px-4 text-center border-t border-gray-700">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ihititsports.com. All rights reserved.
          Bet Responsibly.
        </p>
        {/* Add links to Terms & Privacy Policy here */}
        <div className="mt-2 space-x-4">
          <a
            href="/terms"
            className="text-xs text-gray-600 hover:text-yellow-500"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="text-xs text-gray-600 hover:text-yellow-500"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
