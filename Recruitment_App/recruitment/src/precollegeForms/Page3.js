import React,{Component} from 'react';
import form from '../css/form.css';


class Page3 extends Component{

    render(){
        const {handleChange} = this.props;
        const {contactMedium} = this.props;

        return(
            <div className="container formContainer">

                <h1>Page 3</h1>

                <label class="ro-text">I Prefer to be contacted via:
                        <select
                        name="contactMedium" 
                        onChange =  {handleChange('contactMedium')}
                        >
                        <option value="">I Prefer to be contacted via</option>
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Text Message">Text Message</option>
                        <option value="Mail">Mail</option>
                    
                        </select>

                        
                </label>

                
                {contactMedium === "Phone Call" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>

                    <label>Phone Number:
                        <input

                        type="phone"
                        name = "phoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('phoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "bestContactTime"
                        placeholder=""
                        onChange={handleChange('bestContactTime')}


                        />

                    </label>

                    </div>}

                    {contactMedium === "Text Message" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>

                    <label>Phone Number:
                        <input

                        type="phone"
                        name = "phoneNumber"
                        placeholder="Type your number"
                        onChange={handleChange('phoneNumber')}
                        

                        />
                    

                    </label>

                    <label>Best time to contact:
                         <input

                        type="time"
                        name = "bestContactTime"
                        placeholder=""
                        onChange={handleChange('bestContactTime')}


                        />

                    </label>

                    </div>}




                    {contactMedium === "Mail" && 
                    <div>
                    <br></br>
                        <h1> You Chose {contactMedium} Option</h1>
                        <br></br>
                  

                    <label>Address 1:
                        <input

                        type="address"
                        name = "mailAddress1"
                        placeholder="Address 1"
                        onChange={handleChange('mailAddress1')}
                        

                        />
                    

                    </label>
                    <label>Address 2:
                        <input

                        type="address"
                        name = "mailAddress2"
                        placeholder="Address 2"
                        onChange={handleChange('mailAddress2')}
                        

                        />
                    

                    </label>

                    <label>City:
                         <input

                        type="text"
                        name = "mailCity"
                        placeholder=""
                        onChange={handleChange('mailCity"')}


                        />

                    </label>
                    <label>State:
                         <input

                        type="state"
                        name = "mailState"
                        placeholder=""
                        onChange={handleChange('mailState')}


                        />

                    </label>
                    <label>Zip Code:
                         <input

                        type="number"
                        name = "mailZip"
                        placeholder=""
                        onChange={handleChange('mailZip')}


                        />

                    </label>

                    </div>}
                    


                




            </div>
        )
    }
}
export default Page3;
