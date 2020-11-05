import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import InlineCell from './inLineCell';

class Spreadsheet extends Component {
    render() {
        return (
            <Table striped bordered >
                <thead >
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <InlineCell />
                    <InlineCell />
                    <InlineCell />
                    <InlineCell />
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

}

export default Spreadsheet;