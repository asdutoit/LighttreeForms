import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Typography,
  MenuItem
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import * as yup from "yup";

export default function Address({
  classes,
  addressInfo,
  setAddressInfo,
  Controller,
  register,
  control,
  watch
}) {
  const watchSelect = watch(["site_name"]);

  if (watchSelect.site_name !== "" && watchSelect.site_name !== undefined) {
    addressInfo.site_name = watchSelect.site_name;
  }

  const handleChange = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  return (
    <Box className={classes.box}>
      <Typography variant="h5" className={classes.text} align="left">
        Address:
      </Typography>

      <FormControl align="left" fullWidth className={classes.value}>
        <InputLabel id="site_name-label" align="left">
          Security Estate
        </InputLabel>
        <Controller
          as={
            <Select labelId="site_name-label" id="site_name" label="site_name">
              <MenuItem value="Site Name">Site Name 1</MenuItem>
              <MenuItem value="Site Name 2">Site Name 2</MenuItem>
              <MenuItem value="Site Name 3">Site Name 3</MenuItem>
              <MenuItem value="Site Name 4">Site Name 4</MenuItem>
            </Select>
          }
          control={control}
          name="site_name"
          defaultValue={addressInfo.site_name}
        />
      </FormControl>
      <TextField
        className={classes.value}
        id="street_no"
        name="street_no"
        label="Street Number"
        fullWidth
        // value={addressInfo.street_no}
        inputRef={register}
      />

      <TextField
        className={classes.value}
        id="standard-basic"
        label="Street Name"
        name="street"
        inputRef={register}
        fullWidth
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Unit Number"
        name="unit_no"
        fullWidth
        inputRef={register}
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Suburb"
        fullWidth
        name="suburb"
        inputRef={register}
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="City"
        fullWidth
        inputRef={register}
        name="city"
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Province / State"
        fullWidth
        inputRef={register}
        name="state"
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Country"
        fullWidth
        inputRef={register}
        name="country"
      />
      <TextField
        className={classes.value}
        id="standard-basic"
        label="Postal / Zip Code"
        fullWidth
        inputRef={register}
        name="zip"
      />
    </Box>
  );
}
