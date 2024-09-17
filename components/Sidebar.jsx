'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='fixed w-[20%]'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }} className='hover:bg-teal-100 w-full rounded p-2'>Home</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href='/' className='hover:underline p-2' >Back Home</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }} className='hover:bg-teal-100 w-full rounded p-2'>Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href='/projects' className='hover:underline p-2' >Find my projects here.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }} className='hover:bg-teal-100 w-full rounded p-2'>
            Achievements.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href='/accomplishments' className='hover:underline p-2' >Accomplishments.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }} className='hover:bg-teal-100 rounded w-full p-2'>
            Blog
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href='login' className='hover:underline p-2'>Log in to access my blog.</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }} className='hover:bg-teal-100 w-full rounded p-2'>
            Contact Us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href='login' className='hover:underline p-2'>Email and phone number</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
