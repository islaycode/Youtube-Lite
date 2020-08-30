import React, { Component } from 'react'

export default class SearchBar extends Component {
    state ={
        term: ''
    };
    onInputChange =(e)=>{
        this.setState({
            term: e.target.value
        })
    }
    onFormsubmit=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormsubmit} className="ui form">
                <div className="field">
                    <label>Search Videos</label>
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
                </form>
            </div>
        )
    }
}
