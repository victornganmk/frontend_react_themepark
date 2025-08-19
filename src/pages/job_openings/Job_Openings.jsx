import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { job_openings } from "../../data";

const Job_Openings = () => {
    const theme = useTheme(getTheme());

    const [search, setSearch] = React.useState("");
    const [selectedJob, setSelectedJob] = React.useState(null); // track selected job

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const data = {
        nodes: job_openings.filter((item) =>
        item.job_title.toLowerCase().includes(search.toLowerCase())
        ),
    };

    const handleJobClick = (job) => {
        setSelectedJob(job); // set job details
    };

    const COLUMNS = [
        { label: "Post Date", renderCell: (item) => item.post_date },
        {
        label: "Job Title",
        renderCell: (item) => (
            <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                handleJobClick(item);
            }}
            >
            {item.job_title}
            </a>
        ),
        },
        { label: "Department", renderCell: (item) => item.department },
        { label: "Job Type", renderCell: (item) => item.job_type },
    ];

    return (
        <div className="job_openings">
        <h1>job openings</h1>

        {/* Table container visible only when no job selected */}
        {!selectedJob && (
            <div className="job_openings_table_container">
            <div className="searchbox">
                <label htmlFor="search">
                Search by Job Title:&nbsp;
                <input
                    id="search"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                />
                </label>
            </div>
            <CompactTable columns={COLUMNS} data={data} theme={theme} />
            </div>
        )}

        {/* Job details container visible only when job selected */}
        {selectedJob && (
            <div className="job_openings_job_details">
            <h2>{selectedJob.job_title}</h2>
            <h3>Department:</h3>
            <p>{selectedJob.department}</p>
            <h3>Job type:</h3>
            <p>{selectedJob.job_type}</p>
            <h3>Responsibilities:</h3>
            <div className="list_responsibilities">
                <ul>
                    <li>{selectedJob.responsibilities1}</li>
                    <li>{selectedJob.responsibilities2}</li>
                    <li>{selectedJob.responsibilities3}</li>
                    <li>{selectedJob.responsibilities4}</li>
                </ul>
            </div>
            <h3>Requirements:</h3>
            <div className="list_requirements">
                <ul>
                    <li>{selectedJob.requirements1}</li>
                    <li>{selectedJob.requirements2}</li>
                    <li>{selectedJob.requirements3}</li>
                    <li>{selectedJob.requirements4}</li>
                </ul>
            </div>
            <h3>Benefits:</h3>
            <div className="list_benefits">
                <ul>
                    <li>{selectedJob.benefits1}</li>
                    <li>{selectedJob.benefits2}</li>
                    <li>{selectedJob.benefits3}</li>
                    <li>{selectedJob.benefits4}</li>
                </ul>
            </div>
            <div className="button_container">
                <button className="Back" onClick={() => setSelectedJob(null)}>back</button>
                <button className="Apply">apply</button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Job_Openings;