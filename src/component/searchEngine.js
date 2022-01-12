import React from 'react';
class searchInput extends React.Component {
    constructor(props){
        super(props)
        this.state={entry :''}
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)
        
    }
    render() { 
        return(
        <div className='ui segment'>

            <form action="" onSubmit={this.onFormSubmit} className='ui from'>
                <div className='field'>
                    <div className='ui icon massive input'>
                        <input type="text" placeholder="Image search engine, search here........."
                            onChange={(event) => this.setState({ entry: event.target.value })}
                            value={this.state.entry}/>
                        
                        <i className="search icon"></i>
                        
                        
                    </div>
                </div>
            </form>
        </div>
        


        )
    }
}
 
export default searchInput;