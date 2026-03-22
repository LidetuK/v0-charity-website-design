"use client"

import Image from "next/image"

const galleryImages = [
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097006/ANYA_22_vn2sau.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774097005/ANYA_23_o5sfoz.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096989/ANYA_02_binigl.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096519/photo_2026-03-21_08-33-15_fhjib1.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096518/photo_2026-03-21_08-33-26_smfia2.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096514/photo_2026-03-21_08-33-19_pvsgih.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096503/photo_2026-03-21_08-33-40_nwe0jl.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096499/photo_2026-03-21_08-33-22_kwyufb.jpg",
  "https://res.cloudinary.com/dmfza46nt/image/upload/v1774096484/photo_2026-03-21_08-33-33_fexubd.jpg",
]

export function PhotoGallerySection() {
  return (
    <section id="photo-gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            Our Work in <span className="text-primary">Pictures</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <Image
                src={src}
                alt={`ANYA impact photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
