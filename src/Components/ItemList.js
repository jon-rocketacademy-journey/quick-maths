import { Collapse, Box } from "@mui/material";
import { Item } from "./Item";
import { TransitionGroup } from "react-transition-group";
import { NUM_QUESTIONS } from "../Config/Constants";

export default function ItemList(props) {
  const { questions, activeIdx } = props;
  return (
    <Box component="" sx={{ ...props.sx }}>
      <TransitionGroup
        style={{ display: "flex", flexDirection: "column-reverse" }}
      >
        {questions
          .slice(activeIdx, activeIdx + NUM_QUESTIONS)
          .map((obj, _idx) => {
            let idx = _idx + activeIdx;
            return (
              <Collapse
                key={idx}
                timeout={{ enter: 1000, exit: 1000 }}
                style={{ transitionDelay: "100ms" }}
              >
                <Item text={obj.q} active={idx === activeIdx} />
              </Collapse>
            );
          })}
      </TransitionGroup>
    </Box>
  );
}
