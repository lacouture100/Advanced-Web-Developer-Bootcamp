
function add(a, b, c) {
    return a + b + c;
}

describe('add',function(){
    var addSpy,result;
    beforeEach(function(){
        addSpy = spyOn(window, 'add');
        //result.addSpy();  // no parameters
        result.addSpy(1,2,3); //with parameters

    });
    it('is can have parameters tested', function(){
        expect(addSpy).toHaveBeenCalled(); // no parameters
        expect(addSpy).toHaveBeenCalledWith(1,2,3);
        expect(result).toEqual(6);

        //Testing Frequency, how many times the spy was called

        expect(addSpy.calls.any()).toBe(true);
        expect(addSpy.calls.count()).toBe(true);

    });
});