exports.defineAutoTests = function() {
  describe('mvc object existance check', function() {

    it("mvc", function () {
      expect(mvc).toBeDefined();
    });

    it("mvc.fetchMission", function() {
      expect(mvc.fetchMission).toBeDefined();
    });
  });

  describe('fetchMission call test', function() {
    var value;
    var callbacks;

    beforeEach(function(done) {
      callbacks = {
        success: function(arg){
          value = arg;
          done();
        },
        error: function(err){
          done();
        }
      };

      spyOn(callbacks, 'success').and.callThrough();
      spyOn(callbacks, 'error').and.callThrough();
      mvc.fetchMission(callbacks.success, callbacks.error);
    });

    it("to have been called", function() {
      expect(callbacks.success).toHaveBeenCalled();
      expect(callbacks.error).not.toHaveBeenCalled();
    });

    it("check return value", function() {
      expect(value).toBe("我々は、ソフトウェアを人々の身近な存在にし、世界に新しい日常を提供し続けます。");
    });

  });
};
