/* tslint:disable */
/* eslint-disable */
/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.43) is used. For example, calling `/info` is the same as calling `/v1.43/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ```
 *
 * The version of the OpenAPI document: 1.43
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * A test to perform to check that the container is healthy.
 * @export
 * @interface HealthConfig
 */
export interface HealthConfig {
  /**
   * The test to perform. Possible values are:
   *
   * - `[]` inherit healthcheck from image or parent image
   * - `["NONE"]` disable healthcheck
   * - `["CMD", args...]` exec arguments directly
   * - `["CMD-SHELL", command]` run command with system's default shell
   *
   * @type {Array<string>}
   * @memberof HealthConfig
   */
  Test?: Array<string>;
  /**
   * The time to wait between checks in nanoseconds. It should be 0 or at
   * least 1000000 (1 ms). 0 means inherit.
   *
   * @type {number}
   * @memberof HealthConfig
   */
  Interval?: number;
  /**
   * The time to wait before considering the check to have hung. It should
   * be 0 or at least 1000000 (1 ms). 0 means inherit.
   *
   * @type {number}
   * @memberof HealthConfig
   */
  Timeout?: number;
  /**
   * The number of consecutive failures needed to consider a container as
   * unhealthy. 0 means inherit.
   *
   * @type {number}
   * @memberof HealthConfig
   */
  Retries?: number;
  /**
   * Start period for the container to initialize before starting
   * health-retries countdown in nanoseconds. It should be 0 or at least
   * 1000000 (1 ms). 0 means inherit.
   *
   * @type {number}
   * @memberof HealthConfig
   */
  StartPeriod?: number;
}

/**
 * Check if a given object implements the HealthConfig interface.
 */
export function instanceOfHealthConfig(value: object): value is HealthConfig {
  return true;
}

export function HealthConfigFromJSON(json: any): HealthConfig {
  return HealthConfigFromJSONTyped(json, false);
}

export function HealthConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthConfig {
  if (json == null) {
    return json;
  }
  return {
    Test: json["Test"] == null ? undefined : json["Test"],
    Interval: json["Interval"] == null ? undefined : json["Interval"],
    Timeout: json["Timeout"] == null ? undefined : json["Timeout"],
    Retries: json["Retries"] == null ? undefined : json["Retries"],
    StartPeriod: json["StartPeriod"] == null ? undefined : json["StartPeriod"],
  };
}

export function HealthConfigToJSON(json: any): HealthConfig {
  return HealthConfigToJSONTyped(json, false);
}

export function HealthConfigToJSONTyped(
  value?: HealthConfig | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    Test: value["Test"],
    Interval: value["Interval"],
    Timeout: value["Timeout"],
    Retries: value["Retries"],
    StartPeriod: value["StartPeriod"],
  };
}
