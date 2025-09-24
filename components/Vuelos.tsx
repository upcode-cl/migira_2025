import React from "react";

const Vuelos = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4} className="text-center-programa">
              Titulo
            </th>
          </tr>
          <tr>
            <th className="text-center-programa">Vuelo</th>
            <th className="text-center-programa">Ruta</th>
            <th className="text-center-programa">Sale</th>
            <th className="text-center-programa">Llega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">Vuelo</td>
            <td align="center">Ruta</td>
            <td align="center">Sale</td>
            <td align="center">Llega</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Vuelos;
