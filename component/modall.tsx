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
    "Self wealth? Rich Husband? Looks like you're getting both 👑",
    "Celebrate the beauty in small victories; they pave the way for grand accomplishments.",
    "Two precious baby souls are on their way to brighten your world, dear",
    "Your destiny whispers of new connections, exciting opportunities, and boundless creativity.",
    "Forge your path without waiting for leaders; your journey is uniquely yours, person to person.",
    "Discover joy in the simplicity of life, and you'll uncover the extraordinary in every moment.",
    "Elevating in life is a continuous choice, a daily dance of growth and blossoming.",
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
