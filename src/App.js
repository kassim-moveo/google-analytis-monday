import React from "react";
import { AnalyticsDashboard } from "react-analytics-charts";
import {
  SessionsByDateChart,
  SessionsGeoChart,
  ActiveUsersChart,
} from "react-analytics-charts";

function App() {
  return (
    <AnalyticsDashboard
      authOptions={{
        clientId:
          "798387791418-1q56un70liaijau2sgl16014b4rdhoq2.apps.googleusercontent.com",
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
             
        
{console.log(viewId)}
          </div>
        );
      }}
    />
  );
}

export default App;
