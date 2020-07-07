import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./App.scss";
import AssignmentTable from "../AssignmentTable";
import WorkOrderList from "../WorkOrderList";

function App() {
  return (
    <>
      <header></header>

      <main>
        <Grid container className="container">
          <AssignmentTable></AssignmentTable>
          <WorkOrderList></WorkOrderList>
        </Grid>
      </main>
    </>
  );
}

export default App;
