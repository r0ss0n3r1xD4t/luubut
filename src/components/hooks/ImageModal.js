import React, { useState } from "react";
import { Modal, Box, Fade, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ImageModal = ({ src, alt, className, triggerSx }) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setOpen(true)}
        className={className}
        sx={{
          display: "block",
          width: "100%",
          cursor: "pointer",
          ...triggerSx,
        }}
      />
      <Modal open={open} onClose={close} closeAfterTransition>
        <Fade in={open}>
          <Box
            onClick={close}
            sx={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              p: { xs: 0, sm: 2 },
              outline: "none",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            }}
          >
            <IconButton
              aria-label="Đóng"
              onClick={close}
              sx={{
                position: "absolute",
                top: { xs: 8, sm: 16 },
                right: { xs: 8, sm: 16 },
                zIndex: 2,
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.6)" },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
            <Box
              component="img"
              src={src}
              alt={alt}
              draggable={false}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                userSelect: "none",
                borderRadius: { xs: 0, sm: "8px" },
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ImageModal;
