import React from 'react';

import './inventoryTable.css';



const InventoryTable = ({inventory, showMoreData}) => {
    console.log(inventory);
    return (
        <div>
            {!showMoreData ?
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Cost}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            :
                <table>
                    <thead>
                        <tr>
                            {Object.keys(inventory[0]).map((value, index) => {
                                return <th key={index}>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item, index) => {
                            return (
                                <tr key={index}>
                                    {Object.keys(inventory[index]).map((value, i) => {
                                        return <td key={i}>{item[value]}</td>
                                    })}
                                </tr>)
                        })}
                    </tbody>
                </table>
        }
        </div>
    )
}

export default InventoryTable;