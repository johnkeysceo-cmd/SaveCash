import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to x position for marquee lines
  const line1X = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section
      ref={sectionRef}
      id="marquee"
      data-animate="marquee"
      className="relative flex min-h-[40svh] flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* Container */}
      <div className="relative flex w-[94%] max-w-[1620px] min-w-[20vw] flex-col items-center justify-center gap-6">
        {/* Scroller Container */}
        <div className="flex w-full flex-col items-center justify-center gap-0 overflow-clip font-['Anton'] text-[20vw] leading-[1em]">
          {/* First Marquee Line */}
          <div
            data-marquee="line"
            className="flex items-center bg-[#270f03] text-[#ffe9cf]"
          >
            <motion.div
              style={{ x: line1X }}
              className="flex items-center"
            >
              <div className="whitespace-nowrap text-uppercase">
                SCROLLTRIGGER
              </div>
              <img
                src="https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/6808d2e23eb6704bbd0ebdcb_Image_5.png"
                alt=""
                className="h-full w-auto object-cover"
                loading="lazy"
              />
              <div className="whitespace-nowrap text-uppercase"> MARQUEE</div>
            </motion.div>
          </div>

          {/* Second Marquee Line */}
          <div
            data-marquee="line"
            className="flex items-center bg-[#270f03] text-[#ffe9cf]"
            style={{ transform: "translate(0px, -30%) rotate(6deg)" }}
          >
            <motion.div
              style={{ x: line2X }}
              className="flex items-center"
            >
              <div className="whitespace-nowrap text-uppercase"> MARQUEE</div>
              <img
                src="https://cdn.prod.website-files.com/67fea42b19018db93e3fe132/6808d2e284cb6fefe428dae6_image_6.png"
                alt=""
                className="h-full w-auto object-cover"
                loading="lazy"
              />
              <div className="whitespace-nowrap text-uppercase">
                SCROLLTRIGGER
              </div>
            </motion.div>
          </div>
        </div>

        {/* Explainer Component */}
        <div className="relative z-[5] mt-12 flex h-40 w-[94%] items-end justify-end">
          <div
            data-css="explainer"
            data-module="explainer"
            className="absolute right-0 top-0 flex flex-col rounded-md bg-[#fff5e6] p-3"
          >
            <label className="relative mb-0 cursor-pointer pb-3 pt-1">
              <input
                type="checkbox"
                className="absolute opacity-0"
                defaultChecked
              />
              <span className="relative z-[2] flex items-center justify-between">
                <div className="text-sm font-semibold">Marquees forever</div>
                <div className="relative flex aspect-square w-[1em] items-center justify-center rounded-full border border-[#270f03]">
                  <div className="absolute h-1/2 w-[1px] bg-[#270f03]" />
                  <div className="absolute h-[1px] w-1/2 bg-[#270f03]" />
                </div>
              </span>
            </label>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden">
                <p className="max-w-[25ch] py-1 text-sm">
                  Loop endlessly. Stack images, text, or both. Marquees give
                  rhythm to your page without needing a single click
                </p>
              </div>
              <div className="hidden sm:block">
                <button
                  data-module="copybtn"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-[#270f03]/20 bg-transparent px-2.5 py-1.5 text-sm transition-colors hover:bg-[#69e05f]"
                >
                  <span>Copy this</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 9 11"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 1.5H1V6.5H5V1.5ZM0 0.5V7.5H6V0.5H0Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 8.757V10.5H9V3.5H7.42V4.5H8V9.5H4V8.757H3Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

