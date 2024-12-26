import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStyles1 } from './style';


const TopPriceComponent = (props: any) => {
    const {assets} = props
    const classes = useStyles1()
         
   
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Изменения (%)</TableCell>
            <TableCell align="right">Изменения ($)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((element: any) => (
            <TableRow
              key={element.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element.name}
              </TableCell>
              <TableCell align="right">{element.current_price}</TableCell>

              <TableCell align="right"
                        className={
                        element.price_change_24h >0
                         ? `${classes.priceUp}`
                        : `${classes.priceDown}`}>
                                               
                        {element.price_change_percentage_24h}</TableCell>


              <TableCell align="right"
                        className={
                        element.price_change_24h >0
                         ? `${classes.priceUp}`
                        : `${classes.priceDown}`}>{element.price_change_24h}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )

}

export default TopPriceComponent