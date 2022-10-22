import { Collapse, Box } from "@mui/material";
import { Item } from "./Item";
import { TransitionGroup } from "react-transition-group";

export default function ItemList(props) {
  const { questions } = props;
  return (
    <Box component="" sx={{ ...props.sx }}>
      <TransitionGroup
        style={{ display: "flex", flexDirection: "column-reverse" }}
      >
        {questions.map((obj, idx) => {
          return (
            <Collapse
              key={obj.id}
              timeout={{ enter: 1000, exit: 1000 }}
              style={{ transitionDelay: "100ms" }}
            >
              <Item text={obj.q} active={idx === 0} />
            </Collapse>
          );
        })}
      </TransitionGroup>
    </Box>
  );
}
