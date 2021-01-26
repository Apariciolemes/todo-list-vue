import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const baseUrl = "http://localhost:8085/"

// Teste all end points
describe('Check Todo List', () => {
    it('Visit index', () => {
        cy.visit(baseUrl)
    });
    it('Test request Get', () => {
        cy.request(baseUrl)
            .then((response) => {
                const ids = Cypress._.chain(response);
                expect(ids);
            });
    });
    it('Create Firts Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{enter}')
        cy.get('[data-test="selectedDescription"]').type('BS-1')
        cy.get('[data-test="selectedDate"]').type('25/01/2021')
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{enter}')
        cy.get('[data-test="createTask"]').click({ multiple: false })
    });
    it('Create Second Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{downarrow}{enter}')
        cy.get('[data-test="selectedDescription"]').type('BS-2')
        cy.get('[data-test="selectedDate"]').type('26/01/2021')
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{downarrow}{enter}')
        cy.get('[data-test="createTask"]').click({ multiple: false })
    });
    it('Create Third Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{downarrow}{enter}')
        cy.get('[data-test="selectedDescription"]').type('BS-3')
        cy.get('[data-test="selectedDate"]').type('27/01/2021')
        cy.get('[data-test="selectedStatus"]').type('{downarrow}{downarrow}{enter}')
        cy.get('[data-test="createTask"]').click({ multiple: false })
    });
    it('Mark Conclued', () => {
        cy.get('.markConclued').click()
    });
    it('Edit Document / Valid not changed', () => {
        cy.get('.editTask').click()
        cy.get('[data-test="saveEdit"]').click({ multiple: false })
        cy.get('[data-test="selectedDescriptionEdit"]').type('-Edit')
        cy.get('[data-test="saveEdit"]').click({ multiple: false })
    });
    it('Remove Task', () => {
        cy.get('.removeTask').click()
    });
    it('Create Fourth Task', () => {
        cy.get('[data-test="selectedType"]').click().type('{downarrow}{enter}')
        cy.get('[data-test="selectedDescription"]').type('BS-4')
        cy.get('[data-test="selectedDate"]').type('26/01/2021')
        cy.get('[data-test="selectedStatus"]').click().type('{downarrow}{downarrow}{downarrow}{enter}')
        cy.get('[data-test="createTask"]').click()
    });
    it('Remove All Conclued', () => {
        cy.get('.removeAllTask').click()
    });

});