import React, { setState } from "react";
import {
  Box,
  Typography,
  FormLabel,
  FormControl,
  FormGroup,
  RadioGroup
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";

export default function Address({
  classes,
  setDetailsInfo,
  detailsInfo,
  Controller,
  register,
  control,
  watch
}) {
  const [state, setState] = React.useState({
    internet: true,
    voice: false,
    dstv: false
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { internet, voice, dstv } = state;

  return (
    <Box className={classes.details}>
      <Typography className={classes.text} align="left">
        Details:
      </Typography>

      <FormControl align="left" fullWidth className={classes.radioSelect}>
        <FormLabel component="legend" className={classes.radioSelect}>
          Do you require fibre installation?
        </FormLabel>
        <Controller
          as={
            <RadioGroup
              aria-label="fibre-installation-required"
              name="fibre-installation"
              // value={"Yes"}
            >
              <Grid container>
                <Grid item xs={6} md={6}>
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </Grid>
              </Grid>
            </RadioGroup>
          }
          control={control}
          name="fibre-installation"
          defaultValue="No"
          rules={{ required: true }}
        />
      </FormControl>
      <FormControl
        component="fieldset"
        align="left"
        fullWidth
        className={classes.radioSelect}
      >
        <FormLabel component="legend" className={classes.radioSelect}>
          Are you interested in any of the following services?
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={internet} onChange={handleChange} />}
            label="Internet"
            name="internet"
            className={classes.checkboxText}
            inputRef={register}
          />
          <FormControlLabel
            control={<Checkbox checked={voice} onChange={handleChange} />}
            inputRef={register}
            name="voice"
            label="Voice"
            className={classes.checkboxText}
          />
          <FormControlLabel
            control={<Checkbox checked={dstv} onChange={handleChange} />}
            label="DSTV / OpenViewHD"
            inputRef={register}
            name="dstv"
            className={classes.checkboxText}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
