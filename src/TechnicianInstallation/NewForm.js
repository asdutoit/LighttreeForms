import React, { useState } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import { Box, Grid } from "@material-ui/core";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Details from "./Details";
import { useStyles, theme } from "../styles/styles";
import { SubmitButton } from "../items/Button";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

const INITIAL_ADDRESS = {
  site_name: "Site Name 2",
  street_no: ""
};

export default function BasicTextFields() {
  const classes = useStyles();
  const [personalInfo, setPersonalInfo] = useState([]);
  const [addressInfo, setAddressInfo] = useState(INITIAL_ADDRESS);
  const [detailsInfo, setDetailsInfo] = useState([]);
  const { register, errors, watch, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <h1>Residential Customer Registration Form:</h1>
      <Box className={classes.root}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3} className={classes.gridspace}>
            {/* --------  Personal Info BEGIN-------- */}
            <Grid item xs={12} md={4}>
              <PersonalInfo
                classes={classes}
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
                Controller={Controller}
                register={register}
                control={control}
                watch={watch}
              />
            </Grid>
            {/* --------  Personal Info END -------- */}

            {/* --------  Address BEGIN -------- */}
            <Grid item xs={12} md={4}>
              <Address
                classes={classes}
                addressInfo={addressInfo}
                setAddressInfo={setAddressInfo}
                Controller={Controller}
                register={register}
                control={control}
                watch={watch}
              />
            </Grid>
            {/* --------  Address END -------- */}

            {/* --------  Details BEGIN -------- */}
            <Grid item xs={12} md={4}>
              <Details
                classes={classes}
                setDetailsInfo={setDetailsInfo}
                detailsInfo={detailsInfo}
                Controller={Controller}
                register={register}
                control={control}
                watch={watch}
              />
            </Grid>
            {/* --------  Details END -------- */}
          </Grid>
          <Button
            variant="contained"
            type="submit"
            style={{
              marginBottom: "20px",
              backgroundColor: yellow[700],
              width: "30vw"
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
}
