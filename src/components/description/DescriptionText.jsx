




import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import storage from './storage'; 
import { v4 as uuid } from "uuid";


export default function DescriptionText() {
  const storedData = localStorage.getItem("des");
  var k = [];
  k = storedData ? JSON.parse(storedData) : [];
  console.log(k);

  const dscr = k.reverse().find(e => e.cardName === window.tag);

  const [title, setTitle] = useState(
    dscr === undefined ? 'Enter Description' : dscr.description
  );
  const [editing, setEditing] = useState(false);

  const getdes = storage.getdes; 

  function handleSubmit() {
    setEditing(false);
    const tag = { id: uuid(), cardName: window.tag, description: title };
    const des = [];
    const newDes = getdes();
    des.push(tag);
    localStorage.setItem("des", JSON.stringify(newDes));

    // des = getdes(); // Use the imported getdes function
  //   des.push(tag);
  //   localStorage.setItem("des", JSON.stringify(des));
  }

  return (
    <div className="App">
      {editing ? (
        <>
          <TextField
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ width: '100%' }}
            autoFocus
          />
          <Button size="small" variant="contained" sx={{ marginTop: 0.5 }} onClick={handleSubmit}>
            submit
          </Button>
        </>
      ) : (
        <h3 onClick={() => setEditing(true)} style={{ marginLeft: '2.3rem' }}>{title}</h3>
      )}
    </div>
  );
}
