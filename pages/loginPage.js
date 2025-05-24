class LoginPage{
    constructor(page) {
        this.page = page
        this.username = this.page.getByPlaceholder('Username')
        this.password = this.page.locator('#password')
        this.loginButton = this.page.locator('.submit-button.btn_action')
    }

    async visit(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async login(){
        await this.username.fill('standard_user')
        await this.password.fill('secret_sauce')
        await this.loginButton.click()
    }
}
module.exports = { LoginPage }