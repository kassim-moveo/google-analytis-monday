import { AnalyticsDashboard } from "react-analytics-charts";
import { SessionsByDateChart, SessionsGeoChart } from "react-analytics-charts";
import React from 'react'
const A  = ()=>{
    return (
        <AnalyticsDashboard
authOptions={{
  clientId:
    "864996748251-afug5b7q9k8rotk9jgvd2uotjgbni3bd.apps.googleusercontent.com",
}}
renderCharts={(gapi, viewId) => {
  return (
    <div>
      <SessionsByDateChart
        gapi={gapi}
        viewId={viewId}
        showPageViews
        showUsers
      />
      <SessionsGeoChart gapi={gapi} viewId={viewId} showPageViews />
      ... More charts here ...
    </div>
  );
}}
/>
    )
}
export default A