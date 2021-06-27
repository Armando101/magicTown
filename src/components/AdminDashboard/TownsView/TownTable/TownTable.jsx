import React, { useState, useEffect } from "react";

import PageHeader from "../../PageHeader/PageHeader";
import Controls from "../../controls/Controls";
import TownForm from "../TownForm/TownForm";

import {
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";

import {
  Search,
  Info,
  LocationCity,
  Edit,
  AddCircle,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

import useTable from "../../useTable/useTable";

import { useFetch } from "../../../../hooks/useFetch";
import getAllTowns from "../../../../services/towns/getAllTowns";
import patchTown from "../../../../services/towns/patchTown";
import addTown from "../../../../services/towns/addTown";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
    "& .MuiInputLabel-outlined": {
      fontSize: "1.65rem",
    },
    "& .MuiInputBase-root": {
      fontSize: "1.6rem",
    },
    "& .MuiSvgIcon-root": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  tableCell: {
    padding: "8px",
    fontSize: "1.2rem",
  },
  actionsButton: {
    fontSize: "2rem",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "rate", label: "Rate" },
  { id: "name", label: "Name" },
  { id: "state", label: "State" },
  { id: "incorporation_year", label: "Incorporation Year" },
  { id: "weather", label: "Weather" },
  { id: "biome", label: "Biome" },
  { id: "attractions", label: "# Attractions" },
  { id: "festivities", label: "# Festivities" },
  { id: "dishes", label: "# Dishes" },
  { id: "ethnics", label: "# Ethnics" },
  { id: "reviewsCounter", label: "Current # Reviews" },
  { id: "totalReviewsCounter", label: "Total # Reviews" },
  { id: "actions", label: "Actions", disableSorting: true },
];

function TownsTable() {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [showForm, setFormVisible] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { data, loading } = useFetch(getAllTowns);
  useEffect(() => {
    !loading && setRecords(data);
  }, [data]);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target.value;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") {
          return items;
        } else {
          return items.filter((x) => {
            target = target.toLowerCase();
            return x.name.toLowerCase().includes(target);
          });
        }
      },
    });
  };

  const addOrEdit = async (town, resetForm) => {
    if (!town.id || town.id == 0) {
      await addTown(town);
    } else {
      await patchTown(town.id, { ...town });
    }
    resetForm();
    setRecordForEdit(null);

    const data = await getAllTowns();
    setRecords(data);
    setFormVisible(false);
  };

  return (
    <>
      <PageHeader
        title={"Towns"}
        subtitle={"Manage all towns information"}
        icon={<LocationCity fontSize={"large"} />}
        qty={records.length}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label={"Search Towns"}
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text={"Add New"}
            variant={"outlined"}
            startIcon={<AddCircle position={"start"} />}
            className={classes.newButton}
            color={"primary"}
            onClick={() => {
              setRecordForEdit(null);
              setFormVisible(true);
            }}
          />
        </Toolbar>
        {isLoading ? (
          <>
            <CircularProgress size={160} />
          </>
        ) : (
          <>
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((town) => (
                  <TableRow key={town.id}>
                    <TableCell className={classes.tableCell}>
                      {town.rate}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.name}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.state}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.incorporation_year}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.weather}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.biome}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.attractions.length}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.festivities.length}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.dishes.length}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.ethnics.length}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.reviewsCounter}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {town.totalReviewsCounter}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Controls.ActionButton
                        color={"secondary"}
                        variant={"outlined"}
                        onClick={() => {
                          setRecordForEdit(town);
                          setFormVisible(true);
                        }}
                      >
                        <Edit className={classes.actionsButton} />
                      </Controls.ActionButton>
                      {/* <Controls.ActionButton
                    color={"primary"}
                    onClick={() => {
                      console.log(`clicked`);
                    }}
                  >
                    <Info className={classes.actionsButton} />
                  </Controls.ActionButton> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </>
        )}
      </Paper>
      {showForm && (
        <>
          <Paper className={classes.pageContent}>
            <TownForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
          </Paper>
        </>
      )}
    </>
  );
}

export default TownsTable;
