'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 text-center px-6">
        <p className="text-neutral-500 tracking-[0.5em] uppercase text-xs mb-6">
          PRIVATE READING
        </p>

        <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight">
          不要回头
        </h1>

        <Link href="/archive">
          <button className="border border-neutral-700 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500">
            进入阅读
          </button>
        </Link>
      </div>
    </main>
  )
}