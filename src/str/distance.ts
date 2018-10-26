// noinspection SpellCheckingInspection
/**
 * Returns the levenshtein string distance of two strings.
 *
 * @memberof String
 * @since 6.3.0
 * @param {string} str1 First string to compare.
 * @param {string} str2 Second string to compare.
 * @returns {number} Distance between the two strings.
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
    if (str1.length === 0) {
        return str2.length;
    } else if (str2.length === 0) {
        return str1.length;
    }

    const matrix: number[][] = [];

    for (let y = 0; y <= str2.length; y++) {
        matrix[y] = [y];
    }

    for (let x = 0; x <= str1.length; x++) {
        matrix[0][x] = x;
    }

    for (let y = 1; y <= str2.length; y++) {
        const matrixColumnCurrent = matrix[y];
        const matrixColumnLast = matrix[y - 1];

        for (let x = 1; x <= str1.length; x++) {
            if (str2.charAt(y - 1) === str1.charAt(x - 1)) {
                matrixColumnCurrent[x] = matrixColumnLast[x - 1];
            } else {
                const substitution = matrixColumnLast[x - 1] + 1;
                const insertion = matrixColumnCurrent[x - 1] + 1;
                const deletion = matrixColumnLast[x] + 1;

                matrixColumnCurrent[x] = Math.min(
                    substitution,
                    insertion,
                    deletion
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
};

export { strDistance };
