import React from "react";
import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function PersonalInfo({
  classes,
  setPersonalInfo,
  personalInfo,
  Controller,
  register,
  control,
  watch
}) {
  return (
    <Box className={classes.box}>
      <Typography variant="h5" className={classes.text} align="left">
        Personal Info:
      </Typography>
      <TextField
        className={classes.value}
        id="standard-basic"
        label="First Name"
        fullWidth
        name="firstName"
        inputRef={register}
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Last Name"
        fullWidth
        name="lastName"
        inputRef={register}
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Email"
        fullWidth
        name="email"
        inputRef={register}
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Cellphone Number"
        fullWidth
        name="cell"
        inputRef={register}
      />
    </Box>
  );
}
