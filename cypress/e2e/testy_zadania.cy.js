describe('Swiper Gallery Test', function () {
    it('Checks if the user can swipe the slides in the gallery', function () {
      cy.visit('http://localhost:3000');
      cy.get('.swiper-button-next').click();
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
      cy.wait(1000);
      cy.get('.swiper-button-prev').click();
      cy.get('.swiper-slide-active').should('contain', 'Italy');
    });
  });

  describe('Title and Description Test', function () {
    it('Checks if the title and description on all slides are correct', function () {
      cy.visit('http://localhost:3000');
      cy.get('.swiper-slide-active').should('contain', 'Italy');
      cy.get('.swiper-slide-active').should('contain', 'Rome');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
      cy.get('.swiper-slide-active').should('contain', 'London');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('contain', 'Paris');
      cy.get('.swiper-slide-active').should('contain', 'France');
    });
  });

  