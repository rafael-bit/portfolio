'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export interface ProfileImage {
  id: number;
  src: string;
}

interface PhotoWallProps {
  profileImages: ProfileImage[];
}

export function PhotoWall({ profileImages }: PhotoWallProps) {
  const [failedIds, setFailedIds] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<ProfileImage | null>(null);

  const loadedImages = profileImages.filter((img) => !failedIds.has(img.id));

  const handleError = (id: number) => {
    setFailedIds((prev) => new Set(prev).add(id));
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Faixa que rola sozinha para a esquerda */}
      <div className="flex-1 min-h-0 flex items-center overflow-hidden">
        <div className="flex gap-6 py-4 animate-scroll-left">
          {[...loadedImages, ...loadedImages].map((img, index) => (
            <motion.button
              key={`${img.id}-${index}`}
              type="button"
              onClick={() => setSelectedImage(img)}
              className="relative flex-shrink-0 w-[340px] h-[240px] sm:w-[380px] sm:h-[260px] rounded-lg overflow-hidden bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={img.src}
                alt={`Gallery ${img.id}`}
                fill
                className="object-cover"
                sizes="380px"
                onError={() => handleError(img.id)}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full aspect-video bg-gray-900">
                <Image
                  src={selectedImage.src}
                  alt={`Gallery ${selectedImage.id}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
