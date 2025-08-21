import * as React from "react";
import { Link } from 'react-router-dom';
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
        { 
            label: "Post Date", 
            renderCell: (item) => item.post_date,
            resize: { minWidth: 100, width: "10%", maxWidth: 150 },
        },
        {
            label: "Job Title",
            renderCell: (item) => (
            <Link
                to="#"
                onClick={(e) => {
                e.preventDefault();
                handleJobClick(item);
                }}
            >
                {item.job_title}
            </Link>
            ),
            resize: { width: "40%" },
        },
        { 
            label: "Department", 
            renderCell: (item) => item.department,
            resize: { width: "25%" },
        },
        { 
            label: "Job Type", 
            renderCell: (item) => item.job_type,
            resize: { width: "25%" },
        },
    ];

    return (
        <div className="job_openings">
            <h1 className="section-title">job openings</h1>

            {/* Table container visible only when no job selected */}
            {!selectedJob && (
                <div className="job_openings_table_container">
                    <div className="searchbox">
                        <label htmlFor="search" className="section-subtitle search_title">
                        Search by Job Title:&nbsp;  
                        </label>
                        <input
                            id="search"
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Enter the key word of job title"
                            className="search_input"
                        />
                    </div>
                    <CompactTable columns={COLUMNS} data={data} theme={theme} />
                </div>
            )}

            {/* Job details container visible only when job selected */}
            {selectedJob && (
                <div className="job_openings_job_details">
                <h2 className="section-subtitle">{selectedJob.job_title}</h2>
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