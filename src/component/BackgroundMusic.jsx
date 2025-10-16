import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [savedTime, setSavedTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1.0;

      audio.currentTime = savedTime;
      audio.play().catch((err) => console.warn("Autoplay blocked:", err));
    }

    return () => {
      if (audioRef.current) {
        setSavedTime(audioRef.current.currentTime);
        audioRef.current.pause();
      }
    };
  }, []);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) audio.pause();
    else audio.play().catch((err) => console.warn("Play failed:", err));
    setPlaying(!playing);
  };

  return (
    <div>
      <audio ref={audioRef} src="/background.mp3" loop />
      <button onClick={handleToggle} className="w-[45px] h-[45px] bg-none border-none text-white">
        {playing ? (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="51" height="51" stroke="white" />
            <path d="M26 18C23.8783 18 21.8434 18.8429 20.3431 20.3431C18.8429 21.8434 18 23.8783 18 26H21C21.5304 26 22.0391 26.2107 22.4142 26.5858C22.7893 26.9609 23 27.4696 23 28V33C23 33.5304 22.7893 34.0391 22.4142 34.4142C22.0391 34.7893 21.5304 35 21 35H18C17.4696 35 16.9609 34.7893 16.5858 34.4142C16.2107 34.0391 16 33.5304 16 33V26C16 20.477 20.477 16 26 16C31.523 16 36 20.477 36 26V33C36 33.5304 35.7893 34.0391 35.4142 34.4142C35.0391 34.7893 34.5304 35 34 35H31C30.4696 35 29.9609 34.7893 29.5858 34.4142C29.2107 34.0391 29 33.5304 29 33V28C29 27.4696 29.2107 26.9609 29.5858 26.5858C29.9609 26.2107 30.4696 26 31 26H34C34 23.8783 33.1571 21.8434 31.6569 20.3431C30.1566 18.8429 28.1217 18 26 18ZM18 28V33H21V28H18ZM31 28V33H34V28H31Z" fill="white" />
          </svg>
        ) : (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="51" height="51" stroke="white" />
            <rect x="18" y="26" width="3" height="7" fill="white" />
            <rect x="31" y="26" width="3" height="7" fill="white" />
            <path d="M26 18C23.878 18 21.843 18.843 20.343 20.343C18.843 21.843 18 23.878 18 26H21C21.53 26 22.039 26.211 22.414 26.586C22.789 26.961 23 27.47 23 28V33C23 33.53 22.789 34.039 22.414 34.414C22.039 34.789 21.53 35 21 35H18C17.47 35 16.961 34.789 16.586 34.414C16.211 34.039 16 33.53 16 33V26C16 20.477 20.477 16 26 16C31.523 16 36 20.477 36 26V33C36 33.53 35.789 34.039 35.414 34.414C35.039 34.789 34.53 35 34 35H31C30.47 35 29.961 34.789 29.586 34.414C29.211 34.039 29 33.53 29 33V28C29 27.47 29.211 26.961 29.586 26.586C29.961 26.211 30.47 26 31 26H34C34 23.878 33.157 21.843 31.657 20.343C30.157 18.843 28.122 18 26 18Z" fill="white" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;
