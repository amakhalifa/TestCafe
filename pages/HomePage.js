import { Selector , t} from "testcafe";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    constructor() {
        super()

        this.frameWindowBtn = Selector("div.main-nav > ul > li:nth-child(4) > a")
        }

        async clickOnFrameWindLink() {
            await  t.click(this.frameWindowBtn)
    }
}