import { Page } from "playwright"

class BasePage {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }
}
