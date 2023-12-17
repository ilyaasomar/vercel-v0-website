"use client";
export default function Categories() {
  return (
    <div className="bg-white p-8 container mx-auto">
      <h2 className="text-4xl font-bold text-green-600">
        Most Popular Categories
      </h2>
      <p className="mt-2 text-gray-500">
        Lorem Ipsum has been the industry's standard dummy text ever
      </p>
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <HomeIcon className="text-green-600" />
          <span className="font-medium">Designing</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <BracketsIcon className="text-green-600" />
          <span className="font-medium">Development</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <LightbulbIcon className="text-green-600" />
          <span className="font-medium">Freelancing</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <CameraIcon className="text-green-600" />
          <span className="font-medium">Photography</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <DatabaseIcon className="text-green-600" />
          <span className="font-medium">Data Science</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <GlassesIcon className="text-green-600" />
          <span className="font-medium">Teaching</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <MegaphoneIcon className="text-green-600" />
          <span className="font-medium">Marketing</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <BriefcaseIcon className="text-green-600" />
          <span className="font-medium">Business</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <LightbulbIcon className="text-green-600" />
          <span className="font-medium">Personal Develop</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
        <div className="flex items-center space-x-2 rounded-lg border border-green-300 bg-green-50 p-4">
          <PenIcon className="text-green-600" />
          <span className="font-medium">Signing</span>
          <ArrowUpRightIcon className="text-green-600" />
        </div>
      </div>
    </div>
  );
}

function ArrowUpRightIcon(props: any) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function BracketsIcon(props: any) {
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
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CameraIcon(props: any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GlassesIcon(props: any) {
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
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LightbulbIcon(props: any) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MegaphoneIcon(props: any) {
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
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

function PenIcon(props: any) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
