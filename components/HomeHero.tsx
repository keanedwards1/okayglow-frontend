import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
<section className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-light-cream rounded p-2 my-10">
  <Image
    src="/hands-using-korean-skincare.webp"
    alt="hands using korean skin care"
    width={500}
    height={300}
    layout="responsive"
    className="rounded md:col-span-1 w-full h-full object-cover"
  />
<div className="md:col-span-2 flex items-center justify-center">
  <div className="flex flex-col items-start text-left max-w-md">
    <h2 className="text-4xl header-styles font-bold mb-6">Personalize your K-beauty formula</h2>
    <div className="text-lg header-styles mb-6">
      <h3 className="header-styles !font-medium mb-2">What you get:</h3>
      <ul className="list-disc pl-5">
        <li>A routine made just for you</li>
        <li>Personalized skincare product recommendations</li>
      </ul>
    </div>
    <Link
      href="/quiz"
      className="bg-peach group header-styles header-get-started text-inherit px-6 py-3 rounded-full duration-300"
      aria-label="Take the quiz to personalize your K-beauty formula">
      <span className="mr-2">Show me</span>
      <span className="inline-block transition-transform duration-200 ease-in group-hover:translate-x-1" aria-hidden="true">→</span>
    </Link>
  </div>
</div>
</section>
  );
}
