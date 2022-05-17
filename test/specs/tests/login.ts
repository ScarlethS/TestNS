describe('Login Test',()=>{

    it('Verify input are empty',  () =>{
          browser.url('https://www.saucedemo.com/')

        // const text =   $('#user-name').getText()
          expect($('#user-name')).toHaveValue('')
          expect($('#password')).toHaveValue('')
    })

    it('Verify that the input contains their respective values',  () =>{
          $('#user-name').setValue('standard_user')
          $('#password').setValue('secret_sauce')

          expect($('#user-name')).toHaveValue('standard_user')
          expect($('#password')).toHaveValue('secret_sauce')
    })
     
    it('Verify user was logged in successfully',  () =>{   
          browser.pause(5000)    
          $('#login-button').click()
          expect(browser).toHaveUrlContaining('/inventory.html')
    })

    it('Validate that the respective 2 products are in the “Your Cart”',  () =>{   
          browser.pause(3000)    
          $('#add-to-cart-sauce-labs-backpack').click()
          $('#add-to-cart-sauce-labs-fleece-jacket').click()    

          expect($('#shopping_cart_container')).toHaveText('2')    

          browser.url('https://www.saucedemo.com/cart.html')

          expect($('.inventory_item_name')).toHaveText(['Sauce Labs Backpack','Sauce Labs Fleece Jacket'])     
    })   
    
    it('checkout form',  () =>{   
          browser.pause(3000)  

          $('#checkout').click()            

          $('#first-name').setValue('Scarleth')
          $('#last-name').setValue('Suarez')
          $('#postal-code').setValue('10000')

          expect($('#first-name')).toHaveValue('Scarleth')
          expect($('#last-name')).toHaveValue('Suarez')
          expect($('#postal-code')).toHaveValue('10000')           
    })   

    it('Checkout Overview',  () =>{   
          browser.pause(3000)  

          $('#continue').click()         
        
    })   

})
