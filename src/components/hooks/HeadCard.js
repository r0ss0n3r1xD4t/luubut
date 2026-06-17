import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import dc from "../lib/DataConfig";
import { useTheme } from '@mui/material/styles';
import ImageModal from "./ImageModal";

const HeadCard = ({ show, setShow, setData, available, showLetter, setShowLetter }) => {
  const theme = useTheme();

  const handleStart = () => {
    setShow(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleReadLetter = () => {
    setShowLetter(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <Card
      className="card-hover"
      sx={{
        maxWidth: "100%",
        marginBottom: "20px",
        display: show ? "none" : "block",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 4px 12px rgba(0,0,0,0.5)'
          : '0 4px 12px rgba(0,0,0,0.1)',
        '& .MuiCardContent-root': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        },
        '& .MuiCardActions-root': {
          backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        },
        '& .MuiTypography-root': {
          color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
        },
        '& .MuiTypography-colorTextSecondary': {
          color: theme.palette.mode === 'dark' ? '#aaaaaa' : 'text.secondary',
        }
      }}
    >
      <ImageModal
        src={dc.headCard.image}
        alt="green iguana"
        triggerSx={{ height: { xs: 280, sm: 400 }, objectFit: "cover" }}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div"
          sx={{
            color: theme.palette.mode === 'dark' ? '#ffffff' : 'inherit',
          }}
        >
          {dc.headCard.title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{
            color: theme.palette.mode === 'dark' ? '#aaaaaa' : 'text.secondary',
          }}
        >
          {dc.headCard.content}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{
            color: theme.palette.mode === 'dark' ? '#aaaaaa' : 'text.secondary',
          }}
        >
          {dc.headCard.content2}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{
            color: theme.palette.mode === 'dark' ? '#aaaaaa' : 'text.secondary',
          }}
        >
          {dc.headCard.content3}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={handleStart}
          disabled={showLetter}
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#4a4a4a' : 'primary.main',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
            '&:hover': {
              bgcolor: theme.palette.mode === 'dark' ? '#5a5a5a' : 'primary.dark',
            },
            '&:disabled': {
              bgcolor: theme.palette.mode === 'dark' ? '#3a3a3a' : 'rgba(0, 0, 0, 0.12)',
              color: theme.palette.mode === 'dark' ? '#8a8a8a' : 'rgba(0, 0, 0, 0.26)'
            }
          }}
        >
          {dc.headCard.button1}
        </Button>
        <Button
          variant="contained"
          onClick={handleReadLetter}
          disabled={available}
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? '#4a4a4a' : 'primary.main',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
            '&:hover': {
              bgcolor: theme.palette.mode === 'dark' ? '#5a5a5a' : 'primary.dark',
            },
            '&:disabled': {
              bgcolor: theme.palette.mode === 'dark' ? '#3a3a3a' : 'rgba(0, 0, 0, 0.12)',
              color: theme.palette.mode === 'dark' ? '#8a8a8a' : 'rgba(0, 0, 0, 0.26)'
            }
          }}
        >
          {dc.headCard.button2}
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeadCard;