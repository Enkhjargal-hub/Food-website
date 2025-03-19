export default function Hero() {
    return (
      <section className="text-center py-20 bg-[url('/food-banner.jpg')] bg-cover bg-center text-white">
        <div className="bg-black bg-opacity-50 p-10 inline-block rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Амттай хоолнууд эндээс</h1>
          <p className="text-lg">Шилдэг тогоочдын бэлтгэсэн онцгой хоолнууд</p>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
            Цэс харах
          </button>
        </div>
      </section>
    );
  }
  