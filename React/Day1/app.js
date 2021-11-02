class App extends React.Component {
    state: 'Name'
    
    
    
    handleChange = ( e ) =>
        this.setState( {
            name: e.target.value
        } )
} handleSubmit = (e) => [
    e.preventDefault();
    console.log( 'form submitted', this.state.name );
    
]
    <form onSubmit=(this.handleSubmit)>

    render() {
        return (
            <div className="">
                <h1>Hey Devs</h1>
                <p> {, my name is {this.state.name} }</p>
                <form action=""
                <input type="text"
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('App'))