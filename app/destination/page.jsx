"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/destination-layout";
import placesData from "@/data/data.json"
export default function LayoutGridDemo() {
  return (
  <div> 
  <div>
    <h1 className="text-5xl flex flex-row justify-center pt-6">Gallery</h1>
  </div>
    <div className="h-screen py-10 w-full">
       
   
    <LayoutGrid cards={cardData.map((card) => ({
      ...card,
      content: <PlaceCard 
        key={card.id} 
        title={card.title} 
        description={card.description} 
        thumbnail={card.thumbnail} 
      />
    }))} />
   
  </div>
  </div>
  );
}

  
// component that will render each card data
const PlaceCard = ({ title, description, thumbnail }) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};


// card data to render
const cardData = [
  {
    id: 1,
    title: "House in the woods",
    description: "A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "House above the clouds",
    description: "Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life.",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "col-span-1",
  },
  {
    id: 3,
    title: "Greens all over",
    description: "A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life.",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "col-span-1",
  },
  {
    id: 4,
    title: "Rivers are serene",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "House in the woods",
    description: "A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "md:col-span-2",
  },
  {
    id: 6,
    title: "Greens all over",
    description: "A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life.",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "col-span-1",
  },
  {
    id: 7,
    title: "Rivers are serene",
    description: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "md:col-span-2",
  },
  

];
