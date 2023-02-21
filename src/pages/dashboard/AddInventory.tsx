import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import AllButton from "../../components/AllButton";
import axios from "axios";
export default function AddInventory() {
  function handleClick() {
    console.log("Button clicked!");
  }
  const { register, handleSubmit, reset } = useForm();
  const newRequest = (data : any) => {
  console.log(data)
  };
  return (
    <>
      <Typography className="text-left mb-10 font-bold font-3 text-xl uppercase text-[#3C2223]">
        Add Inventory
      </Typography>
      <div className="px-10">
        <Card>
          <Typography className="text-center p-5 font-3 text-lg uppercase text-[#FF7A11] font-bold">
            This is a form to add Inventory{" "}
          </Typography>
          <form onSubmit={handleSubmit(newRequest)}>
            <Grid container spacing={4} className="p-5">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="id"
                  label="Inventory ID"
                  type="text"
                  fullWidth
                  {...register("id")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Name"
                  label="Inventory Name"
                  type="text"
                  fullWidth
                  {...register("name")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Description"
                  label="Inventory Description"
                  type="text"
                  fullWidth
                  {...register("description")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Price"
                  label="Inventory Price"
                  type="text"
                  fullWidth
                  {...register("price ")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="Stock"
                  label="Inventory Stock"
                  type="text"
                  fullWidth
                  {...register("stock")}
                />
              </Grid>        
              <Grid item lg={6} sm={12}>
                <TextField
                  required
                  name="Location"
                  label="Inventory Location "
                  type="text"
                  fullWidth
                  {...register("Location")}
                />
              </Grid>
              <Grid item lg={6} sm={12}>
                <TextField
                  required
                  name="Image"
                  label="Inventory Image "
                  type="text"
                  fullWidth
                  {...register("image")}
                />
              </Grid>
              <Grid item lg={6} sm={12}>
                <TextField
                  required
                  name="Date"
                  label="Inventory Date "
                  type="text"
                  fullWidth
                  {...register("date")}
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
