import React from 'react';
import DriverMotorButton from './DriverMotorButton';

function DriverMotorButtonGrp(props) {
    return (
        <div >
            <table border="0" cellPadding="0" cellSpacing="0" style={{marginLeft: "13px"}}>
                <tbody>
                <tr>
                    <td colSpan="2"><DriverMotorButton type="f" /></td>
                </tr>
                <tr>
                    <td><DriverMotorButton type="s_l" /></td>
                    <td><DriverMotorButton type="s_r" /></td>
                </tr>
                <tr>
                    <td colSpan="2">
                    <DriverMotorButton type="b" />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DriverMotorButtonGrp;