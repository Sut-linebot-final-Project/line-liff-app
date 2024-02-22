import { Box, Stack, Typography } from "@mui/material";
// import SUTHLogo from "/suth.svg";
import "./banner.scss";

const Banner = () => {
  return (
    <Box bgcolor={"#FE7A36"} height={120}>
      <Stack
        height={"100%"}
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        px={8}
      >
        {/* <Box>
          <img src={SUTHLogo} />
        </Box> */}
        <Box>
          <Typography
            className="signup-banner"
            variant="h4"
            color={"#fff"}
            fontWeight={600}
          >
            โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี
          </Typography>
          <Typography
            className="signup-banner"
            variant="h5"
            color={"#fff"}
            fontWeight={600}
          >
            Suranaree University Of Technology Hospital
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
