import React from 'react';

const Departments = () => (
    <>
    <div class="topic">
        <h2>Departments</h2>
    </div>
        <table>
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Student Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AI/DS</td>
                    <td>180</td>
                </tr>
                <tr>
                    <td>AI/ML</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>CSE</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>IT</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>ECE</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>EEE</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>Mechanical</td>
                    <td>100</td>
                </tr>
                {/* Add more departments as needed */}
            </tbody>
        </table>
    </>
);

export default Departments;