import { ProgressSpinner } from "primereact/progressspinner";

const groceryData = [
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
    document.title = "Groceries";
    return (
        <div>
            {groceryData ?
                <section>
                    {groceryData.map(grocery => (
                        <div style={{ display:"flex", flexDirection: "row", justifyContent: "center", width: "80vw" }} key={grocery.id}>
                            <div style={{ width: "50%", }}>{grocery.display_name}</div>
                            <div style={{ width: "50%" }}>{grocery.quantity}</div>
                        </div>
                    ))}
                </section> : <ProgressSpinner />}
        </div>
    )
};