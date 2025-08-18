import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

import { job_vacancies } from "../../data";

const Job_Openings = () => {
    let data = { job_vacancies };

    const theme = useTheme(getTheme());

    const [search, setSearch] = React.useState("");

    const handleSearch = (event) => {
    setSearch(event.target.value);
    };

    data = {
    nodes: data.job_vacancies.filter((item) =>
        item.post_date.toLowerCase().includes(search.toLowerCase())
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
        <label htmlFor="search">
        Search by Job:&nbsp;
        <input id="search" type="text" value={search} onChange={handleSearch} />
        </label>
        <br />

        <CompactTable columns={COLUMNS} data={data} theme={theme} />
    </>
    );
};

export default Job_Openings;