export const getGroceries = async () => {
    const response = await fetch("/api/groceries", {method: "get"})
    if (!response){
        return [];
    };
    const json = await response.json();
    return json;
};

export const addGrocery = async (grocery: {id: string, displayName: string, quantity: number, category: number}) => {
    try {
    const response = await fetch("/api/groceries", {method: "post", headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(grocery)});
    const result = await response.json();
    return result;
    } catch (error) {
        console.error("Error:", error);
    }
};