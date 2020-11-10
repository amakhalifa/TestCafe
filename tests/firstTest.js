import LoginPage from "../pages/LoginPage";

fixture ('logintest')
    .page ('http://way2automation.com/way2auto_jquery/index.php');

test('loginAsValidUser', async t => {
    const loginpage = new LoginPage()

    await 
        loginpage.loginAs('testerfreelance2')
});
