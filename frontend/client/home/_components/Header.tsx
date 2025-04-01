"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Foodie</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Нүүр</Link></li>
            <li><Link href="/menu">Хоолны цэс</Link></li>
            <li><Link href="/about">Бидний тухай</Link></li>
            <li><Link href="/contact">Холбоо барих</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
