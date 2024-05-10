// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled as styledMui } from "@mui/material/styles";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

// custom hooks
import { useAdvice } from "../hooks/useAdvice";

// SVG
import PatternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import PatternDividerMobile from "../assets/pattern-divider-mobile.svg";
import BtnSvg from "./BtnSvg";

const ArticleBox = styledMui(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "1.6rem",
  position: "relative",
  borderRadius: "10px",
  maxWidth: "345px",
  "@media (min-width: 600px)": {
    maxWidth: "540px",
  },
}));

const StyledFab = styled(Fab)({
  width: 65,
  height: 65,
  marginBlock: 50,
  position: "absolute",
  zIndex: 1,
  bottom: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const Picture = styled.picture`
  margin-block: 0.5rem 2.5rem;
`;
const DividerSvg = styled.img`
  height: 16px;
  margin-inline: auto;
`;

const AdviceCard = () => {
  const { advice, fetchAdvice } = useAdvice();
  const theme = useTheme();
  return (
    <ArticleBox component="article">
      <Typography
        fontSize={12}
        color={theme.palette.secondary.main}
        textAlign={"center"}
        letterSpacing={3}
        textTransform="uppercase"
        fontWeight={600}
        marginBlock={2}
      >
        advice #{advice?.slip.id}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.text.primary}
        fontWeight={800}
        fontSize={23}
        textAlign={"center"}
        marginBlock={3}
        lineHeight={1.45}
      >
        {advice?.slip.advice}
      </Typography>

      <Picture>
        <source media="(min-width: 600px)" srcSet={PatternDividerDesktop} />
        <DividerSvg src={PatternDividerMobile} alt="pattern divider" />
      </Picture>
      <StyledFab color="secondary" aria-label="add" onClick={fetchAdvice}>
        <BtnSvg />
      </StyledFab>
    </ArticleBox>
  );
};

export default AdviceCard;
