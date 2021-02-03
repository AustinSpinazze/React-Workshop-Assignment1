import React, { useState } from 'react';

import InventoryTable from './InventoryTable/InventoryTable';
import './app.css';

const App = () => {
    const [state, setState] = useState(
        {
            inventory: [
                {
                    Name: "Bannana",
                    Cost: "$0.38",
                    Weight: "100 lbs",
                    Expiration: "1/31/21",
                    Origin: "Mexico",
                    Inventory: 100
                },
                {
                    Name: "Canadian Bacon",
                    Cost: "$0.75",
                    Weight: "250 lbs",
                    Expiration: "2/5/21",
                    Origin: "Canada",
                    Inventory: 250
                },
                {
                    Name: "Argentine Flank Steak",
                    Cost: "$0.95",
                    Weight: "200 lbs",
                    Expiration: "2/3/21",
                    Origin: "Argentina",
                    Inventory: 200
                },
                {
                    Name: "California Iceberg Lettuce",
                    Cost: "$0.27",
                    Weight: "150 lbs",
                    Expiration: "2/5/21",
                    Origin: "United States",
                    Inventory: 150
                },
                {
                    Name: "Italian Frozen Meatballs",
                    Cost: "$0.63",
                    Weight: "175 lbs",
                    Expiration: "4/5/21",
                    Origin: "Italy",
                    Inventory: 175
                }
            ],
            showMoreData: false
        }
    );

    const showMoreDataHandler = () => {
        setState((prevState) => ({...prevState, showMoreData: !showMoreData}));
    }

    const {showMoreData, inventory} = state;
    return (
        <div className="container">
            <h1>Acme Grocers Inventory System</h1>
            <div className="button-group">
                <button onClick={showMoreDataHandler}>{showMoreData ? "Show less data" : "Show More Data"}</button>
            </div>
            <div className="content">
                <InventoryTable inventory={inventory} showMoreData={showMoreData} />
            </div>
        </div>
    )
}

export default App
