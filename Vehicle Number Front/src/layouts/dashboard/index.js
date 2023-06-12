import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import {strings} from '../../const/strings'
import {dashboardData} from '../../services/dashboard'
import {Component} from "react";
import {dashbord} from '../../css/dashboard.css';

const {sales, tasks} = reportsLineChartData;

class Dashboard extends Component {

    state = {
        noOfVehicles: 0,
        activeVehicles: 0,
        revenue: 0,
        unsettleVehicles: 0,
    }

    componentDidMount() {
        dashboardData().then(res => {
            console.log(res)
            if (res.data.success) {
                this.setState({
                    noOfVehicles: res.data.data.noOfVehicles,
                    activeVehicles: res.data.data.activeVehicles,
                    revenue: res.data.data.revenue,
                    unsettleVehicles: res.data.data.unsettleVehicles,
                })
            }
        })
    }

    render() {
        return (
            <DashboardLayout>
                <DashboardNavbar/>
                <MDBox py={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={6} >
                            <MDBox mb={1.5}>
                                <ComplexStatisticsCard

                                    color="dark"
                                    icon="directions_car"
                                    title={strings.totalVehicles}
                                    count={this.state.noOfVehicles}
                                    percentage={{
                                        color: "success",
                                        amount: "+55%",
                                        label: "than lask week",
                                    }}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <MDBox mb={1.5}>
                                <ComplexStatisticsCard
                                    icon="leaderboard"
                                    title={strings.activeVehicles}
                                    count={this.state.activeVehicles}
                                    percentage={{
                                        color: "success",
                                        amount: "+3%",
                                        label: "than last month",
                                    }}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <MDBox mb={1.5}>
                                <ComplexStatisticsCard
                                    color="success"
                                    icon="store"
                                    title="Revenue"
                                    count={this.state.revenue}
                                    percentage={{
                                        color: "success",
                                        amount: "+1%",
                                        label: "than yesterday",
                                    }}
                                />
                            </MDBox>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <MDBox mb={1.5}>
                                <ComplexStatisticsCard
                                    color="primary"
                                    icon="person_add"
                                    title={strings.unsettleVehicles}
                                    count={this.state.unsettleVehicles}
                                    percentage={{
                                        color: "success",
                                        amount: "",
                                        label: "Just updated",
                                    }}
                                />
                            </MDBox>
                        </Grid>
                    </Grid>
                </MDBox>
                <Footer/>
            </DashboardLayout>
        );
    }
}

export default Dashboard;
