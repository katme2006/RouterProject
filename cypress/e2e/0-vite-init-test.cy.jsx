describe('our first cypress test', ()=>{
    it("visits home url and ensure vite+react is in h1",()=>{
        cy.visit('/')
        cy.get('h1').should('contain',"Hello")
    }
    )
})