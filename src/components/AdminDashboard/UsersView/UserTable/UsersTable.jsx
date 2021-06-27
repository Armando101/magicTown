import React, { useState, useEffect } from "react";

import PageHeader from "../../PageHeader/PageHeader";
import Controls from "../../controls/Controls";

import PeopleIcon from "@material-ui/icons/People";

import {
  Paper,
  TableBody,
  Avatar,
  TableCell,
  TableRow,
  Toolbar,
  InputAdornment,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search, CloseOutlined, Info } from "@material-ui/icons";

import useTable from "../../useTable/useTable";

import { useFetch } from "../../../../hooks/useFetch";
import getAllUsers from "../../../../services/users/getAllUsers";
import deleteUser from "../../../../services/users/deleteUser";
import swal from "sweetalert";

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
  tableCell_Medium: {
    fontSize: "1.5rem",
  },
  actionsButton: {
    fontSize: "2rem",
  },
}));

const headCells = [
  { id: "avatar", label: "Avatar", disableSorting: true },
  { id: "username", label: "Username" },
  { id: "description", label: "Description" },
  { id: "reviewsCounter", label: "# Reviews" },
  { id: "favoritesCounter", label: "# Favorites" },
  { id: "actions", label: "Actions", disableSorting: true },
];

function UsersTable() {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
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

  const { data, loading } = useFetch(getAllUsers);
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
            return x.username.toLowerCase().includes(target);
          });
        }
      },
    });
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure to delete this record?",
      text: " You can't undo this operation?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: {
          visible: true,
          text: "Cancel",
        },
        confirm: {
          text: "Yes, delete this record",
        },
      },
    }).then(async (willDeleteRecord) => {
      if (willDeleteRecord) {
        await deleteUser(id);
        const users = await getAllUsers();
        setRecords(users);
      }
    });
  };

  return (
    <>
      <PageHeader
        title={"Users"}
        subtitle={"Manage all users information"}
        icon={<PeopleIcon fontSize={"large"} />}
        qty={records.length}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label={"Search Users"}
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
                {recordsAfterPagingAndSorting().map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Avatar src={user.avatar} alt={user.username} />
                    </TableCell>
                    <TableCell
                      className={(classes.tableCell, classes.tableCell_Medium)}
                    >
                      {user.username}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {user.description}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {user.reviewsCounter}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {user.favoritesCounter}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Controls.ActionButton
                        color={"delete"}
                        variant={"outlined"}
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        <CloseOutlined className={classes.actionsButton} />
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
    </>
  );
}

export default UsersTable;
