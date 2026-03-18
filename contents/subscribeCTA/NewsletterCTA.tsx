import {TextField, Button} from '@mui/material';

const NewsletterCTA = () => (
  <form
    onSubmit={(e) => e.preventDefault()}
    className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-center"
  >
    <TextField
      label="Full Name"
      size="small"
      className="w-full md:w-[180px]"
      sx={{backgroundColor: 'white', borderRadius: '6px'}}
    />

    <TextField
      label="E-mail Address"
      type="email"
      size="small"
      className="w-full md:w-[220px]"
      sx={{backgroundColor: 'white', borderRadius: '6px'}}
    />

    <Button
      type="submit"
      variant="contained"
      color="primary"
      className="w-full md:w-auto h-[40px] px-6 whitespace-nowrap"
    >
      Subscribe
    </Button>
  </form>
);

export default NewsletterCTA;
