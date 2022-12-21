import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpg";
import {components} from "react-select";

function Basic() {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    useEffect(() => {
        window.location.href = "http://localhost:5000/sign_in"
    }, [])

    return (
        <BasicLayout image={bgImage}>
            {/*<Card>*/}
            {/*    <MDBox*/}
            {/*        variant="gradient"*/}
            {/*        bgColor="info"*/}
            {/*        borderRadius="lg"*/}
            {/*        coloredShadow="info"*/}
            {/*        mx={2}*/}
            {/*        mt={-3}*/}
            {/*        p={2}*/}
            {/*        mb={1}*/}
            {/*        textAlign="center"*/}
            {/*    >*/}
            {/*        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>*/}
            {/*            Sign in*/}
            {/*        </MDTypography>*/}
            {/*    </MDBox>*/}
            {/*    <MDBox pt={4} pb={3} px={3}>*/}
            {/*        <MDBox component="form" role="form">*/}
            {/*            <MDBox mb={2}>*/}
            {/*                <MDInput type="email" label="Email" fullWidth/>*/}
            {/*            </MDBox>*/}
            {/*            <MDBox mb={2}>*/}
            {/*                <MDInput type="password" label="Password" fullWidth/>*/}
            {/*            </MDBox>*/}
            {/*            <MDBox mt={4} mb={1}>*/}
            {/*                <MDButton variant="gradient" color="info"*/}
            {/*                          onClick={() => window.location.href = '/dashboard'} fullWidth>*/}
            {/*                    sign in*/}
            {/*                </MDButton>*/}
            {/*            </MDBox>*/}
            {/*            <MDBox mt={3} mb={1} textAlign="center">*/}
            {/*                <MDTypography variant="button" color="text">*/}
            {/*                    Don&apos;t have an account?{" "}*/}
            {/*                    <MDTypography*/}
            {/*                        component={Link}*/}
            {/*                        to="/authentication/sign-up"*/}
            {/*                        variant="button"*/}
            {/*                        color="info"*/}
            {/*                        fontWeight="medium"*/}
            {/*                        textGradient*/}
            {/*                    >*/}
            {/*                        Sign up*/}
            {/*                    </MDTypography>*/}
            {/*                </MDTypography>*/}
            {/*            </MDBox>*/}
            {/*        </MDBox>*/}
            {/*    </MDBox>*/}
            {/*</Card>*/}
        </BasicLayout>
    );
}

export default Basic;
