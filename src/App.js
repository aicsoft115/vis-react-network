import React, {Component} from 'react'
import Test from './components/Test'

import './index.css'

const styles = {
  network: {
    display: 'inline-block',
    width: '500px',
    height: '500px'
  },
  report: {
    display: 'inline-block',
    float: 'right',
    width: '220px',
    verticalAlign: 'top',
    backgroundColor: '#efefef',
    marginTop: '1rem',
    marginRight: '1.5rem',
    fontSize: 12
  }
}

export default class App extends Component {
  render() {
    return (
      <div style={{marginLeft: 'auto', marginRight: 'auto', width: '500px'}}>
        <Test style={styles.network} />

        <div style={styles.report}>
          <ul style={{listStyle: 'none', paddingLeft: '15px'}}>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-circle" style={{border: '0.3rem solid #d35400'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>Trader</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-circle" style={{border: '0.3rem solid #2980b9'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>Sale</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-rectangle" style={{border: '0.3rem solid #16a085'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>Within CIMB</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-rectangle" style={{border: '0.3rem solid #c0392b'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>External - Interbank</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-rectangle" style={{border: '0.3rem solid #f39c12'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>External - Broker</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-rectangle" style={{border: '0.3rem solid #6112f3'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>External - Client (Corporate)</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-rectangle" style={{border: '0.3rem solid #cb12f3'}}></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>External - Client (Non-Bank FI)</b>
              </div>
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <div style={{display: 'table'}}>
                <div className="group-pentagon"></div>
                <b style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: '1rem'}}>Unknown</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
