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
    "What you're grinding for, you shall get",
    "Release what no longer serves you to make space for magic.",
    "Leveling up in life is not a one-time event; it's a daily choice to grow and evolve.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your fortune whispers of new friendships, exciting opportunities, and boundless creativity",
    "Celebrate small victories; they lead to big accomplishments.",
    "Seek joy in the ordinary, and you'll find the extraordinary.",
    "Missed on those M's this year? well let's get it on the next!",
    "2 lovely kids comming your way champ!",
    "Write chapters of resilience, love, and self-discovery."
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
              top: 3,
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
            <Typography variant="body1">{randomText}</Typography>
          )}
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
