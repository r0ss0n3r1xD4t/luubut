import React, { useState, useRef } from 'react';
import {
  Card,
  Typography,
  Box,
  Button,
  IconButton,
  Collapse,
  Slider,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  QueueMusic // Icon cho playlist
} from '@mui/icons-material';
import audioFile from './nhac.mp3'; // Thêm import file nhạc
import ImageModal from './ImageModal';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / duration) * 100 || 0);
    }
  };

  const handleProgressChange = (value) => {
    const newProgress = Number(value);
    setProgress(newProgress);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setPlaying(!playing);
    }
  };

  const handlePrev = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || 0;
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 10,
        duration
      );
    }
  };

  return (
    <>
      <Card
        sx={{
          mb: 3,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 4,
        }}
      >
        {/* Ảnh bìa */}
        <Box sx={{ width: '100%' }}>
          <ImageModal
            src={process.env.PUBLIC_URL + "/music-cover.jpg"}
            alt="Ảnh bìa bài hát"
            triggerSx={{ height: { xs: 200, sm: 260 }, objectFit: 'cover' }}
          />
        </Box>

        {/* Thông tin & điều khiển */}
        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 2, md: 3 },
            gap: 0.5,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            title="Mình cầm băng đóng nhau"
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: 1.2,
            }}
          >
            Mình cầm băng đóng nhau
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            A12-K4 · PHC Quốc Oai, Hà Nội
          </Typography>
          <Typography variant="caption" color="text.secondary">
            @datxmilanista
          </Typography>

          {/* Thanh tiến trình */}
          <Slider
            aria-label="Tiến trình bài hát"
            value={progress}
            onChange={(e, v) => handleProgressChange(v)}
            size="small"
            sx={{ mt: 1.5, mb: 0.5 }}
          />

          {/* Điều khiển */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
            <IconButton onClick={handlePrev} size="small">
              <SkipPrevious />
            </IconButton>
            <IconButton
              onClick={handlePlayPause}
              sx={{
                color: '#fff',
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark', transform: 'scale(1.06)' },
                transition: 'all 0.2s ease',
              }}
            >
              {playing ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={handleNext} size="small">
              <SkipNext />
            </IconButton>
            <IconButton onClick={() => setLiked(!liked)} size="small">
              {liked ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />

            <Button variant="text" size="small" onClick={() => setShowLyrics(!showLyrics)}>
              {showLyrics ? 'Ẩn lời' : 'Lời bài hát'}
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<QueueMusic />}
              onClick={() => window.open("https://open.spotify.com/playlist/2ByAJQseXXgs4I0gsjCrko?si=647f46a8e72b45ac", "_blank")}
            >
              Playlist
            </Button>
          </Box>

          {/* Lời bài hát */}
          <Collapse in={showLyrics}>
            <Box sx={{ mt: 1.5, '& .verse': { mb: 2 } }}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  whiteSpace: 'pre-line',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  color: 'text.secondary',
                }}
              >
                <div className="verse">
                  Mình cùng nhau đóng băng trước giây phút chúng ta chia xa
                  Thời học sinh lướt qua nhanh như giấc mơ không trở lại
                  Mình phải trải qua
                  Bạn đừng khóc mà
                  Bọn mình sẽ lớn, sẽ đi trên những con đường mới.
                </div>

                <div className="verse">
                  Là chưa hôm nào đến lớp sớm như hôm nay
                  Trời nắng nhẹ, êm đềm, gió lay
                  Là cảm xúc khó nói chỉ biết đứng ngẩn ngơ
                  Níu tà áo dài bay bay
                </div>
              </Typography>
            </Box>
          </Collapse>
        </Box>
      </Card>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      />
    </>
  );
};

export default MusicPlayer;
