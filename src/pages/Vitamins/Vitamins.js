import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./style.css";








class Vitamins extends Component {
    state ={
        vitaminA: '',
        vitaminC: '',
        vitaminD: '',
        vitaminK: '',
        vitaminE: '',

  

    }

    ranges =  [
        {vitaminA: [100, 500, 1000]},
        {vitaminC: [50, 100, 200]},
        {vitaminD: [25, 50, 100 ]},
        {vitaminK: [100, 150, 200,]},
        {vitaminE: [10, 15, 25]}
    ]

    


    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        console.log(name, value)

        this.setState({
            [name] : value
        });

       

    }

    

        handleSubmit = event => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

            

            
        
    



        
    
         if (this.ranges[0].vitaminA[1] <=this.state.vitaminA) {
           return alert('Good job your taking recommended daily allowance of Vitamin A');

         } else if (this.ranges[0].vitaminA[1] < this.state.vitaminA) {
             return alert('Your deficient, You need to take some more Vitamin A');
 
         } else if (this.ranges[0].vitaminA[1] > this.state.vitaminA) {
             return alert('You are overdosing on Vitamin A, You need to chill on this');
        
         } if (this.ranges[1].vitaminC[1] <= this.state.vitaminC) { 
             return alert('Good job your taking recommended daily allowance of Vitamin C');

         } else if (this.ranges[1].vitaminC[1] < this.state.vitaminC) {
             return alert('Your deficient, You need to take some more Vitamin C');
        
         } else if (this.ranges[1].vitaminC[1] > this.state.vitaminC) {
            return alert('You are overdosing on Vitamin C, You need to chill on this');
        
         } if (this.ranges[2].vitaminD[1] <= this.state.vitaminD) {
             return alert('Good job your taking recommended daily allowance of Vitamin D');
        
         } else if (this.ranges[2].vitaminD[1] < this.state.vitaminD) {
             return alert('Your deficient, You need to take some more Vitamin D');

         } else if (this.ranges[2].vitaminD[1] > this.state.vitaminD) {
             return alert('You are overdosing on Vitamin D, You need to chill on this');

         } if (this.ranges[3].vitaminK[1] <= this.state.vitaminK) {
             return alert('Good job your taking recommended daily allowance of Vitamin K');
        
         } else if (this.ranges[3].vitaminK[1] < this.state.vitaminK) {
             return alert('Your deficient, You need to take some more Vitamin K');

         } else if (this.ranges[3].vitaminK[1] > this.state.vitaminK) {
             return alert('You are overdosing on Vitamin K, You need to chill on this');

         } if (this.ranges[4].vitaminE[1] <= this.state.vitaminE) {
             return alert('Good job your taking recommended daily allowance of Vitamin E');
        
         } else if (this.ranges[4].vitaminK[1] < this.state.vitaminE) {
             return alert('Your deficient, You need to take some more Vitamin E');

         } else if (this.ranges[4].vitaminE[1] > this.state.vitaminE)  {
             return alert('You are overdosing on Vitamin E, You need to chill on this');

         }

         
         


        };

        
        


    render() { 
        return (
            <div>
            <div id="jumbotron" className="jumbotron jumbotron-fluid"  >
            <div className="container">
                <h1 className="display-4">Select your vitamins that you take daily</h1>
                
            </div>
            </div>
            <div className="form-group">
            <label for="exampleFormControlSelect1">Vitamin A</label>
            <select value={this.state.vitaminA} name='vitaminA'onChange={this.handleInputChange.bind(this)}className="form-control" id="exampleFormControlSelect1">

                
                <option>100</option>
                <option>500</option>
                <option>1000</option>
               
            </select>
            </div>
            <div className="form-group">
            <label for="exampleFormControlSelect1">Vitamin C</label>
            <select value={this.state.vitaminC} name='vitaminC' onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                <option>50</option>
                <option>100</option>
                <option>200</option>
                
            </select>
            </div>
            <div className="form-group">
            <label for="exampleFormControlSelect1">Vitamin D</label>
            <select value={this.state.vitaminD} name='vitaminD' onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                <option>25</option>
                <option>50</option>
                <option>100</option>
                
            </select>
            </div>
            <div className="form-group">
            <label for="exampleFormControlSelect1">Vitamin K</label>
            <select value={this.state.vitaminD} name='vitaminK' onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                <option>100</option>
                <option>150</option>
                <option>200</option>
                
            </select>
            </div>
            <div className="form-group">
            <label for="exampleFormControlSelect1">Vitamin E</label>
            <select value={this.state.vitaminD}  name='vitaminE' onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                <option>10 mg</option>
                <option>15 mg</option>
                <option>20 mg</option>

            </select>
            
            
            <Button as="input" type="submit" value="Submit" onClick={this.handleSubmit} />
            
            


            
            

            
            
            </div>
            </div>
            
            
          )

        };
        
    }
    
export default Vitamins;