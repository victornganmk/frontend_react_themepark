import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { job_openings } from "../../data";

const Job_Openings = () => {
    let data = { job_openings };

    const theme = useTheme(getTheme());

    const [search, setSearch] = React.useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    data = {
        nodes: data.job_openings.filter((item) =>
            item.job_title.toLowerCase().includes(search.toLowerCase())
        ),
    };

    const COLUMNS = [
        {   label: "Post Date", renderCell: (item) => item.post_date },
        {   label: "Job Title", renderCell: (item) => item.job_title },
        {   label: "Department", renderCell: (item) => item.department },
        {   label: "Job Type", renderCell: (item) => item.job_type},
    ];

    return (
        <>
            <div className="job_openings">
                <h1>job openings</h1>
                
                <div className="job_openings_table_container">
                    <label htmlFor="search">
                        Search by Job:&nbsp;
                        <input id="search" type="text" value={search} onChange={handleSearch} />
                    </label>
                    <br />
                    <CompactTable columns={COLUMNS} data={data} theme={theme} />
                </div>
                
            </div>

            

        </>
    );
};

export default Job_Openings;