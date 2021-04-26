import React from "react";
import * as d3 from "d3";
import './App.css';
import elemax from './pic/ele-max.png';
import elemin from './pic/ele-min.png';
import eleavg from './pic/ele-avg.png';
import eleprcp from './pic/ele-prcp.png';
import elesnow from './pic/ele-snow.png';
import latmax from './pic/lat-max.png';
import latmin from './pic/lat-min.png';
import latavg from './pic/lat-avg.png';
import latprcp from './pic/lat-prcp.png';
import latsnow from './pic/lat-snow.png';
import lonmax from './pic/lon-max.png';
import lonmin from './pic/lon-min.png';
import lonavg from './pic/lon-avg.png';
import lonprcp from './pic/lon-prcp.png';
import lonsnow from './pic/lon-snow.png';

const overallStyle = {marginLeft: "2em", marginRight: "2em", marginTop: "1em", marginBottom: "1em"}

function App() {
  d3.csv("https://raw.githubusercontent.com/wz0805-1736705/load-data-example/main/weather.csv").then(function(data) {
    console.log(data);
  });
  return (
    <div style={overallStyle}>
      <h1>Exploratory Data Analysis</h1>
      <h1>Assignment 2</h1>
      <h1>INFO 474 SP 2021</h1>
      <h1>Zhan Wu</h1>
      <h2>1. Introduction:</h2>
      <div style={overallStyle}>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          The dataset I am using 
          for this assignment is about the weather in the United States in 2017.
          After download and do sanity check on the dataset, I found out that the
          dataset includes <b>416937</b> rows and <b>15</b> columns. The column names and the 
          data types are <b>station(object), state(object), latitude(float64), 
          longitude(float64), elevation(float64), date(int64), TMIN(float64), 
          TMAX(float64), TAVG(float64), AWND(float64), WDF5(float64), WSF5(float64), 
          SNOW(float64), SNWD(float64), and PRCP(float64)</b>.
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          By looking at these columns, I came up with the question that <b>what are 
          some major factors affect the temperature, precipitation, and snow?</b>
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          In order to answer the question, I performed some data analysis process in Python
          and also create some plots for data visualization. I also perform data cleansing
          before I dig into the dataset. Everytime I construct dataframe for each plot, I 
          always drop rows with null values since it will cause errors when I do data 
          visualizations. In addition, when I am creating data visualizations to see the 
          relationships between longitude and other columns, I always subtract 360 from 
          the longitude if it is larger than 0 because the United States has some territory
          in the middle of Pacific Ocean. Therefore, after subtracting 360 from those longitudes 
          it will be better to see trends and find out relationships between longitude and other 
          columns.  
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I chose <b>elevation, latitude, and longitude</b> as three factors to see how does each of 
          them affect the <b>maximum temperature, minimum temperature, average temperature, snow,
          and precipitation</b>.
        </p>
      </div>
      <h2>2. Data visualization and analysis:</h2>
      <div style={overallStyle}>
        <h3>(1) Relationship between elevation and temperature</h3>
        <div style={overallStyle}>
          <img src={elemax} alt="elevation maximum temperature plot"/>
          <img src={elemin} alt="elevation minimum temperature plot"/>
          <img src={eleavg} alt="elevation average temperature plot"/>
          <p style={overallStyle}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at three plots above, we can see that as the elevation increases, 
            the maximum, minimum, and average temperatures tend to decrease. When I am 
            doing the calculation and plot the regression line in Python, I had some findings
            from that. The maximum temperature starts from 69.86 F, and as elevation increases 
            for 1 unit, the maximum temperature tends to decrease for 0.006 F. The minimum 
            temperature starts from 49.81 F, and as elevation increases for 1 unit, the minimum 
            temperature tends to decrease for 0.007 F. The average temperature starts from 56.44 F, 
            and as elevation increases for 1 unit, the average temperature tends to decrease 
            for 0.0055 F.
          </p>
          <br/>
        </div>
        <h3>(2) Relationship between elevation and precipitation</h3>
        <div style={overallStyle}>
          <img src={eleprcp} alt="elevation precipitation plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the elevation increases, 
            the precipitation tends to remain no change. When I am doing the calculation 
            and plot the regression line in Python, I found out that the precipitation starts 
            from 0.119 inches, and as elevation increase for 1 unit, the precipitation tends to decrease for 
            5.406<sup>-6</sup> inches, which means that the changes is very subtle.
          </p>
          <br/>
        </div>
        <h3>(3) Relationship between elevation and snow</h3>
        <div style={overallStyle}>
          <img src={elesnow} alt="elevation snow plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the elevation increases, 
            the snow tends to remain no change. When I am doing the calculation 
            and plot the regression line in Python, I found out that the snow starts 
            from 0.042 inches, and as elevation increase for 1 unit, the snow tends to 
            increase for 2.355<sup>-5</sup> inches, which means that the changes 
            is very subtle.
          </p>
          <br/>
        </div>
        <h3>(4) Relationship between latitude and temperature</h3>
        <div style={overallStyle}>
          <img src={latmax} alt="latitude maximum temperature plot"/>
          <img src={latmin} alt="latitude minimum temperature plot"/>
          <img src={latavg} alt="latitude average temperature plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at three plots above, we can see that as the latitude increases, 
            the maximum, minimum, and average temperatures tend to decrease. When I am 
            doing the calculation and plot the regression line in Python, I had some findings
            from that. The maximum temperature starts from 115.48 F, and as latitude increases 
            for 1 unit, the maximum temperature tends to decrease for 1.276 F. The minimum 
            temperature starts from 90.83 F, and as latitude increases for 1 unit, the minimum 
            temperature tends to decrease for 1.188 F. The average temperature starts from 87.89 F, 
            and as latitude increases for 1 unit, the average temperature tends to decrease 
            for 0.945 F.
          </p>
          <br/>
        </div>
        <h3>(5) Relationship between latitude and precipitation</h3>
        <div style={overallStyle}>
          <img src={latprcp} alt="latitude precipitation plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the latitude increases, 
            the precipitation tends to slightly decrease. When I am doing the calculation 
            and plot the regression line in Python, I found out that the precipitation starts 
            from 0.15 inches, and as latitude increase for 1 unit, the precipitation tends to decrease for 
            0.00091 inches.
          </p>
          <br/>
        </div>
        <h3>(6) Relationship between latitude and snow</h3>
        <div style={overallStyle}>
          <img src={latsnow} alt="latitude snow plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the latitude increases, 
            the snow tends to remain no change. When I am doing the calculation 
            and plot the regression line in Python, I found out that the snow starts 
            from -0.198 inches, and as latitude increase for 1 unit, the snow tends to 
            increase for 0.00651 inches.
          </p>
          <br/>
        </div>
        <h3>(7) Relationship between longitude and temperature</h3>
        <div style={overallStyle}>
          <img src={lonmax} alt="longitude maximum temperature plot"/>
          <img src={lonmin} alt="longitude minimum temperature plot"/>
          <img src={lonavg} alt="longitude average temperature plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at three plots above, we can see that as the longitude increases, 
            the maximum, minimum, and average temperatures tend to increase. When I am 
            doing the calculation and plot the regression line in Python, I had some findings
            from that. The maximum temperature starts from 90.36 F, and as longitude increases 
            for 1 unit, the maximum temperature tends to increase for 0.262 F. The minimum 
            temperature starts from 69.07 F, and as longitude increases for 1 unit, the minimum 
            temperature tends to increase for 0.260 F. The average temperature starts from 77.254 F, 
            and as longitude increases for 1 unit, the average temperature tends to decrease 
            for 0.269 F.
          </p>
          <br/>
        </div>
        <h3>(8) Relationship between longitude and precipitation</h3>
        <div style={overallStyle}>
          <img src={lonprcp} alt="longitude precipitation plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the longitude increases, 
            the precipitation tends to slightly increase. When I am doing the calculation 
            and plot the regression line in Python, I found out that the precipitation starts 
            from 0.154 inches, and as longitude increase for 1 unit, the precipitation tends 
            to increase for 0.0004 inches.
          </p>
        </div>
        <h3>(9) Relationship between longitude and snow</h3>
        <div style={overallStyle}>
          <img src={lonsnow} alt="longitude snow plot"/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            By looking at the plot above, we can see that as the longitude increases, 
            the snow tends to slightly increase. When I am doing the calculation 
            and plot the regression line in Python, I found out that the snow starts 
            from 0.111 inches, and as longitude increase for 1 unit, the snow tends 
            to increase for 0.0006 inches.
          </p>
          <br/>
        </div>
      </div>
      <h2>3. Summary:</h2>
      <div style={overallStyle}>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          After doing data analysis and construct data visualizations in Python, I can conclude 
          that based on the factors I chose, which are elevation, latitude, and longitude, all three 
          of them are major factors that affect the minimum, maximum, and average temperature in the 
          United States in 2017. As elevation increases, latitude increases, and longitude decreases, 
          the temperature tends to decrease. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          In addition, elevation is not a major factor that affect 
          the precipitation and snow since as elevation increases, precipitation and snow tend to remain 
          no change or very subtle changes. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Finally, latitude and longitude are both major factors that affect 
          the precipitation and snow since the precipitation tends to decrease as the latitude increases 
          and the longitude decreases. And the snow tends to decrease as the latitude decreases and the longitude 
          decreases.
        </p>
      </div>
    </div>
      );
  }

      


export default App;
