import React from "react";
import { AnalyticsDashboard } from "react-analytics-charts";
import {
  SessionsByDateChart,
  ActiveUsersChart,
  SessionsByHourChart
} from "react-analytics-charts";

class MyAnalyticsDashBoard extends React.Component {
  componentDidMount() {
    
    this.interval = setInterval( () => {
      return this.setState({ time: Date.now() })
    }, 1000*60);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
  return (
    <div style={{ color:"white" }}>
    <AnalyticsDashboard
      authOptions={{
        clientId:
          "798387791418-1q56un70liaijau2sgl16014b4rdhoq2.apps.googleusercontent.com",
      }}
      renderCharts={(gapi, viewId) => {
        const chartStyles = {
          maxWidth: 600,
        };
        return (
          <div>
            <SessionsByDateChart
              gapi={gapi}
              viewId={viewId}
              showPageViews
              showUsers
              style={chartStyles}
            />
            <ActiveUsersChart
        gapi={gapi}
        viewId={viewId}
        days={7}
        activeUserDays={1}
        style={chartStyles}
      />
      <SessionsByHourChart gapi={gapi} viewId={viewId} days={28}  style={chartStyles} 
      query={{
        ids: viewId,
        "start-date": "20daysAgo",
        "end-date": "today",
        metrics: "ga:users",
       
      }}
      />
          </div>
        );
      }}
    />
    </div>
  );
    }
}

export default MyAnalyticsDashBoard;
