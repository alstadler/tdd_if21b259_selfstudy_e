describe ('alf_help', function () {
    it('should return spaceship coordinates when found', function () {
        let map = `..........\n..........\n..........\n.......X..\n..........\n..........`;
        expect(findSpaceship(map)).toEqual([7, 2]);
    })
})