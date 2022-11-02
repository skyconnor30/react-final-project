import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

class Bisection extends Component{
    constructor(){
        super();
    }
    getValue(){
        var Number = document.getElementById("number").value;
        var Root = document.getElementById("rootof").value;
        console.log(Number);
        console.log(Root);
        document.getElementById("shownumber").innerHTML=Number;
        document.getElementById("showrootof").innerHTML=Root;
    }
    render(){
        return(
            <div>
                <h3>
                    Bisection Calculation
                </h3>
                <Form>
                    <Form.Group className="bisection">
                        <Form.Label>
                            input information
                        </Form.Label>
                        <div>
                            <Form.Control id="number" type="number" step="1" placeholder="Number" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                            <Form.Control id="rootof" type="number" step="1" placeholder="Root" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                        </div>
                        <Button onClick={this.getValue}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
                <div id="shownumber"></div>
                <div id="showrootof"></div>
            </div>
        );
    }
}
export default Bisection;