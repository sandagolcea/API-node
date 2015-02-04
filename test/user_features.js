describe('userpage', function(){
  
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('should greet each user', function(){
    casper.thenOpen('http://localhost:3000/'+'user?name=Steven',function(){
      expect('body').to.have.text("hello there user Steven");
    });
  });

});