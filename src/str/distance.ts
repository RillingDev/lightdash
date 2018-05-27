/**
 * Returns levenshtein string distance of two strings.
 *
 * @function strDistance
 * @memberof String
 * @since 6.3.0
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 * @example
 * strDistance("Kitten", "Sitting")
 * // => 3
 *
 * strDistance("String", "Stribng")
 * // => 1
 *
 * strDistance("foo", "foo")
 * // => 0
 */
const strDistance = (str1: string, str2: string): number => {
    // Cache string length
    const str1Length = str1.length;
    const str2Length = str2.length;

    if (str1Length === 0) {
        // Exit early if str1 is empty
        return str2Length;
    }

    if (str2Length === 0) {
        // Exit early if str2 is empty
        return str1Length;
    }
    // Create matrix that is (str2.length+1)x(str1.length+1) fields
    const matrix: number[][] = [];

    // Increment along the first column of each row
    for (let y = 0; y <= str2Length; y++) {
        matrix[y] = [y];
    }

    // Increment each column in the first row
    for (let x = 0; x <= str1Length; x++) {
        matrix[0][x] = x;
    }

    // Fill matrix
    for (let y = 1; y <= str2Length; y++) {
        const matrixColumnCurrent = matrix[y];
        const matrixColumnLast = matrix[y - 1];

        for (let x = 1; x <= str1Length; x++) {
            if (str2.charAt(y - 1) === str1.charAt(x - 1)) {
                // Check if letter at the position is the same
                matrixColumnCurrent[x] = matrixColumnLast[x - 1];
            } else {
                // Check for substitution/insertion/deletion
                const substitution = matrixColumnLast[x - 1] + 1;
                const insertion = matrixColumnCurrent[x - 1] + 1;
                const deletion = matrixColumnLast[x] + 1;

                // Get smallest of the three
                matrixColumnCurrent[x] = Math.min(
                    substitution,
                    insertion,
                    deletion
                );
            }
        }
    }

    // Return max value
    return matrix[str2Length][str1Length];
};

export default strDistance;
