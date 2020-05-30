/**
 * Returns the levenshtein string distance of two strings.
 *
 * @since 6.3.0
 * @category String
 * @param string1 First string to compare.
 * @param string2 Second string to compare.
 * @returns Distance between the two strings.
 * @example
 * distance("Kitten", "Sitting")
 * // => 3
 *
 * distance("String", "Stribng")
 * // => 1
 *
 * distance("foo", "foo")
 * // => 0
 */
const distance = (string1: string, string2: string): number => {
    if (string1.length === 0) {
        return string2.length;
    }
    if (string2.length === 0) {
        return string1.length;
    }

    const matrix: number[][] = [];

    for (let y = 0; y <= string2.length; y++) {
        matrix[y] = [y];
    }

    for (let x = 0; x <= string1.length; x++) {
        matrix[0][x] = x;
    }

    for (let y = 1; y <= string2.length; y++) {
        const matrixColumnCurrent = matrix[y];
        const matrixColumnLast = matrix[y - 1];

        for (let x = 1; x <= string1.length; x++) {
            if (string2.charAt(y - 1) === string1.charAt(x - 1)) {
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

    return matrix[string2.length][string1.length];
};

export { distance };
