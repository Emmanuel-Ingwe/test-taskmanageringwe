import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function generateRandomText() {
  const texts = [
    "What you're grinding for, you shall get, even if na garri",
    "Release what no longer serves you to make space for magic.",
    "Release what no longer serves you, like that questionable fashion choice from last year.",
    "Leveling up in life is not a one-time event; it's a daily choice to grow and evolve.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your fortune whispers of new friendships, exciting opportunities, and boundless creativity",
    "Celebrate small victories; they lead to big accomplishments.",
    "Seek joy in the ordinary, and you'll find the extraordinary. Especially in the 'extraordinary' ability to find your phone when it's been in your hand the whole time.",
    "Your kindness has a ripple effect. Small gestures can create significant impact.",
    "Missed on those M's this year? Well, let's get it on the next! M&Ms, Mondays, and maybe a Maserati.",
    "Two lovely kids comming your way champ!",
    "Radiate positivity, king, and watch how it transforms the world around you.",
    "Your uniqueness is your strength. Celebrate the qualities that make you, you. Embrace the weirdness—it's what makes you a rare species in the human zoo.",
    "Nor go cast, you fit no get last chance",
    "Write chapters of resilience, love, and self-discovery.",
    "The possibilities are endless, and so is your potential. Dream big!",
    "Choose what you chase, wisely",
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [randomText, setRandomText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickOpen = () => {
    setIsLoading(true);
    setOpen(true);
    setTimeout(() => {
      setRandomText(generateRandomText());
      setIsLoading(false);
    }, 1600);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
         Reveal Your 2024 Horizons
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 4,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            X
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {isLoading ? (
            <Typography variant="body1">_________________________</Typography>
          ) : (
            <Typography variant="body1">{randomText}
            <hr />
            </Typography>
          )}
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
