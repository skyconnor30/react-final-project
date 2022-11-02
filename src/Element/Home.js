import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class Home extends Component{
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue(){
        var Number = document.getElementById("number").value;
        var Root = document.getElementById("rootof").value;
        console.log(Number);
        console.log(Root);
        document.getElementById("shownumber").innerHTML=Number;
        document.getElementById("showrootof").innerHTML=Root;
    }
    createinputMatrics
    render(){
        console.log("render called")
        return(
            <div>
                <h3>
                    This is Home
                </h3>
                <div id="shownumber"></div>
                <div id="showrootof"></div>
            </div>
        );
    }
}
export default Home;