import React from "react";
import "./style.css"

export function Table({ children }) {
    return  (
        <div>
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
        <td className="text-center">{children}</td>
    )
}

export function TableBody({ children }) {
    return (
        <tbody> {children} </tbody>
    )
}