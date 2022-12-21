/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 13/12/2021 - 1:01 PM
 */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import {vehicleTableColumn} from '../../const/tables'
import AddNew from './addNew'
import React, {Component} from "react";
import {getAllVehicles} from "../../services/vehicle";
import MDButton from "../../components/MDButton";
import UpdateVehicle from "./update";
import DeleteVehicle from "./delete";
import {strings} from "../../const/strings";
import TextField from "@mui/material/TextField";

class Vehicles extends Component {

    state = {
        vehicles: []
    }

    componentDidMount() {
        this.getAllVehicles()
    }

    getAllVehicles = () => {
        getAllVehicles().then(res => {
            if (res.data.success) {
                this.setState({
                    vehicles: res.data.data
                })
            }
        })
    }

    render() {
        let row = []
        this.state.vehicles.map(v => {
            row.push({
                ownerName: v.name,
                vehicleNo: v.vehicleNo,
                model: v.model,
                colour: v.colour,
                type: v.type,
                action: (<div style={{display: 'flex'}}>
                    <UpdateVehicle loadAll={this.getAllVehicles} data={v}/>
                    <DeleteVehicle loadAll={this.getAllVehicles} id={v}/>
                </div>),
            })
        })

        return (
            <DashboardLayout>
                <DashboardNavbar/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={strings.vehicleNo}
                            type="text"
                            variant="standard"
                            onChange={this.onInputHandler}
                            name={'vehicleNo'}
                        />
                    </div>
                    <AddNew loadAll={this.getAllVehicles}/>
                </div>
                <MDBox pt={6} pb={3}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Card>
                                <MDBox
                                    mx={2}
                                    mt={-3}
                                    py={3}
                                    px={2}
                                    variant="gradient"
                                    bgColor="info"
                                    borderRadius="lg"
                                    coloredShadow="info"
                                >
                                    <MDTypography variant="h6" color="white">
                                        All Vehicles Data
                                    </MDTypography>
                                </MDBox>
                                <MDBox pt={3}>
                                    <DataTable
                                        table={{columns: vehicleTableColumn, rows: row}}
                                        isSorted={false}
                                        entriesPerPage={false}
                                        showTotalEntries={false}
                                        noEndBorder
                                    />
                                </MDBox>
                            </Card>
                        </Grid>
                    </Grid>
                </MDBox>
                <Footer/>
            </DashboardLayout>
        );
    }
}

export default Vehicles;
