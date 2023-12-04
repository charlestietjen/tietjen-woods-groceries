import { useState, useEffect } from 'react';
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from 'primereact/button';
import { addGrocery, getGroceries } from '../../lib/api';
import { json } from 'stream/consumers';

const dataTableButton = (rowData: any) => {
    return (
        <Button label="X" onClick={() => console.log(rowData)} />
    )
}

export const Groceries = () => {
    const [groceryListState, setGroceryListState] = useState([]);
    const [formState, setFormState] = useState({ id: "", quantity: 0, displayName: "" });
    const [addGroceryState, setAddGroceryState] = useState(false);

    document.title = "Groceries";

    const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.value) {
            return;
        };
        const newGroceryName = event.currentTarget.value.replace(" ", "_").toLowerCase()
        setFormState({ ...formState, id: newGroceryName, displayName: event.currentTarget.value })
    };

    const onQuantityChange = (event: { value: any; }) => {
        if (!event.value) {
            return;
        }
        setFormState({ ...formState, quantity: event.value });
    };

    const onAddGrocery = () => {
        const grocery = 
        const response = addGrocery()
    }

    useEffect(() => {
        getGroceries().then(data => {
            if (data.length > 0){
                setGroceryListState(data);
            }
        })
    }, []);
    return (
        <div>
            <header>
                <h2 className="app-title">
                    Groceries
                </h2>
            </header>
            {groceryListState.length > 0 ?
                <div style={{ width: "90vw", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <DataTable value={groceryListState} tableStyle={{ }} className="grocery-list">
                        <Column field="displayName" header="Name"></Column>
                        <Column field="quantity" header="Quantity" style={{ width: "10%" }}></Column>
                        <Column body={dataTableButton} style={{ width: "10%" }}></Column>
                        {/* {groceryData.map(grocery => (
                        <div style={{ display:"flex", flexDirection: "row", justifyContent: "center", width: "80vw" }} key={grocery.id}>
                            <div style={{ width: "50%", }}>{grocery.display_name}</div>
                            <div style={{ width: "50%" }}>{grocery.quantity}</div>
                        </div>
                    ))} */}
                    </DataTable>
                    <section style={{ margin: "1em", }}>
                        {addGroceryState ?
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <div style={{ height: "100%", width: "100%", display: "flex" }}>
                                    <InputText style={{ margin: "auto", width: "50vw" }} onChange={onNameChange} name="name" placeholder="Grocery name..." />
                                    <InputNumber style={{ margin: "auto", height: "15vh", width: "15vw" }} onChange={onQuantityChange} name="quantity" placeholder='Quantity' value={formState.quantity} showButtons buttonLayout="vertical" />
                                </div>
                                <div style={{ margin: "1rem" }}>
                                    <Button style={{ marginRight: "1rem" }} label="Confirm" onClick={onAddGrocery} />
                                    <Button style={{ marginLeft: "1rem" }} label="Cancel" onClick={e => { setAddGroceryState(false) }} />
                                </div>
                            </div> :
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button label="Add Grocery" onClick={e => { setAddGroceryState(true) }}></Button>
                            </div>}
                    </section>
                </div> : <ProgressSpinner style={{ display: "block", marginTop: "20vh" }} />}
        </div>
    )
};