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
import React, {Component} from "react";
import sample from '../../assets/sample.mp4'

class Realtime extends Component {

    render() {

        return (
            <DashboardLayout>
                <DashboardNavbar/>
                <MDBox pt={6} pb={3}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Card>
                                <video controls autoPlay>
                                    <source src={sample} type="video/mp4">
                                    </source>
                                </video>
                            </Card>
                        </Grid>
                    </Grid>
                </MDBox>
                <Footer/>
            </DashboardLayout>
        );
    }
}

export default Realtime;
