import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { queries } from "@testing-library/react";


const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = await response.data;
    return products;
};



const Infos = () => {
    const {status, data , error , isFetching , isLoading ,isError } = useQuery(
        ['products'],
        fetchProducts,
        { staleTime : 60000}
        );

    if (isLoading) {
        console.log("is Loading")
        return <div>Loading..</div>
    }
    if (isError) {
        console.log(error)
        return <div>Error..</div>
    }
    if (isFetching) {
        console.log("is re-Loading")
        return <div>Re-Loading..</div>
    }



    return (
        <div>
            {isLoading ? 'Loading...' : 
                isError ? 'Error' : 
                    data ? data.map((item) => 
                    <div className="container" key={item.id}>{item.title}</div>) : "There's no data"}
        </div>
    )
};

export default Infos;