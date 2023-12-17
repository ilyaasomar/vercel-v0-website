/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8n1UQPTwXa7
 */
import { Button } from "@/components/ui/button";

export default function SocailProof() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mt-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Leading Companies
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Join the community of professionals learning with us.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 2xl:grid-cols-7 items-center gap-x-24 justify-between">
          <img
            alt="Company Logo 1"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/google.svg"
            width="140"
          />
          <img
            alt="Company Logo 2"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/microsoft.svg"
            width="140"
          />
          <img
            alt="Company Logo 3"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/amazon.svg"
            width="140"
          />
          <img
            alt="Company Logo 4"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/youtube.svg"
            width="140"
          />
          <img
            alt="Company Logo 5"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/linkedin.svg"
            width="140"
          />
          <img
            alt="Company Logo 6"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/whatsapp.svg"
            width="140"
          />{" "}
          <img
            alt="Company Logo 7"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/mongodb.svg"
            width="140"
          />{" "}
          <img
            alt="Company Logo 8"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/netflix.svg"
            width="140"
          />{" "}
          <img
            alt="Company Logo 9"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/paypal.svg"
            width="140"
          />
          <img
            alt="Company Logo 10"
            className="overflow-hidden rounded-lg object-contain object-center"
            height="70"
            src="/images/svg/facebook.svg"
            width="140"
          />
        </div>
        <div className="mt-8">
          <Button className="mx-auto" variant="outline">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
