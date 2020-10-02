import React from 'react';
import './Table.css';

export const Table = () => {
    return (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nazwa produktu</th>
              <th>Ilość</th>
              <th>Cena netto</th>
              <th>VAT</th>
              <th>Cena brutto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>  
              <td>Jogurt</td>
              <td>2</td>  
              <td>1,5</td>  
              <td>8%</td>  
              <td>2</td>  
            </tr>
            <tr>
              <td>2</td>  
              <td>Ser</td>
              <td>3</td>  
              <td>2,8</td>  
              <td>8%</td>  
              <td>3</td>  
            </tr>
          </tbody>            
        </table>
    )
}