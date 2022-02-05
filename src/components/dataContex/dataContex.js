import React, {useState,createContext } from 'react';
import fakeData from '../../fakeData'

export const dataContex1=createContext()
export const DataContex = (props) => {
    const [products,setProducts]=useState(fakeData)
    return (
        <dataContex1.Provider value={[products,setProducts]}>
            {props.children}
        </dataContex1.Provider>
    );
};

export default DataContex;