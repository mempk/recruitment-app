import React,{ Component } from "react";
import Page1 from "./Page1";
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import form from '../css/form.css';
import nextArrow from '../images/nextArrow.png';
import backArrow from '../images/backArrow.png';
import RecruiterInfo from './RecruiterInfo';




class PrecollegeForm extends Component{



  

        state = { 
            
            step: 1,
            eventInfo: true,
            showRest: false,


            //Event Info
            pcEventName:'',
            pcEventDate:'',
            pcSponsoringOrganization:'',
            pcLocationState:'',
            pcLocationCountry:'',
            pcLocationCity:'',




            
        
            //page 1
            firstName :'',
            lastName : '',
            emailAddress: '',
            progOfInterest: '',


    
            //Page 2
            whoyouAre:'',
            currentYearInSchool: '',
            schoolName: '',
            hometown:'',
            stateCode:'',
            schoolYear: '',
            childrenName:'',
            childrenStateCode: '',
            childrenHometown:'',
            counselorSchoolName: '',
            ageLevel: '',
            counselorState:'',
            counselorCity:'',
            teacherGradeLevel:'',
            teacherSchoolName:'',
            subject:'',
            teacherCity:'',
            teacherState:'',
            otherState:'',
            otherCity:'',


            //page3

            contactMedium:'',
            bestContactTime:'',
            phoneNumber:'',
            mailAddress1:'',
            mailAddress2:'',
            mailCity:'',
            mailState:'',
            mailZip:'',

            //page4

            topicIdea:'',
            aboutYou:'',
            SpecificQuestion:'',
    
        
        
        };
       

    

    

    showStep =()=>{
 
        const {step} = this.state;
        if(step === 1)
            return (<Page1 handleChange={this.handleChange} />);
        else if(step === 2)
            return (<Page2 handleChange={this.handleChange} whoyouare1 = {this.state.whoyouAre}/>);
        else if(step === 3)
            return (<Page3 handleChange={this.handleChange} contactMedium = {this.state.contactMedium}/>);
        else if(step === 4)
            return (<Page4 handleChange={this.handleChange}/>);
            



    }

  

    
    stepIncrement=()=>{

        const {step} = this.state;


    
        this.setState({ step: step + 1});
    }
    stepDecrement =()=>{

        const {step} = this.state;

        this.setState({ step: step - 1});
     

    }

    handleChange= input =>e=>{
        this.setState({[input]:e.target.value});
        this.setState({yourOccupation: this.props.yourOccupation})


    }
    showNextStep=()=>{
        const {step} = this.state;
        if(step !== 4)
            if(step === 1)
            return ( <button onClick={this.stepIncrement} className="btn btn-primary-success form">Have a little more time?</button>);
            else if(step === 2)
            return (  <button onClick={this.stepIncrement} className="btn btn-primary-success form">Can you spare a second more?</button>
                        );

            else if(step === 3)
            return ( <button onClick={this.stepIncrement} className="btn btn-primary-success form">One last thing</button>
                        );
           

    }

    showPreviousStep=()=>{

        const {step} = this.state;
        if(step !== 1)
            return ( <button onClick={this.stepDecrement} ><img className="backArrow" src={backArrow}/></button>);

    }
    submitEventInfo=()=>e=>{
        e.preventDefault();
        const {eventInfo} = this.state;
        this.setState({eventInfo:false})
        this.setState({showRest:true})
    }
    showNextArrow=()=>{
        const {step} = this.state;
        if(step != 4){
            return(<button onClick={this.stepIncrement} ><img className="frontArrow" src={nextArrow}/></button>);
        }

    }

    showSubmitStep=()=>{

        const {step} = this.state;
        if(step === 4)
            return ( <div><br></br><button onClick={this.moveToFirstPage} className="btn btn-primary-success form">Thanks so much for sharing with us!</button>
                     {}</div>
            );

    }

    moveToFirstPage=()=>{

        const {step} = this.state;

        this.setState({ step: 1});
     
    }
    


    render(){

        const {step} = this.state;



        return(

            


            <>

            
             <div className="App" style={"style",{"margin":50,}}>

            { this.state.eventInfo &&

            <RecruiterInfo handleChange={this.handleChange} submitEventInfo={this.submitEventInfo}/> }

            {this.state.showRest &&
            <>

               <div style={{backgroundColor:'rgb(45,128,210)',marginLeft:'55px',width:'160px',color:'white', padding:'10px 0px', borderRadius:'5%'}}><h5>Step : {step}/4</h5></div> 

                {this.showStep()}
                <div className='row'>

                    <div className="col-lg-4 col-md-4 col-sm-12">{this.showPreviousStep()}</div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center">{this.showNextStep()}</div>
                    <div className="col-lg-4 col-md-4 col-sm-12">{this.showNextArrow()}</div>
                
                </div>

                
                
                {this.showSubmitStep()}

                

                
                </>}

             

                </div>
               
              

            </>
        )
    }



}
export default PrecollegeForm;