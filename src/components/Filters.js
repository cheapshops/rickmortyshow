import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';

class Filters extends Component {

    _onFilterToggle = (e) => {
        let val = e.target.value
        let main = e.target.main
        this.props.toggleFilter( {
            main: main,
            sub: val
        })
    }

    _renderFilterBlock = ( fType, fs ) => {
        let f = []
        for ( var k in fs ){
            let checked = fs[k]
            f.push(
                <Row  key={k}>
                    <Col lg={24}>
                        <Checkbox checked={checked} key={k} main={fType} value={k} onChange={this._onFilterToggle}>{k}</Checkbox>
                    </Col>
                </Row>
            )
        }

        return (
            <div key={fType} class="filter-block">
                <b><h3>{fType.toUpperCase()}</h3></b>
                {f}
            </div>
        )
    }
    render() {
        const { filters } = this.props.filters
        let fsC = []
        for ( var k in filters ){
            fsC.push( this._renderFilterBlock(k, filters[k]) )
        }
        return (
            <div className="filters-container">
                <h1>Filters</h1>
                {fsC}
            </div>
        );
    }
}

export default Filters