export default function HomeReviews() {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <p className="italic">&quot;Great product, my skin feels amazing!&qout;</p>
            <p className="mt-2 font-bold">- Jane D.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="italic">&quot;I&apos;ve seen a noticeable difference in just weeks.&quot;</p>
            <p className="mt-2 font-bold">- John S.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="italic">&quot;The personalized formula really works for me.&quot;</p>
            <p className="mt-2 font-bold">- Emily R.</p>
          </div>
        </div>
      </section>
    )
  }