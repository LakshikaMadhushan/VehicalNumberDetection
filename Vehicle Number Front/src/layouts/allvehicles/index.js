
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React, {Component} from "react";
import {strings} from "../../const/strings";
import TextField from "@mui/material/TextField";
import axios from "axios";
import * as xml2js from "xml2js";
import './style.scss'
import loader from '../../assets/loader.jpg'
import nodata from '../../assets/nodata.png'

class AllVehicles extends Component {

    state = {
        data: '',
        input: "",
        isLoading: false,
        isNoData: false
    }
    // YY07XHH
    getAllVehicles = async () => {
        this.setState({isLoading: true})
        axios({
            method: "get",
            url: `https://www.regcheck.org.uk/api/reg.asmx/Check?RegistrationNumber=${this.state.input}&username=lakshika`,
            header: {
                "Content-Type": "application/xml; charset=utf-8"
            }
        })
            .then((response) => {
                let parser = new xml2js.Parser();
                let data = ""
                parser.parseString(response.data,
                    function (err, result) {
                        data = JSON.parse(result.Vehicle.vehicleJson[0])
                    }
                );

                this.setState({data, isLoading: false, isNoData: false})
            }).catch((e) => {
            this.setState({data: "", isLoading: false, isNoData: true})
        })
    }

    onInputHandler = (e) => {
        this.setState({input: e.target.value})
    }

    onKeyDown = (e) => {
        if (e.code === 'Enter') {
            this.getAllVehicles()
        }
    }

    render() {
        let data = this.state.data

        return (
            <DashboardLayout>
                <DashboardNavbar/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={strings.vehicleNo}
                        type="text"
                        variant="outlined"
                        onChange={this.onInputHandler}
                        name={'vehicleNo'}
                        style={{width: '100%'}}
                        value={this.state.input}
                        onKeyDown={this.onKeyDown}
                    />
                </div>
                <MDBox pt={6} pb={3}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            {
                                data !== "" && !this.state.isLoading && <div className="container">
                                    <div className="card">
                                        <div className="card-header">
                                            <img
                                                src={data.ImageUrl}
                                                alt="rover"/>
                                        </div>
                                        <div className="card-body" align={'center'}>
                                            {console.log(data)}
                                            <h4>{data.Description}</h4>
                                            <table>
                                                <tr>
                                                    <td><b>Type :</b></td>
                                                    <td>{data.BodyStyle.CurrentTextValue}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Make :</b></td>
                                                    <td>{data.CarMake.CurrentTextValue}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>CarModel :</b></td>
                                                    <td>{data.CarModel.CurrentTextValue}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Colour :</b></td>
                                                    <td>{data.Colour}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Engine Number :</b></td>
                                                    <td>{data.EngineNumber}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Fuel Type :</b></td>
                                                    <td>{data.FuelType.CurrentTextValue}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Vehicle Identification Number :</b></td>
                                                    <td>{data.VehicleIdentificationNumber}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.isLoading && <div align={'center'}><img width={100} src={loader}/></div>
                            }

                            {
                                this.state.isNoData && !this.state.isLoading &&
                                <div align={'center'}><img width={200} src={nodata}/></div>
                            }
                        </Grid>
                    </Grid>
                </MDBox>
                <Footer/>
            </DashboardLayout>
        );
    }
}

export default AllVehicles;
