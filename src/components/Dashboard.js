import React, { lazy, Suspense } from "react";
import componentIndex from "../componentIndex";
import data from '../data.json';


const Dashboard = (props) => {

    const id = props.match.params.id;
    const user = data.find((e) => e.id === parseInt(id));
    const list = user ? user["dashboard-components"] : [];

    return (<div className="dashboard-grid">
        {
            list.length === 0 && <div> sorry there is no user</div>
        }
        {
            list.map((c, i) => {
                const data = componentIndex[c];
                const Comp = lazy(() => {
                    return new Promise(resolve => resolve(data)).then(
                        (data) => import(`${data.path}`));
                });

                return (
                    <div key={`dashboard-comp${i}`} className='box'>
                        <Suspense fallback={<div>Loading.....</div>}>
                            <Comp />
                        </Suspense>
                    </div>
                )
            })
        }
    </div>);
};


export default Dashboard;