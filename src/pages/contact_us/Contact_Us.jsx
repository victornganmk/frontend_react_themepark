import React from 'react'
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { 
            contact_us_contact_info_table_data,
            contact_us_bus_table_data_hki,
            contact_us_bus_table_data_kt,
            contact_us_bus_table_data_nt,
            contact_us_carpark_table_data,
            contact_us_minibus_table_data_hki,
            contact_us_minibus_table_data_kt,
            contact_us_minibus_table_data_nt,
        } from '../../data';

const contact_info_table_header = [
    { label: 'Subject', renderCell: (item) => item.subject },
    { label: 'Email', renderCell: (item) => item.email },
];

const bus_table_header = [
    { label: 'Company', renderCell: (item) => item.company },
    { label: 'Number', renderCell: (item) => item.number },
    { label: 'Route', renderCell: (item) => item.route },
];

const minibus_table_header = [
    { label: 'Company', renderCell: (item) => item.company },
    { label: 'Number', renderCell: (item) => item.number },
    { label: 'Route', renderCell: (item) => item.route },
];

const carpark_table_header = [
    { label: 'Days', renderCell: (item) => item.days },
    { label: 'Fee', renderCell: (item) => item.fee },
];

const contact_info_table_data = { nodes: contact_us_contact_info_table_data };
const bus_table_data_hki = { nodes: contact_us_bus_table_data_hki };
const bus_table_data_kt = { nodes: contact_us_bus_table_data_kt };
const bus_table_data_nt = { nodes: contact_us_bus_table_data_nt };
const minibus_table_data_hki = { nodes: contact_us_minibus_table_data_hki };
const minibus_table_data_kt = { nodes: contact_us_minibus_table_data_kt };
const minibus_table_data_nt = { nodes: contact_us_minibus_table_data_nt };
const carpark_table_data = { nodes: contact_us_carpark_table_data };

const Contact_Us = () => {
    const theme = useTheme({
        Table:`
        width: 100%;
        margin: 0 auto;
        color: black;
        `,
        HeaderRow: `
            background-color: #d2e9fb;
            `,
        Row: `
            &:nth-of-type(odd) {
            background-color: #bee3f9;
            }

            &:nth-of-type(even) {
            background-color: #d2e9fb;
            }
        `,
        });

    return (
        <div className="contact_us">
            <div className="contact_info">
                <h1 className='section-title'>contact us</h1>
                <p>Do you have any questions or comments for us? We always enjoy hearing from our guests, please call us at (852) 2345 6789 or send us an email along with your personal information including name and phone number.</p>
                <div className="contact_info_table">
                    <CompactTable columns={contact_info_table_header} data={contact_info_table_data} theme={theme}/>
                </div>
                <p>8/F. WONG TZE BUILDING 71 HOI YUEN ROAD KWUN TONG KOWLOON</p>
                <div className="map_container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.7814258705714!2d114.22442816953183!3d22.31108523943497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040145637b41a7%3A0xab827da0184aef07!2z5riv5bCI6KeA5aGY5pWZ5a245Lit5b-D!5e0!3m2!1szh-TW!2shk!4v1755227348732!5m2!1szh-TW!2shk" 
                        width="100%" 
                        height="450" 
                        style={{border:0}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </div>
            <div className="public_transportation">
                <h2 class="section-subtitle">public transportation</h2>
                <div className="mtr">
                    <h3>mtr</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, vel!</p>
                </div>
                <div className="bus">
                    <h3>bus</h3>
                    <h4>Hong Kong Island</h4>
                    <CompactTable columns={bus_table_header} data={bus_table_data_hki} theme={theme}/>
                    <h4>Kowloon</h4>
                    <CompactTable columns={bus_table_header} data={bus_table_data_kt} theme={theme}/>
                    <h4>New Territories</h4>
                    <CompactTable columns={bus_table_header} data={bus_table_data_nt} theme={theme}/>
                </div>
                <div className="minibus">
                    <h3>minibus</h3>
                    <h4>Hong Kong Island</h4>
                    <CompactTable columns={minibus_table_header} data={minibus_table_data_hki} theme={theme}/>
                    <h4>Kowloon</h4>
                    <CompactTable columns={minibus_table_header} data={minibus_table_data_kt} theme={theme}/>
                    <h4>New Territories</h4>
                    <CompactTable columns={minibus_table_header} data={minibus_table_data_nt} theme={theme}/>
                </div>
            </div>
            <div className="carpark">
                <h2 class="section-subtitle">car park</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, ad.</p>
                <CompactTable columns={carpark_table_header} data={carpark_table_data} theme={theme}/>
            </div>
        </div>
    );
}

export default Contact_Us