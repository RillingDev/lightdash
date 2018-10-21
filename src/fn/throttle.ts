import { anyVoidFn } from "./lib/anyVoidFn";

/**
 * Throttles a function to only run every n ms.
 *
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn Function to throttle.
 * @param {number} timeout Timeout to use.
 * @param {boolean} [immediate=false] If the function should be invoked immediatly.
 * @returns {Function} Throttled function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function can only run every 500ms
 */
const fnThrottle = (
    fn: anyVoidFn,
    timeout: number,
    immediate = false
): anyVoidFn => {
    // Private helper that creates a returns a timeout to reset the canRun state and the timer
    const getTimer = () =>
        setTimeout(() => {
            canRun = true;
            clearTimeout(timer);
        }, timeout);
    let canRun = immediate;
    // Has to be set to any because it can either a number (in browsers) or a Timer instance (in NodeJS)
    let timer: any = immediate ? -1 : getTimer();

    // tslint:disable-next-line:only-arrow-functions
    return function() {
        if (canRun) {
            fn(...arguments);
            canRun = false;
            timer = getTimer();
        }
    };
};

export { fnThrottle };
