import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useGetProjectsQuery } from "../redux/projectsApi";
import Card from "./Card";

function App() {
  const { data = [], isLoading, isError } = useGetProjectsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server error</h1>;

  return (
    <CssBaseline>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </CssBaseline>
  );
}

export default App;
