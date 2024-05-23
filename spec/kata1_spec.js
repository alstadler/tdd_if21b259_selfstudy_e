describe ('alf_help', function () {
    it('should return spaceship coordinates when found', function () {
        let map = `..........\n..........\n..........\n.......X..\n...........\n..........`;
        expect(findSpaceship(map)).toEqual([7, 2]);
    });

    it('should return "Spaceship lost forever." if spaceship is not found', function () {
        let map = `..........\n..........\n..........\n..........\n...........\n..........`;
        expect(findSpaceship(map)).toEqual('Spaceship lost forever.');
    });
})