/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
 
import Link from "next/link";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import placesData from '@/data/data.json'
export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <PlaneIcon className="h-6 w-6" />
          <span className="sr-only">Wanderlust Travels</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/destination">
            Destinations
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Tours
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[70vh] relative">
          <Image
            alt="Hero Image"
            className="w-full h-full object-cover"
            height="700"
            src="/static/images/main.jpg"
            style={{
              aspectRatio: "1920/700",
              objectFit: "cover",
            }}
            width="1920" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
              Discover the World with Wanderlust
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-[700px]">
              Explore breathtaking destinations, immerse yourself in local cultures, and create unforgettable memories
              with our curated travel experiences.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
              href="#">
              Book Your Adventure
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Destinations</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  
                  Explore the world's most breathtaking locations and create unforgettable memories.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                
                {placesData.places.map((place, id) => ( // Access the array within the object
        <div key={id} className="group relative overflow-hidden rounded-lg">
          <Image
            alt={place}
            className="w-full h-full object-cover transition-all group-hover:scale-105"
            height="300"
            src={place.path}
            style={{
               
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 flex items-end p-4">
            <h3 className="text-white text-lg font-bold">{place.name}</h3>
          </div>
          </div>
        ))}
               
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Tours</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the world's most breathtaking destinations with our curated travel experiences.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <Image
                  alt="Tour 1"
                  className="w-full h-[200px] object-cover rounded-t-lg"
                  height="300"
                  src="/static/images/bhimtal.jpg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Bhimtal</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Explore the Serenity and Calmness of Bhimtal.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-medium">$2,499 per person</span>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary-500 px-4 text-sm font-medium text-gray-400 shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#">
                      Book Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <Image
                  alt="Tour 2"
                  className="w-full h-[200px] object-cover rounded-t-lg"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Santorini Sunset Cruise</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sail the Aegean Sea and witness the breathtaking Santorini sunset.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-medium">$799 per person</span>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#">
                      Book Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <Image
                  alt="Tour 3"
                  className="w-full h-[200px] object-cover rounded-t-lg"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Bali Yoga Retreat</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Rejuvenate your mind and body in the serene landscapes of Bali.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-medium">$1,499 per person</span>
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#">
                      Book Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied customers about their unforgettable experiences with Wanderlust Travels.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <h4 className="text-lg font-medium">John Doe</h4>
                      <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The team at Wanderlust Travels made our trip to Machu\n Picchu an unforgettable experience. The
                    attention to detail\n and personalized service was truly exceptional."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <h4 className="text-lg font-medium">Jane Smith</h4>
                      <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I've been using Wanderlust Travels for all my travel needs,\n and they never disappoint. The
                    variety of tour options and\n the seamless booking process make planning my adventures a\n breeze."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-start">
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <h4 className="text-lg font-medium">Michael Johnson</h4>
                      <p className="text-gray-500 dark:text-gray-400">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Wanderlust Travels has exceeded my expectations time and\n time again. The team's expertise and
                    attention to detail\n have made my travel experiences truly memorable."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wanderlust Travels. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function PlaneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>)
  );
}
