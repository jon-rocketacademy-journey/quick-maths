import { Stack, Typography, Divider } from "@mui/material";

// TODO: handle on enter https://stackoverflow.com/a/46172509

export const Item = (props) => {
  const { text, active } = props;
  return (
    <Stack
      component=""
      direction="column"
      spacing={2}
      sx={{
        mb: 2,
      }}
    >
      <Typography
        noWrap={true}
        align="right"
        sx={{
          flexGrow: 1,
          color: active ? undefined : "text.disabled",
        }}
      >
        {text}
      </Typography>
      <Divider />
    </Stack>
  );
};
