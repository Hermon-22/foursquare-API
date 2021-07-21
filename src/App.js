import { Component } from 'react';
import Api from './components/Api';
import './App.css';
import axios from 'axios'

class App extends Component {
constructor(props){
    super(props)
    this.state={
        vName:'', 
        searchList:[],  
        inpt:'',  
        userId:'HTNPB3CXTEH3ERLA3QJHQ50UOGYCRGJNPTNO5GTCP3RQAKVB', 
        secret:'UFFLTZSJ1ZOVXWG2TXPWLZMTIRJJ4WRSOMKRAQTXFELWZYXH'
    }}
    userInput=(x)=>{
        this.setState({ inpt : x.target.value})
    }
    userClick=(e)=>{
        e.preventDefault();
        this.state.inpt==='' 
        ? alert('Please fill something') 
        : axios.get(`https://api.foursquare.com/v2/venues/search?client_id=${this.state.userId}&client_secret=${this.state.secret}&&limit=10&ll=52.1326,5.2913&query=${this.state.vName}&v=20220110`)
        .then((res=>{
            this.setState({ 
                searchList: res.data.response.venues
            })
        }))
        .catch(err=>{
        console.error('err',err);
    })
}
render(){
    return (
    <div className="App">      
        <Api searchList={this.state.searchList} userClick={this.userClick} userInput={this.userInput}/>
    </div>
    )
        }  
}
export default App;
