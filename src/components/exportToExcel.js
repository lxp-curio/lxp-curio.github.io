import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export default class ExportToExcel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
            fileExtension: '.xlsx'
        }

        this.exportToCSV = this.exportToCSV.bind(this);
    };

    exportToCSV () {
        const ws = XLSX.utils.json_to_sheet(this.props.csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: this.state.fileType});
        FileSaver.saveAs(data, this.props.fileName + this.state.fileExtension);
    }

    render() {
        return (
            <button className="btn btn-success" onClick={ this.exportToCSV }>Export</button>
        )
    }
}