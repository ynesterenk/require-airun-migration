$.fn.alpha = function() {
    const gridHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Asset Class</th>
                    <th>Asset Class Index</th>
                    <th>Returns Start Date</th>
                    <th>Returns End Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dummy Asset Class A</td>
                    <td>Index A</td>
                    <td>Dec 2015</td>
                    <td>Nov 2025</td>
                </tr>
                <tr>
                    <td>Dummy Asset Class B</td>
                    <td>Index B</td>
                    <td>Oct 2015</td>
                    <td>Oct 2025</td>
                </tr>
                <tr>
                    <td>Dummy Asset Class C</td>
                    <td>Index C</td>
                    <td>Dec 2019</td>
                    <td>Jul 2022</td>
                </tr>
            </tbody>
        </table>
    `;
    return this.append(gridHTML);
};