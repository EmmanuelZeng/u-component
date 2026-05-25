
import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button.jsx";

const MediaPlayerControls = ({ isPlaying, onPlayPause, onPrevious, onNext, progress, onSeek, className }) => (
  <div className={`flex flex-col gap-4 rounded-3xl border border-gray2 bg-white p-4 ${className}`}>
    <div className="flex items-center justify-center gap-3">
      <Button type="secondary" size="sm" onClick={onPrevious} aria-label="Précédent">
        ◀
      </Button>
      <Button type="primary" size="md" onClick={onPlayPause} aria-label={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button type="secondary" size="sm" onClick={onNext} aria-label="Suivant">
        ▶
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(event) => onSeek(Number(event.target.value))}
        className="w-full"
      />
      <span className="text-xs text-gray4">{progress}%</span>
    </div>
  </div>
);

MediaPlayerControls.propTypes = {
  isPlaying: PropTypes.bool,
  onPlayPause: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  progress: PropTypes.number,
  onSeek: PropTypes.func,
  className: PropTypes.string,
};

MediaPlayerControls.defaultProps = {
  isPlaying: false,
  onPlayPause: () => {},
  onPrevious: () => {},
  onNext: () => {},
  progress: 0,
  onSeek: () => {},
  className: "",
};

export default MediaPlayerControls;
