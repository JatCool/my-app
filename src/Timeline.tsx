// src/Timeline.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImageSlider } from './ImageSlider';

export interface Moment {
  title: string;
  description: string;
  date: string;
  image?: string;
  video?: string;
  audio?: string;
  images?: string[];
}

interface TimelineProps {
  moments: Moment[];
}

const Timeline: React.FC<TimelineProps> = ({ moments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = moments.length > 1 ? ((currentIndex) / (moments.length - 1)) * 100 : 0;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current = moments[currentIndex];

  const next = () => {
    if (currentIndex < moments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    // При зміні поточного моменту спочатку зупиняємо обидва елементи
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Якщо для моменту задано відео, запускаємо його; інакше, якщо є audio – запускаємо аудіо
    if (current.video && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Safari на iOS може вимагати взаємодії користувача
      });
    } else if (!current.video && current.audio && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Можливо, потрібно взаємодія від користувача для автоплей
      });
    }
  }, [current, current.video, current.audio, currentIndex]);

  return (
    <div className="timeline-container">
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 relative">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center drop-shadow-lg z-10">
    Наша історія кохання
  </h2>
  </div>
      {/* Прогрес-бар */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <div className="character-indicator" style={{ left: `calc(${progress}% - 0px)` }}>
        👩‍❤️‍👨
        </div>
      </div>

      {/* Контент моменту з анімацією */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="moment-content"
      >
         {current.images && current.images.length > 0 && !current.video ? (
          <ImageSlider images={current.images}/>
        ) : current.image && !current.video ? (
          <img src={current.image} alt={current.title} className="moment-image" />
        ) : null}
        {current.video && (
          <video
            ref={videoRef}
            src={current.video}
            controls
            autoPlay
            playsInline
            className="moment-video"
          />
        )}
        {(!current.video && current.audio) && (
          <audio
            ref={audioRef}
            src={current.audio}
            autoPlay
            hidden
            preload="auto"
            className="moment-audio"
          />
        )}
        <h2 className="moment-title">{current.title}</h2>
        <p className="moment-date"><strong>{current.date}</strong></p>
        <p className="moment-description">{current.description}</p>
      </motion.div>

      {/* Кнопки управління */}
      <div className="controls">
        <button onClick={prev} disabled={currentIndex === 0}>
          Назад
        </button>
        <button onClick={next} disabled={currentIndex === moments.length - 1}>
          Далі
        </button>
      </div>
    </div>
  );
};

export default Timeline;
