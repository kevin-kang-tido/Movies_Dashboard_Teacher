/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Popular from "./dataTableform/Popular";
import Upcomingtable from "./dataTableform/Upcomingtable";
import Nowplayingtable from "./dataTableform/Nowplayingtable";
import Topratetable from "./dataTableform/Topratetable";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
         {/* data table part popular start */}
         <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6" className="text-danger font-weight-bold display-3">Table Popular Movies</SoftTypography>
          </SoftBox>
          <SoftBox>
            <Popular/>
            {/* <Table columns={prCols} rows={prRows} /> */}
          </SoftBox>
         {/* data table part popular end */}
         {/* data table part Upcoming end */}
         <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6" className="text-danger font-weight-bold display-3">Table Movies Upcoming</SoftTypography>
          </SoftBox>
          <SoftBox>
            <Upcomingtable/>
          </SoftBox>
         {/* data table part popular end */}
          {/* data table part nowplaying */}
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6"className="text-danger font-weight-bold display-3">Table Movies Now Playing </SoftTypography>
          </SoftBox>
          <SoftBox>
            <Nowplayingtable/>
          </SoftBox>
         {/* data table part nowplaying end */}
         {/* data table part actor */}
         <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6"className="text-danger font-weight-bold display-3">Table Movies Top Rated </SoftTypography>
          </SoftBox>
          <SoftBox>
            <Topratetable/>
          </SoftBox>
         {/* data table part actor end */}
          {/* test dashboard start */}
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6" className="text-danger font-weight-bold display-3">Table Application</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
         {/* test dashboard end */}

      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
