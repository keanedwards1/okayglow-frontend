export default function HomeSustainability() {
  return (
    <section className="my-8 bg-cream p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-cormorant font-bold mb-6 text-dark-brown">Our Commitment to Sustainability</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background p-4 rounded-md border border-light-gray">
          <h3 className="text-xl font-quicksand font-semibold mb-3 text-brown">Eco-Friendly Packaging</h3>
          <p className="font-source-sans text-dark-brown">Our products come in recyclable and biodegradable packaging to reduce environmental impact.</p>
        </div>
        <div className="bg-background p-4 rounded-md border border-light-gray">
          <h3 className="text-xl font-quicksand font-semibold mb-3 text-brown">Ethical Sourcing</h3>
          <p className="font-source-sans text-dark-brown">We carefully select ingredients from sustainable sources and work with ethical suppliers.</p>
        </div>
      </div>
      <div className="mt-6 bg-light-pink p-4 rounded-md">
        <p className="font-quicksand font-bold text-dark-brown text-center">Join us in our mission for a greener future!</p>
      </div>
    </section>
  )
}