
exports.defineAutoTests = function() {
  describe('mvc object existance check', function() {

    it("access.com.mvc", function () {
      expect( access.com.mvc).toBeDefined();
    });

    it("access.com.mvc.coolMethod", function() {
      expect( access.com.mvc.coolMethod ).toBeDefined();
    });
  });

  describe('coolMethod call test', function() {

    var value;
    var callbacks;

    beforeEach(function(done) {
      callbacks = {
        win: function(arg){
          value = arg;
          done();
        },
        fail: function(err){
          console.log("callbacks.fail");
          done();
        }
      };

      spyOn(callbacks, 'win').and.callThrough();
      spyOn(callbacks, 'fail').and.callThrough();
      
      access.com.mvc.coolMethod("test", callbacks.win, callbacks.fail);
    });

    it("to have been called", function() {
      expect(callbacks.win).toHaveBeenCalled();
    });

    it("check return value", function() {
      expect(value).toBe("test");
    });

  });
};
