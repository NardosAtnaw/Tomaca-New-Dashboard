import React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import AllButton from "../../components/AllButton";

export default function AddLocation() {
  function handleClick() {
    console.log("Button clicked!");
  }
  return (
    <>
      <Typography className="text-left mb-10 font-bold font-3 text-xl uppercase text-[#3C2223]">
        Add Location
      </Typography>
      <div className="px-10">
        <Card>
          <Typography className="text-center p-5 font-3 text-lg uppercase text-[#FF7A11] font-bold">
            This is a form to add more Location{" "}
          </Typography>
          <form>
            <Grid container spacing={4} className="p-5">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  label="Location ID"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  label="Location Name"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  label="Location Address"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  label="Location Phone"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="id"
                  label="Location Long/Lat"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item lg={6} sm={12}>
                <TextField
                  required
                  name="id"
                  label="Location Link"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item>
                <AllButton onClick={handleClick}>Submit</AllButton>
              </Grid>
            </Grid>
          </form>
        </Card>
      </div>
    </>
  );
}
