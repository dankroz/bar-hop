import React from "react";
import "./style.css"

export function Table({ children }) {
    return  (
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table> {children}</table>
        </div>
    )  
}

export function TableRow({ children }) {
    return (
        <tr className="table-row">{children}</tr>
    )
}

export function TableHeader({ children }) {
    return (
        <th className="text-center">{children}</th>
    )
}

export function TableData({ children }) {
    return (
        <td className="text-center"><strong>{children}</strong></td>
    )
}

export function TableBody({ children }) {
    return (
        
        <tbody className="scrollit"> {children} </tbody>
    )
}