import React from 'react';
import { Table } from 'reactstrap';

export const columns = [
    { label: 'Name', field: 'name' },
    { label: 'Created', field: 'created' },
    { label: 'Category', field: 'category' },
    { label: 'Content', field: 'content' },
    { label: 'Dates', field: 'dates' },
    { label: 'Actions', field: 'icons' },
];

interface TableProps {
    columns: { label: string; field: string }[];
    data: Record<string, any>[];
}

const TableComponent: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column.field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableComponent;
