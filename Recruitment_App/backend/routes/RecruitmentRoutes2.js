import  {getClient} from '../controllers/AppController1';


const routes1 = (app)=>{

    app.route('/admin/viewdata')
        .get(getClient);

}

export default routes1;