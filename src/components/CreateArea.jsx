import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isStartScreen, setIsStartScreen] = useState(true)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.toAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  function expand() {
    setIsStartScreen(false)
  }

  return (
    <div>
      <form className="create-note">
        {isStartScreen ? null : 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= {isStartScreen ? "1" : "3"}
        />
        <Zoom in={!isStartScreen}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
