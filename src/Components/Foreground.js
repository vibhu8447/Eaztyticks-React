import React from "react";
import Button from '@mui/material/Button';
function Foreground() {
  return (
    <div >
      <Button variant="contained" id="testing">Hello World</Button>
      <h1 style={styles.main}>Chrome Ext - Foreground</h1>
    </div>
  );
}

const styles = {
  main: {
    fontSize: "10px",
    margin: "0"
  },
};

export default Foreground;
