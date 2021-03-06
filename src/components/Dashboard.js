import React, { lazy, Suspense } from "react";
import componentIndex from "../componentIndex";
import data from '../data.json';
import { DashboardContext } from '../DashboardContext'

const Dashboard = (props) => {
    const user = data.find((e) => e.id === parseInt(props.match.params.id));
    const list = user ? user["dashboard-components"] : [];

    return (
        <DashboardContext.Provider value={{
            user
        }}>
            <div>
                <div className="title">Hello {user.fullName}  <a href='/'>back</a></div>
                <div className="dashboard-grid">
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
                </div></div></DashboardContext.Provider>);
};


export default Dashboard;