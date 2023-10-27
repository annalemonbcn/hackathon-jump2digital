// MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Types
import { CharacterResponseFromApi } from "../../types";


// Props
interface AccordionBasicProps {
  data: CharacterResponseFromApi
}

const AccordionBasic = ({ data }: AccordionBasicProps) => {
  return (
    <Accordion
      style={{
        padding: "1rem",
        margin: "0",
        borderColor: "transparent",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ padding: "0", margin: "0", minHeight: "auto" }}
      >
        <span className="font-bold">Episodes list:</span>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {data.episode.map((episodeUrl, index) => {
            const episodeNumber = episodeUrl.split("/").pop();
            return (
              <li key={index} className="list-disc">
                Episode {episodeNumber}
              </li>
            );
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBasic;
