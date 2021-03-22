import React from 'react'
import '../css/searchbar.css'

class Searchbar extends React.Component {
    state = { term: '' };

    onSubmitInput = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui container searchbar">

                <form className="ui fluid icon large input"
                    onSubmit={(e) => this.onSubmitInput(e)}>
                    <input type="text" placeholder="search video"
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}
                    />
                    <i className="search icon"></i>
                </form>
            </div>

        )
    };
}

export default Searchbar;
