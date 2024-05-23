function findSpaceship(map) {
	let rows = map.split('\n'); // split map into rows

	// loop through each row to find X
	for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
		let columnIndex = rows[rowIndex].indexOf('X');
		if (columnIndex !== -1) { // 'X' found -> return coordinates
			return [columnIndex, rows.length - 1 - rowIndex];
		}
	}
	return ('Spaceship lost forever.');
}
