"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ButtonMain from "./components/button";
import Create from "./components/Create";

export default function Home() {
  const textIndex = useMotionValue(0);
  const texts = ["SOFTWARE ENGINEER", "TEACHING ASSISTANT", "AI ENTHUSIAST"];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 20, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <nav className="md:flex justify-center hidden bg-black ">
        <div className="flex flex-row gap-5 justify-center mt-5 py-5 bg-black text-white opacity-55 px-20 rounded-xl fixed z-[100] ">
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          >
            <motion.div className="text-xl mx-5 text-orange-20">
              Home
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          >
            <motion.div className="text-xl mx-5 text-orange-20">
              My Story
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
          >
            <motion.div className="text-xl mx-5 text-orange-20">
              My Projects
            </motion.div>
          </motion.div>
        </div>
      </nav>

      {/* home section */}
      <section className="bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://wallpaperwaifu.com/wp-content/uploads/2021/01/japan-street-fall-city-thumb.jpg" // Replace with your video file path
          ></img>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-8 absolute inset-0 items-center md:mx-40 mx-5 md:text-left text-center justify-between font-[Gorestka] text-white">
          <div className="flex flex-col gap-2">
            <h1 className="md:text-5xl text-3xl text-orange-20 md:mt-0 mt-10">
              Hey There
            </h1>
            <h1 className="hidden md:flex md:text-5xl text-3xl text-orange-20">
              This is{"   "}
              <span
                style={{
                  fontSize: "3rem",
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c0ff, 0 0 20px #00c0ff, 0 0 30px #00c0ff, 0 0 40px #00c0ff, 0 0 55px #00c0ff, 0 0 75px #00c0ff",
                }}
              >
                {"  "}
                Washikur Rahman!
              </span>
            </h1>
            <h1 className="md:hidden md:text-5xl text-3xl text-orange-20">
              This is{"   "}
              <span
                style={{
                  fontSize: "1.4rem",
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c0ff, 0 0 20px #00c0ff, 0 0 30px #00c0ff, 0 0 40px #00c0ff, 0 0 55px #00c0ff, 0 0 75px #00c0ff",
                }}
              >
                {"  "}
                Washikur Rahman!
              </span>
            </h1>

            <div className="md:text-3xl text-2xl text-[#FFA500] text-normal">
              <motion.span className="inline">{displayText}</motion.span>;
            </div>

            <h1 className="md:text-2xl text-sm md:text-left text-center text-orange-20 md:w-[560px] mt-5">
              So, I am currently working as a Software Engineer at{" "}
              <a href="https://www.robowaylabs.com/">
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#ffff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c0ff, 0 0 20px #00c0ff, 0 0 30px #00c0ff, 0 0 40px #00c0ff, 0 0 55px #00c0ff, 0 0 75px #00c0ff",
                  }}
                >
                  ROBOWAY LABS
                </span>
              </a>{" "}
              and a Teaching Assistant at the department of Computer Science and
              Engineering,{" "}
              <a href="https://www.bracu.ac.bd/">
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#fff",
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c0ff, 0 0 20px #00c0ff, 0 0 30px #00c0ff, 0 0 40px #00c0ff, 0 0 55px #00c0ff, 0 0 75px #00c0ff",
                  }}
                >
                  BRAC University
                </span>
              </a>
              . Feel free to reach out to. I am looking forward to connecting
              with like minded people.
            </h1>
          </div>
          <div className="flex flex-col gap-2 md:items-start items-center">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <img
                className=" shadow-lg drop-shadow-xl shadow-cyan-500 rounded-lg"
                src="https://yamin-raad.vercel.app/_next/static/media/stack.22170140.svg"
                alt="Stack"
              />
            </motion.div>
            <motion.button
              className="md:mt-8 mt-4 rounded-full bg-gray-800 px-10 py-3 border border-cyan-500"
              whileHover={{ opacity: 0.8, scale: 1.1 }}
              // Adjust the opacity when hovering
              whileTap={{ scale: 0.95 }} // Adjust the scale when clicking
            >
              Resume
            </motion.button>
            <h1 className="md:text-2xl text-lg text-orange-50 mt-5">
              Connect with me:{" "}
            </h1>
            <div className="flex flex-row gap-10">
              <a href="https://www.facebook.com/mahin.khan.1238">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path>
                      </g>
                    </g>
                  </svg>
                </motion.div>
              </a>
              <a href="https://www.linkedin.com/in/washikur-rahman/">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                      </g>
                    </g>
                  </svg>
                </motion.div>
              </a>
              <a href="https://github.com/wasikurosaki">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="60"
                    height="60"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path>
                      </g>
                    </g>
                  </svg>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 mt-[44rem]">
        <div className="absolute">
          <img
            className="w-full h-full object-cover"
            src="https://moewalls.com/wp-content/uploads/2023/06/chill-mario-pixel-thumb.jpg" // Replace with your video file path
          ></img>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        {/* <div className="flex md:flex-row flex-col md:gap-10 gap-8 absolute inset-0 items-center md:mx-40 mx-5 md:text-left text-center justify-between font-[Gorestka] text-white text-['Gorestka']">
          <div className="mt-40">
            <div className=" mt-[40rem] border-4 w-[30rem] h-[40rem] text-center flex flex-col rounded-2xl shadow-xl shadow-cyan-500">
              <h1
                style={{
                  fontSize: "3rem",
                  color: "#fff",
                  textShadow:
                    "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00c0ff, 0 0 20px #00c0ff, 0 0 30px #00c0ff, 0 0 40px #00c0ff, 0 0 55px #00c0ff, 0 0 75px #00c0ff",
                }}
              >
                My Story!
              </h1>

              <p className="md:text-2xl text-sm md:text-left text-center text-orange-20 mt-10 mx-5">
                asdasdas
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-[20rem] gap-20">
            <ButtonMain name="Eventizer" vari="outline" pathToRoute="about" />
            <Create />
          </div>
        </div> */}
      </section>
    </>
  );
}
