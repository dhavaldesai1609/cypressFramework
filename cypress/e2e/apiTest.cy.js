describe('API Test', () => {
    it('Fetches user details', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name');
      });
    });
  });
  