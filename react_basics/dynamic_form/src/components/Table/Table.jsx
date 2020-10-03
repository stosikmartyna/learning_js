import React from 'react';
import './Table.css';

export const Table = ({products}) => {
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
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>  
                  <td>{product.productName}</td>
                  <td>{product.quantity}</td>  
                  <td>{product.nettoPrice}</td>
                  <td>{product.vat}</td>  
                  <td>{Number(product.nettoPrice) + (product.nettoPrice * product.vat / 100)}</td>
                </tr>
              )
            })}
          </tbody>            
        </table>
    )
}