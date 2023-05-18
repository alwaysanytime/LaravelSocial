import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { setMetaData } from '../../config/config';
import { useParams } from 'react-router';
import ReactTooltip from 'react-tooltip';
import { displayNumber } from '../../config/config';

class AnalyticsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.addSymbols = this.addSymbols.bind(this);
        this.now = new Date().toISOString().slice(0, 10);
        this.state = {
            total: {view: 0, click: 0},
            part: {view: 0, click: 0},
            from : this.now.toString(),
            to: this.now.toString(),
            details: [
                {device: 'Mobile', view:0, click: 0},
                {device: 'Other', view:0, click: 0},
                {device: 'Tablet', view:0, click: 0},
                {device: 'Desktop', view:0, click: 0},
            ],
            country: [],
            city: [],
            viewbydate: [],
            clickbydate: [],
            ctr: [],
            current: [],
            links: [],
            ref: [],
            totalref: [],
            totallinkview: 1,
            sublinkview: []
        };
    }

    byCountry = () => {
        document.getElementById('city').classList.remove('text-primary');
        document.getElementById('country').classList.add('text-primary');
        this.setState({current: [...this.state.country]});
    }

    byCity = () => {
        document.getElementById('city').classList.add('text-primary');
        document.getElementById('country').classList.remove('text-primary');
        this.setState({current: [...this.state.city]});
    }

    addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

    compare = (a, b) => b.view - a.view;

    componentDidMount() {
        setMetaData("Analytics - Cookie", "Analytics Page");
        this.getData(7);
    }

    refreshData = (event) => {
        this.getData(event.target.value);
    }

    getData = (period) => {
        let data = {period};
        if ("admin" in this.props)
            data = {period, username: this.props.params.username};
        axios.post('/useranalytics', data)
            .then(res => {
                if (res.status == 200) {
                    const _data = res.data;
                    let details = Object.keys(_data.details).map(key => ({device: key, view: _data.details[key].view, click: _data.details[key].click}));
                    let city = Object.keys(_data.city).map(key => ({name: key, view: _data.city[key].view, click: _data.city[key].click}));
                    let country = Object.keys(_data.country).map(key => ({name: key, view: _data.country[key].view, click: _data.country[key].click}));
                    details.sort(this.compare);
                    city.sort(this.compare);
                    country.sort(this.compare);
                    let _dateclick = [], _dateview = [], _ctr = [];
                    Object.keys(_data.date).forEach(date => {
                        _dateclick.push({label: date, y:_data.date[date].click});
                        _dateview.push({label: date, y:_data.date[date].view});
                        _ctr.push({label: date, y:(!_data.date[date].view ? 0 : _data.date[date].click * 100 / _data.date[date].view).toFixed(2) + "%"});
                    });
                    let links = Object.keys(_data.links).map(link => ({url: _data.links[link].url, view: _data.links[link].clicks, title: _data.links[link].title}));

                    let ref = Object.keys(_data.ref).map(link => {
                        const _link = _data.ref[link];
                        let sublinks = Object.keys(_link).map(key => ({link: key.replace('http://', '').replace('https://', '').replace('www.', ''), view: _link[key], url: key}));
                        return {host: link.replace('http://', '').replace('https://', '').replace('www.', ''), view: _data.ref[link].view, sublinks}
                    });

                    links.sort(this.compare);
                    ref.sort(this.compare);
                    const reflength = ref.reduce((prev, link) => prev + link.view, 0);
                    const linklength = links.reduce((prev, link) => prev + link.view, 0);
                    let sublinkview = Array(ref.length);
                    sublinkview.fill(false);
                    this.setState({..._data, details, city, current: country, country, links, viewbydate: _dateclick, clickbydate: _dateview, ctr: _ctr, ref, totallinkview: linklength, reflength: reflength, sublinkview});
                }
            })
    }

    setSubLinkView = (index) => {
        const _link = this.state.sublinkview.map((v, _index) => index == _index ? !v : false);
        this.setState({sublinkview: _link});
    }

    render() {
        const options = {
            animationEnabled: true,
            title: {
              text: `Views And Clicks (${this.state.from}~${this.state.to})`
            },
            axisX: {
				valueFormatString: "MMMM"
			},
			axisY: {
				prefix: "$",
				labelFormatter: this.addSymbols
			},
			toolTip: {
				shared: true
			},
            colorSet: "colorSet2",
            legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
            data: [{
                    type: "column",
                    name: "Views",
                    showInLegend: true,
                    dataPoints: this.state.viewbydate
                },
                {
                    type: "line",
                    name: "CTR",
                    showInLegend: true,
                    dataPoints: this.state.ctr
                },
                {
                    type: "area",
                    markerBorderColor: "white",
				    markerBorderThickness: 2,
                    name: "Clicks",
                    showInLegend: true,
                    dataPoints: this.state.clickbydate
                },
            ]
         }

        return <div className="d-flex h-100">
            <div className='d-flex flex-column w-100 h-100 bg-white scroll bg-white home-layout'>
                <div className="col-12 col-xl-7 divide-light-right p-0 h-100">
                    <div className="settings-header d-flex justify-content-between">
                        <div>Analytics</div>
                        <div className='d-flex'>
                            <select class="form-control transparent-input" onChange={this.refreshData}>
                                <option value="7">Last 7 Days</option>
                                <option value="30">Last Month</option>
                                <option value="all">All</option>
                            </select>
                        </div>
                    </div>
                    <ReactTooltip id='traffic-desc' type='dark' place="right" style={{maxWidth: 300}}>
                        <span>Excluding direct traffic to your profile (bookings247.co/{this.props.user.username}).<br/>Direct traffic has no referring website or location to track.</span>
                    </ReactTooltip>
                    <table className="w-100 table-container">
                        <thead>
                            <tr>
                                <td>Total</td>
                                <td>{displayNumber(this.state.part.view)} Views</td>
                                <td>{displayNumber(this.state.part.click)} Clicks</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='p-title'>
                                <td>
                                    Traffic Sources
                                    <a data-tip data-for='traffic-desc' className="ml-2"><i class="font-bold bi bi-info-circle text-dark"></i></a>
                                </td>
                                <td>Views / Clicks</td>
                                <td>Share</td>
                            </tr>
                            {
                                this.state.reflength ? this.state.ref.map((ref, index) => (
                                    ref.view ?
                                    <>
                                    <tr onClick={() => this.setSubLinkView(index)}>
                                        <td>
                                            <i class={`bi ${this.state.sublinkview[index] ? 'bi-caret-down-fill' : 'bi-caret-right-fill'} text-gray`}></i>
                                        <span className="ml-3">{ref.host}</span></td>
                                        <td>{displayNumber(ref.view)}</td>
                                        <td>{(ref.view * 100 / this.state.reflength).toFixed(0)}%</td>
                                    </tr>
                                    {
                                        this.state.sublinkview[index] ? ref.sublinks.map(sub => (sub.link != "view" ? <tr className="sub-traffic">
                                            <td><a href={sub.url} target="_blank">{sub.link.length > 60 ? sub.link.substring(0, 60) + "..." : sub.link}</a></td>
                                            <td>{displayNumber(sub.view)}</td>
                                            <td>{(sub.view / ref.view * 100).toFixed(0)}%</td>
                                        </tr> : "")) : ''
                                    }
                                    </> : ''
                                )) : <tr><td>No Data</td><td>-</td><td>-</td></tr>
                            }
                            <tr className='p-header'>
                                <td>Outbound Clicks</td>
                            </tr>
                            {
                                this.state.links.map(link => (
                                    link.view ?
                                    <tr>
                                        <td>{link.title}</td>
                                        <td>{displayNumber(link.view)}</td>
                                        <td>{(link.view * 100 / this.state.totallinkview).toFixed(0)}%</td>
                                    </tr> : ''
                                ))
                            }
                            <tr className='p-header'>
                                <td>Locations</td>
                            </tr>
                            {
                                this.state.current.map(co => (
                                        co.view ?
                                    <tr>
                                        <td>{co.name}</td>
                                        <td>{displayNumber(co.view)}</td>
                                        <td>{(co.view * 100 / this.state.part.view).toFixed(0)}%</td>
                                    </tr> : ''
                                ))
                            }
                            <tr className='p-header'>
                                <td>Devices</td>
                            </tr>
                            {
                                this.state.details.map((detail, index) => detail.view ? <tr key={index}>
                                    <td>{index+1}.{detail.device}</td>
                                    <td>{displayNumber(detail.view)}</td>
                                    <td>{(detail.view * 100 / this.state.part.view).toFixed(0)}%</td>
                                </tr> : '')
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
};

const Analytics = (props) => {
    const params = useParams();
    return <AnalyticsComponent {...props} params = {params} />
}

export default Analytics;
