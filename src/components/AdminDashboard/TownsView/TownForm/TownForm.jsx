import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../controls/Controls";
import { useForm, Form } from "../../useForm/useForm";

const initialFValues = {
  name: "",
  state: "",
  incorporation_year: "",
  weather: "",
  biome: "",
  mapURL: "",
  coverURL: "",
  description: "",
  attractions: "",
  festivities: "",
  dishes: "",
  ethnics: "",
  photos: "",
};

export default function TownForm({ addOrEdit, recordForEdit }) {
  useEffect(() => {
    if (recordForEdit != null) {
      const {
        rateAccumulator,
        reviewsCounter,
        totalReviewsCounter,
        ethnics,
        rate,
        ...filteredValues
      } = recordForEdit;
      setValues({
        ...filteredValues,
        attractions: recordForEdit.attractions.join(","),
        festivities: recordForEdit.festivities.join(","),
        dishes: recordForEdit.dishes.join(","),
        ethnics: recordForEdit.ethnics.join(","),
      });
    }
  }, [recordForEdit]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    Object.keys(fieldValues).forEach((key) => {
      if (key == "ethnics") return;

      if (key in fieldValues) {
        temp[key] = fieldValues[key] ? "" : "This field is required.";
      }
    });
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(
        {
          ...values,
          attractions: values.attractions.split(","),
          festivities: values.festivities.split(","),
          dishes: values.dishes.split(","),
          ethnics: values.ethnics.split(","),
        },
        resetForm
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Town Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Incorporation year"
            name="incorporation_year"
            value={values.incorporation_year}
            onChange={handleInputChange}
            error={errors.incorporation_year}
          />
          <Controls.Input
            label="State"
            name="state"
            value={values.state}
            onChange={handleInputChange}
            error={errors.state}
          />
          <Controls.Input
            label="Weather"
            name="weather"
            value={values.weather}
            onChange={handleInputChange}
            error={errors.weather}
          />
          <Controls.Input
            label="Biome"
            name="biome"
            value={values.biome}
            onChange={handleInputChange}
            error={errors.biome}
          />
          <Controls.Input
            label="Map URL"
            name="mapURL"
            value={values.mapURL}
            onChange={handleInputChange}
            error={errors.mapURL}
          />
          <Controls.Input
            label="Cover URL"
            name="coverURL"
            value={values.coverURL}
            onChange={handleInputChange}
            error={errors.coverURL}
          />
          <Controls.Input
            label="Description"
            name="description"
            value={values.description}
            multiline
            onChange={handleInputChange}
            error={errors.description}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Attractions"
            name="attractions"
            value={values.attractions}
            multiline
            onChange={handleInputChange}
            error={errors.attractions}
          />
          <Controls.Input
            label="Festivities"
            name="festivities"
            value={values.festivities}
            multiline
            onChange={handleInputChange}
            error={errors.festivities}
          />
          <Controls.Input
            label="Dishes"
            name="dishes"
            value={values.dishes}
            multiline
            onChange={handleInputChange}
            error={errors.dishes}
          />
          <Controls.Input
            label="Ethnics"
            name="ethnics"
            value={values.ethnics}
            multiline
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Photos"
            name="photos"
            value={values.photos}
            multiline
            onChange={handleInputChange}
            error={errors.photos}
          />
          <div>
            <Controls.Button type="submit" color={"primary"} text="Submit" />
            <Controls.Button
              text="Reset"
              color={"secondary"}
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
