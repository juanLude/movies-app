// Abstract class => serves as a blueprint for other classes to extend.
// Abstract class => contain abstract methods that must be implemented by their subclasses
// Subclasses of HttpAdapter will need to implement any abstract methods defined in the HttpAdapter class
export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}
