import React, { useState, forwardRef } from 'react';
import { FaPlayCircle, FaPauseCircle, FaVolumeMute, FaVolumeUp, FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import { formatTime, formatHumanReadTime } from '../../helpers/formatTime';
import DropdownMenu from '../dropdown-menu/dropdown-menu';
import './AudioPlayer.css'; // Use PascalCase for component file names

const AudioPlayer = forwardRef((props, ref) => {
  const { src, transcript } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [mediaTime, setMediaTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? ref.current.pause() : ref.current.play();
  }

  // Other functions and JSX code remain the same...

  return (
    <div className="audio-player">
      <button className="audio-player__play-button" onClick={togglePlaying}>
        {isPlaying ? (
          <>
            <span className='visually-hidden'>Pause</span>
            <FaPauseCircle aria-hidden='true' />
          </>
        ) : (
          <>
            <span className='visually-hidden'>Play</span>
            <FaPlayCircle aria-hidden='true' />
          </>
        )}
      </button>
      {/* Other UI elements here... */}
      <audio
        ref={ref}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={onVolumeChange}
        src={src}
      />
      <div className="audio-player__transcript">{transcript}</div>
    </div>
  );
});

export default AudioPlayer;