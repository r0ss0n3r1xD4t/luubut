import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
} from "@mui/material";
import ImageModal from "./ImageModal";

const Thanks = ({ show, data, available, setShowLetter }) => {
  const handleReadLetter = () => {
    setShowLetter(true);
    setTimeout(() => {
      const letter = document.querySelector(".letter-container");
      if (letter) {
        letter.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <>
      <Collapse 
        in={!show && !available}
        timeout={800}
      >
        <div className="thanks-container">
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <CardContent
              sx={{ pt: 3, pb: 3, borderBottom: 1, borderColor: "divider" }}
            >
              <Typography variant="body1" sx={{ pl: 1, pr: 1, fontStyle: "italic" }}>
                Cảm ơn {data.name} đã gửi thư cho tớ, chắc là tớ sẽ đọc sớm thôi. Thư gửi tớ k biết có đến tay tớ hay không nhưng mà chắc là có đó. Nếu hong đến được thì chúng ta có thể nói chuyện nhaaa. 😺
              </Typography>
            </CardContent>
            <ImageModal
              src={process.env.PUBLIC_URL + "/thank-you.jpg"}
              alt="Tớ ngồi code sml"
              triggerSx={{
                height: { xs: 280, sm: 400 },
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
            <CardActions sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
              <Button size="small" color="primary" onClick={handleReadLetter}>
                Đọc lại thư
              </Button>
              <Button size="small" color="primary" onClick={() => { window.open("https://m.me/MrDatDepZai", "_blank") }}>
                Direct của tớ
              </Button>
              <Button size="small" color="primary" onClick={() => { window.open("https://open.spotify.com/playlist/05ZbS9r25KsfrJOfKinPbe?si=aad3afacf4c94f4b", "_blank") }}>
                Playlist của tớ nè
              </Button>
            </CardActions>
          </Card>
        </div>
      </Collapse>
    </>
  );
};

export default Thanks;
