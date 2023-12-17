"use client";

import { CoursesDetial } from "@/constant";
import Image from "next/image";

export default function Courses() {
  return (
    <div className="bg-white p-8 container mx-auto mt-24">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Our Featured Courses</h2>
        <p className="text-sm text-green-500">350+ Latest Courses</p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CoursesDetial.map((course) => (
          <div className="bg-gray-100 p-4 rounded-lg" key={course.id}>
            <Image
              alt="Course thumbnail"
              className="w-full h-auto rounded-lg"
              height="200"
              src={course.image}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="flex items-center">
                  <BookmarkIcon className="h-4 w-4" />
                  <span className="ml-1">{course.lessons}</span>
                </span>
                <span className="flex items-center">
                  <ClockIcon className="h-4 w-4" />
                  <span className="ml-1">{course.hours}</span>
                </span>
                <span className="flex items-center">
                  <UsersIcon className="h-4 w-4" />
                  <span className="ml-1">{course.users}</span>
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
              <div className="flex items-center mt-2">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="ml-2 text-sm text-gray-600">(06)</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium">{course.teacher}</span>
                <span className="text-lg font-semibold">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookmarkIcon(props: any) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
