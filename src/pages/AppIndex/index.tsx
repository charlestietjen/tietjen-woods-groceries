import { Button } from "primereact/button"
import { Link } from "react-router-dom"

export const AppIndex = () => {
    return (
        <section>
            <Link to="/groceries">
                <Button label="Grocery List" severity="secondary" text raised />
            </Link>
        </section>
    )
}