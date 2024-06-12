/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image";
export function Destinations() {
  return (
    (<div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Discover Our Top Travel Destinations</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl">
          Explore the world's most breathtaking locations.
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 1"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Paris, France</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Explore the City of Light with its iconic landmarks, charming streets, and vibrant culture.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 2"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Bali, Indonesia</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Discover the island's stunning beaches, lush tropical landscapes, and rich cultural heritage.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 3"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">New York City, USA</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Experience the energy and diversity of the Big Apple, from iconic landmarks to vibrant neighborhoods.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 4"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Tokyo, Japan</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Immerse yourself in the unique blend of modern and traditional Japanese culture.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 5"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Santorini, Greece</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Discover the iconic white-washed buildings, stunning sunsets, and serene beaches of this Greek island.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 6"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cape Town, South Africa</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Explore the stunning natural beauty of Cape Town, from Table Mountain to the vibrant waterfront.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 7"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Reykjavik, Iceland</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Discover the natural wonders of Iceland, from the stunning Northern Lights to the geothermal hot
                springs.
              </p>
            </div>
          </Link>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="#">
            <Image
              alt="Destination 8"
              className="w-full h-60 object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Machu Picchu, Peru</h3>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                Explore the ancient Inca citadel of Machu Picchu, one of the New Seven Wonders of the World.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16">
        <Link
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          href="#">
          Explore More Destinations
        </Link>
      </div>
    </div>)
  );
}
