describe('Verify github user profile api', () => {

    const token = Cypress.env('userToken');
    const wrongToken = "test";
    const url = Cypress.env('apiUrl');
    it('Verify github user profile api run without auth', () => {
        cy.request({
            method: 'GET',
            url: `${url}/user`,
            failOnStatusCode: false
        }).then(res => {
            expect(res.status).to.eq(401);
        })
    })

    it('Verify github user profile api run with wrong auth', () => {
        cy.request({
            method: 'GET',
            url: `${url}/user`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${wrongToken}`,
            },
        }).then(res => {
            expect(res.status).to.eq(401);
        })
    })

    it('Verify github user profile api run with correct auth', () => {
        cy.request({
            method: 'GET',
            url: `${url}/user`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(res => {
            expect(res.status).to.eq(200);
        })
    })

    it('Verify github user profile api run with update bio', () => {
        cy.request({
            method: 'PATCH',
            url: `${url}/user`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/vnd.github+json'
            },
            body: {
                "bio": "Your new bio content here."
            }
        }).then(res => {
            expect(res.status).to.eq(200);
        })
    })
})