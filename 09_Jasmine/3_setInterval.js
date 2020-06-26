describe('a simple interval', function(){
    var sample;
    beforeEach(function(){
        sample = jamesine.createSpy('samplefunction');
        jasmine.clock().install();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    })

    it('is only invoked after 1000 milliseconds',function(){
        setInterval(function(){
            sample();
        }, 1000);
        jasmine.clock().tick(999);
        expect(sample.calls.count()).toBe(0);
        jasmine.clock().tick(1000);
        expect(sample.calls.count()).toBe(1);
        jasmine.clock().tick(1);
        expect(sample.calls.count()).toBe(2);
    })
})