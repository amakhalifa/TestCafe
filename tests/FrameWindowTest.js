import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import FrameWindowPage from "../pages/FrameWindowPage";

fixture ("Frame Window Test").
    page ("http://way2automation.com/way2auto_jquery/index.php");

test("iframe test", async t =>{
    const framePage = new FrameWindowPage()
    const loginPage = new LoginPage()
    const homepage = new HomePage()

    loginPage.loginAs('testerfreelance2')
    homepage.clickOnFrameWindLink()
    await t
        .click(framePage.openNewWindow)
        .switchToIframe(framePage.iFrameName)
        .click(framePage.newBrowserTab)
        .switchToMainWindow()
})