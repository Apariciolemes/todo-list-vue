import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const baseUrl = "http://localhost:8085/"

// Teste all end points
describe('Check Todo List', () => {
    it('Visit index', () => {
        cy.visit(baseUrl).wait(3000)
    });
    it('Test request Get', () => {
        cy.request(baseUrl)
            .then((response) => {
                const ids = Cypress._.chain(response);
                expect(ids);
            });
    });
    it('Create Firts Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{enter}').wait(1500)
        cy.get('[data-test="selectedDescription"]').type('BS-1').wait(1500)
        cy.get('[data-test="selectedDate"]').type('25/01/2021').wait(1500)
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{enter}').wait(3000)
        cy.get('[data-test="createTask"]').click({ multiple: false }).wait(3000)
    });
    it('Create Second Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{downarrow}{enter}').wait(1500)
        cy.get('[data-test="selectedDescription"]').type('BS-2').wait(1500)
        cy.get('[data-test="selectedDate"]').type('26/01/2021').wait(1500)
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{downarrow}{enter}').wait(3000)
        cy.get('[data-test="createTask"]').click({ multiple: false }).wait(3000)
    });
    it('Create Third Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{downarrow}{enter}').wait(1500)
        cy.get('[data-test="selectedDescription"]').type('BS-3').wait(1500)
        cy.get('[data-test="selectedDate"]').type('27/01/2021').wait(1500)
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{downarrow}{enter}').wait(3000)
        cy.get('[data-test="createTask"]').click({ multiple: false }).wait(3000)
    });
    it('Mark Conclued', () => {
        cy.get('.markConclued').click().wait(4000)
    });
    it('Edit Document / Valid not changed', () => {
        cy.get('.editTask').click().wait(2000)
        cy.get('[data-test="saveEdit"]').click({ multiple: false }).wait(3000)
        cy.get('[data-test="selectedDescriptionEdit"]').type('-Edit').wait(3000)
        cy.get('[data-test="saveEdit"]').click({ multiple: false }).wait(3000)
    });
    it('Remove Task', () => {
        cy.get('.removeTask').click().wait(3000)
    });
    it('Create Fourth Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{enter}').wait(1500)
        cy.get('[data-test="selectedDescription"]').type('BS-4').wait(1500)
        cy.get('[data-test="selectedDate"]').type('26/01/2021').wait(1500)
        cy.get('[data-test="selectedStatus"]').click().type('{downarrow}{downarrow}{downarrow}{enter}').wait(3000)
        cy.get('[data-test="createTask"]').click({ multiple: false }).wait(3000)
    });
    it('Remove All Conclued', () => {
        cy.get('.removeAllTask').click().wait(3000)
    });

});