import BasePage from "./BasePage";
import HomePage from "./HomePage";
import { Selector, t} from "testcafe"

export default class LoginPage extends BasePage {
    constructor() {
        super()
        
        this.signinBtn = Selector('a[href="#login"]')
        this.username = Selector('div#login > form > fieldset:nth-of-type(1) > input')
        this.password = Selector('div#login > form > fieldset:nth-of-type(2) > input')
        this.submit = Selector('div#login > form > div > div.span_1_of_4 > input.button')
    }

    async loginAs(user) {
        await t
            .click(this.signinBtn)
            .typeText(this.username, user)
            .typeText(this.password, user)
            .click(this.submit)
    }
}