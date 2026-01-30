/**
 * Device detection utilities for BidZone
 * Used to determine the user's device platform for app download redirection
 */

/**
 * Checks if the current device is running Android OS
 * @returns boolean - true if Android device
 */
export function isAndroid(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
  return /android/i.test(userAgent);
}

/**
 * Checks if the current device is running iOS (iPhone, iPad, iPod)
 * @returns boolean - true if iOS device
 */
export function isIOS(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
  return /iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
}

/**
 * Gets the current platform type
 * @returns 'android' | 'ios' | 'desktop'
 */
export function getPlatform(): "android" | "ios" | "desktop" {
  if (isAndroid()) return "android";
  if (isIOS()) return "ios";
  return "desktop";
}
