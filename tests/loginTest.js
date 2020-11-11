import LoginPage from "../pages/LoginPage";
import {info} from '../utils/logger'


fixture ('logintest')
    .page ('http://way2automation.com/way2auto_jquery/index.php');

test('loginAsValidUser' , async t => {
    const loginpage = new LoginPage()
    info('Login to way2automation webpage')

    await 
        loginpage.loginAs('testerfreelance2')
});
