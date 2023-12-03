import { useState } from 'react';
import { ProgressSpinner } from "primereact/progressspinner";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const groceryData:
    {
        id: string,
        display_name: string,
        quantity: number,
        category: number
    }[] = [
        {
            id: "rice",
            display_name: "Rice",
            quantity: 1,
            category: 8,
        },
        {
            id: "crushed_tomatoes",
            display_name: "Crushed Tomatoes",
            quantity: 2,
            category: 3,
        },
        {
            id: "onions",
            display_name: "Onions",
            quantity: 1,
            category: 0,
        },
    ];

export const Groceries = () => {
    const [formState, setFormState] = useState({name: "", quantity: 0});

    document.title = "Groceries";

    const onNameChange = (event : React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value);
    };

    const onQuantityChange = (event: { value: any; }) => {
        if (!event.value){
            return;
        }
        console.log(event.value);
    }

    return (
        <div>
            <header>
                <h2 className="app-title">
                    Groceries
                </h2>
            </header>
            {groceryData ?
                <div>
                    <DataTable value={groceryData} tableStyle={{ minWidth: "10em" }} className="grocery-list">
                        <Column field="display_name" header="Name"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                        {/* {groceryData.map(grocery => (
                        <div style={{ display:"flex", flexDirection: "row", justifyContent: "center", width: "80vw" }} key={grocery.id}>
                            <div style={{ width: "50%", }}>{grocery.display_name}</div>
                            <div style={{ width: "50%" }}>{grocery.quantity}</div>
                        </div>
                    ))} */}
                    </DataTable>
                    <form name="newGrocery">
                        <InputText onChange={onNameChange} name="name" />
                        <InputNumber onChange={onQuantityChange} name="quantity" />
                    </form>
                </div> : <ProgressSpinner />}
        </div>
    )
};