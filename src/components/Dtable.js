import React, { Component } from 'react'
// import {ReactTable,  data, columns} from 'react-table';
import ReactTable from 'react-table';
import { log } from 'util';
import { logicalExpression } from '@babel/types';
import Chart from '../components/chart';

export default class Dtable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tableData : []
        }
    }
    componentDidMount () {
        const url = "https://totalcloud-static.s3.amazonaws.com/intern.json";
        fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            //console.log("hello Avinash");
            
            this.setState({
                tableData: data
            })
            console.log(this.state.tableData);
        })
    }

    render() {
        return (
            <div className="container"> 
                <div className="card">
                
                    <table className="table">
                        <tr>
                            <th>
                                Intern
                            </th>
                            <th>
                                Assignment 
                            </th>
                            <th>
                            </th>
                            <th>
                                Start Date
                            </th>
                            <th>
                                End Date
                            </th>
                        </tr>
                        {
                            this.state.tableData.map((value) => {
                               return  (<tr id = {value.id}>
                                    <td>
                                        {value.id}
                                    </td>
                                    <td>
                                        <input 
                                            type = "checkbox" 
                                
                                        />
                                    </td>
                                    <td className = "col">
                                        {value.name}
                                    </td>
                                    <td>
                                        {value.start}
                                    </td>
                                    <td>
                                        {value.end}
                                    </td>
                                </tr>);
                            })
                        }
                    </table>
                </div>
                {/* <Chart chartdata = {this.state.tableData}/> */}
            </div> 
        )
    }
}
