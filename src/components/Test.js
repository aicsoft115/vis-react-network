import React, { Component } from "react";
import Network from "vis-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faExpand } from "@fortawesome/free-solid-svg-icons"

import '../index.css'
import jsonData from "../data.json";

const options = {
  autoResize: true,
  width: '500',
  height: '500',
  interaction: {
    zoomView: false
  },
  nodes: {
    shape: 'circularImage',
    fixed: true,
    font: {
      size: 14,
      color: 'black',
      vadjust: -78
    },
    physics: false,
    size: 25,
    borderWidth: 6
  },
  edges: {
    width: 4,
    arrows: {
      to:     {enabled: true, scaleFactor:0.1, type:'arrow'},
      from:   {enabled: false, scaleFactor:0.1, type:'arrow'}
    },
    arrowStrikethrough: false,
    chosen: true,
    font: {
      size: 14, // px
      face: 'arial',
      background: '#ffffff',
      strokeWidth: 0, // px
      strokeColor: '#8d8d8d',
      multi: 'html'
    },
    labelHighlightBold: true,
    physics: false,
    selectionWidth: 1,
    widthConstraint: false
  },
  groups: {
    "trader": {
      shape: 'circularImage',
      size: 25,
      color: {
        background: '#ffffff', border: '#d35400'
      },
      font: {multi: 'html'}
    },
    "sale": {
      shape: 'circularImage',
      size: 25,
      color: {
        background: '#ffffff', border: '#2980b9'
      },
      font: {multi: 'html'}
    },
    "within-cimb": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#16a085'
      },
      font: {multi: 'html'}
    },
    "ex-interbank": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#c0392b'
      },
      font: {multi: 'html'}
    },
    "ex-broker": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#f39c12'
      },
      font: {multi: 'html'}
    },
    "ex-client-corporate": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#6112f3'
      },
      font: {multi: 'html'}
    },
    "ex-client-non-bank-fi": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#cb12f3'
      },
      font: {multi: 'html'}
    },
    "unknown": {
      shape: 'image',
      shapeProperties: {useBorderWithImage: true},
      size: 23,
      borderWidth: 3,
      color: {
        background: '#ffffff', border: '#6f6f6f'
      },
      font: {multi: 'html'}
    }
  }
}

export default class Test extends Component {
  setState(stateObj) {
    if (this.mounted) {
      super.setState(stateObj);
    }
  }
  componentWillMount() {
    this.mounted = true;
  }
  constructor(props) {
    super(props);

    let newGraph = {};
    newGraph.nodes = jsonData.nodes;
    newGraph.edges = jsonData.edges;

    this.state = {
      graph: newGraph,
      style: { width: "100%", height: "100%" },
      network: null
    };
  }

  render() {
    return (
      <div>
        <div style={{height: 'auto', overflow: 'hidden'}}>
          <div className="vis-react-title" style={{marginLeft: '2rem'}}><h3>Dealer's networks</h3></div>
          <div className="vis-react-toolbar">
            <FontAwesomeIcon style={{color: '#790307'}} icon={faDownload} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon style={{color: '#790307'}} icon={faExpand} />
          </div>
        </div>
        <Network
          graph={this.state.graph}
          style={this.state.style}
          options={options}
          vis={vis => (this.vis = vis)}
        />
      </div>
    );
  }
}
