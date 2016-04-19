/**
 * Created by christianschulz1 on 19.04.16.
 */
describe('Mein erster Gagarin-Test', function () {
   var server = meteor();
    it('should just work', function () {
        return server.execute(function () {
            console.log("Ich lebe!!!");
        });
    });
});