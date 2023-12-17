"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <StarIcon className="text-green-500 h-6 w-6" />
              <span className="text-green-500 uppercase text-sm font-semibold">
                Start to Success
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Access To
              <span className="text-green-500">200+</span> Courses
              <br />
              from
              <span className="text-green-500">20</span> Instructors
              <br />& Institutions
            </h1>
            <p className="text-gray-600 max-w-md">
              Unlock a world of knowledge with access to 200+ courses from 20
              expert instructors and institutions. Dive into diverse learning
              experiences and elevate your skills on our dynamic e-learning
              platform
            </p>
            <div className="relative">
              <input
                className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md"
                placeholder="What do you want to Learn?"
                type="text"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 text-white bg-green-500 rounded-md">
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="Student"
              className="h-[400px] w-[400px] rounded-full"
              height="400"
              src="/images/hero.png"
              style={{
                aspectRatio: "400/400",
                objectFit: "contain",
              }}
              width="400"
            />
            <div className="absolute top-0 right-0 bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center space-x-2">
                <StarIcon className="text-green-500 h-6 w-6" />
                <span className="text-gray-700 font-semibold">5.0 Rating</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-4 rounded-md shadow-md">
              <div className="flex items-center space-x-2">
                <VideoIcon className="text-green-500 h-6 w-6" />
                <span className="text-gray-700 font-semibold">
                  2K+ Video Course
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 p-2 rounded-full">
              <DotIcon className="text-white h-6 w-6" />
            </div>
            <div className="absolute -top-4 -left-4 bg-green-500 p-2 rounded-full">
              <DotIcon className="text-white h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
