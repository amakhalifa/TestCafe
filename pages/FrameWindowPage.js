import {Selector, t} from "testcafe"
import BasePage from "./BasePage"

export default class FrameWindowPage extends BasePage {
    constructor() {
        super()
        this.newBrowserTab = Selector("div p > a")
        this.openNewWindow = Selector("div.internal_navi > ul > li:nth-child(1) > a")     
        this.iFrameName = Selector("iframe[class='demo-frame']") 
    }    
}