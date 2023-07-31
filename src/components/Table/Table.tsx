import React from 'react';

interface TableColumn {
    label: string;
    field: string;
}

interface TableRow {
    [key: string]: string | number | JSX.Element;
}

interface TableProps {
    columns: TableColumn[];
    data: TableRow[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <table className="table table-striped">
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
        </table>
    );
};

export default Table;
