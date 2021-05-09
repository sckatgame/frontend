export default function TableScorre({topFive}){

    return (
        <div className="table-item">
            <h3>Top Sckat Players</h3>
            
            <table className="Content-Table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Scorre</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        topFive.map(
                            (e,i) => (
                                <tr key={i+1}>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.scorre}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            
            </table>
                    
        </div>
    );
}    