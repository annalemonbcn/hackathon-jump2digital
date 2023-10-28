// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 text-white">
      <Box>
        <CircularProgress color="inherit" />
      </Box>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
