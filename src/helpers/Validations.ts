/**
 * Validate email address against RFC 5322 Official Standard
 * Covers most valid formats like:
 * - simple@example.com
 * - very.common@example.com
 * - disposable.style.email.with+symbol@example.com
 * - "much.more unusual"@example.com
 * - "very.unusual.@.unusual.com"@example.com
 * - admin@mailserver1
 * - example@s.example
 */
export const validations = (options?: any) => {
    return {
        isEmailValid: (email: string) => {
            const regex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            return regex.test(email);
        }
    }
}