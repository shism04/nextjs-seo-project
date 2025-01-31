import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Page Not Found",
  description: "Sorry, the page you're looking for is unavailable. Return to our store and continue exploring our products."
}; 

export default function NotFound() {
  return (
    <div className="m-auto space-y-5 text-center">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p>Looks like this page doesn&apos;t exist.</p>
    </div>
  );
}
