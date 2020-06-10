function getUserInfo (username){
    return $.getJson('https://api.github.com/users/' + username)
}

describe('a simple interval', function(){

    it('#getUserInfo',function(){
        getUserInfo('elie').then(function(data){
            expect(data.name).toBe('Elie Schoppik');
            done(); //HAVE TO CALL THIS
        })
    })
})