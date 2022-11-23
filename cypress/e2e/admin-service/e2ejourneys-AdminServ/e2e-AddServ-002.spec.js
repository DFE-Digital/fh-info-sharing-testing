describe('| e2e-AddServ_002 | Add Service - health - Online - NotforChildren - English - Not Paid - emailContact |',function(){
    const num = Date.now();
    const n = num.toString();
    it('health - Online - NotforChildren - English - Not Paid - emailContact  ',function(){
        cy.visit('/OrganisationAdmin/Welcome')
        // select add service
        cy.welcomePage('add')
        // give service name
        cy.addService('TestService' + n)
        // select required service(s)
        cy.selectSupport({health:'32712b43-e4f7-484f-97d7-beb3bb463133'})
        // cy.selectSupport('organisation','children')
        //type of service
        cy.serviceDeliveryType({online:'2'})
        // who is it for ?
        cy.whoFor('No')
        // what language 
        cy.whatLanguage('English')
        //pay for service
        cy.payForService('No')
        //contact details
        cy.contactDetails({Email:'email'},'abc@email.com')
        //more details
        cy.moreDetails('Test details')
        // check details
        cy.checkDetails('TestService' + n,'Health')
        // service added 
        cy.serviceAdded()
        // validate added service is present in list
        cy.ViewServices('TestService' + n)
         // delete test data
       cy.deleteTestData('testservice' + n)
    })
})