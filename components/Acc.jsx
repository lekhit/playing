
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from '@mui/material';

export default function Acc(props){
  return(
    <div>
               <Accordion sx={{m:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Question {props.question.number}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.question.question}
          </Typography>
          <Button onClick={()=>{props.emitter(JSON.stringify(props.question))}} >start</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  )
  
}
